"""Conversión del formulario GitHub Issues a contenido público de GeoTrainer."""
import datetime
import json
import os
import pathlib
import re

body = os.environ['ISSUE_BODY']
labels = {
    'Título': 'titulo',
    'Categoría': 'categoria',
    'Icono': 'icono',
    'Fecha de publicación (AAAA-MM-DD)': 'fecha',
    'Explicación': 'contenido',
    'URL de imagen (opcional)': 'imagen',
    'Preguntas (opcional)': 'preguntas',
}
fields = {}
for heading, value in re.findall(r'### ([^\n]+)\n+([\s\S]*?)(?=\n### |\Z)', body):
    key = labels.get(heading.strip())
    if key:
        fields[key] = value.strip()

for k in ('titulo', 'categoria', 'fecha', 'contenido'):
    if not fields.get(k) or fields[k] == '_No response_':
        raise ValueError(f'Falta el campo {k}')
if fields['categoria'] not in ('Historia', 'Geografía', 'Cultura', 'Curiosidades'):
    raise ValueError('Categoría no permitida')
datetime.date.fromisoformat(fields['fecha'])
if len(fields['titulo']) > 180 or len(fields['contenido']) > 40000:
    raise ValueError('Contenido demasiado largo')
qs = []
for line in fields.get('preguntas', '').splitlines():
    if not line.strip() or line.strip() == '_No response_':
        continue
    parts = [s.strip() for s in line.split('|')]
    if len(parts) != 7 or parts[5] not in ('1','2','3','4'):
        raise ValueError('Formato incorrecto de pregunta: ' + line[:100])
    qs.append({'enunciado': parts[0], 'opciones': parts[1:5], 'correcta': int(parts[5])-1, 'explicacion': parts[6]})
path = pathlib.Path('publicaciones.json')
publicaciones = json.loads(path.read_text(encoding='utf-8'))
article = {
    'id': f"gh-{os.environ['GITHUB_RUN_ID']}",
    'titulo': fields['titulo'], 'categoria': fields['categoria'],
    'icono': fields.get('icono') or '📖', 'fecha': fields['fecha'],
    'contenido': fields['contenido'], 'preguntas': qs,
}
imagen = fields.get('imagen', '')
if imagen.startswith('https://'):
    article['imagen'] = imagen
publicaciones.append(article)
path.write_text(json.dumps(publicaciones, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
