# GeoTrainer

Aplicación educativa estática de geografía, historia y viajes, publicada con GitHub Pages.

## Revisión 2 · octubre de 2026

- Mapas interactivos de países y capitales para Europa, Asia, África, América y Oceanía.
- Geografía física con montañas, ríos y mares; mapas didácticos de montañas y mares.
- Banco de 50 grandes ríos del mundo con filtro geográfico; mapa europeo de ríos.
- Mapa didáctico de España para provincias, comunidades, ríos y relieve.
- Mapas optimizados para móvil: objetivos táctiles amplios, zoom/pan/pellizco, ampliación automática de zonas densas y modo de mapa a pantalla completa.
- Historia con estructura de subtemas y artículos ampliados.
- Criterios y fuentes visibles desde el pie de página.
- Content Security Policy y validación automática mediante `node validate.js`.


## Sistema de progreso · octubre de 2026

- «Mi expedición» opcional, sin cuenta y guardada solo en el dispositivo.
- PX contenidos: en un examen de 10, 7/10 = +5 PX, 8/10 = +7, 9/10 = +10 y 10/10 = +15; los exámenes de 20 escalan proporcionalmente.
- Los niveles requieren cada vez más PX y mantienen los rangos Caminante, Viajero, Navegante, Explorador, Cartógrafo, Geógrafo, Maestro del Atlas y Gran Explorador.
- El repaso de fallos no se considera un nuevo examen: conserva la nota original y concede +1 PX solo por cada error recuperado por primera vez.
- Las respuestas de repaso no inflan la precisión global ni el dominio; sirven para pasar de «en aprendizaje» a «recuperada» y después a «consolidada» mediante repaso espaciado.
- El entrenamiento concede +1 PX cada 5 aciertos distintos, con límite diario, y la primera actividad del día aporta +2 PX.
- Dominio por categorías a partir de respuestas de entrenamiento y exámenes reales.
- Colección de objetos y logros educativos, rachas, exportación, importación y borrado del progreso local.
- Un mismo examen repetido durante 24 h no vuelve a conceder PX de examen.

## Validación local

```bash
node validate.js
```

El repositorio no necesita dependencias JavaScript externas para ejecutar la aplicación.
