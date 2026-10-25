/* GeoTrainer · Aprende: publicaciones remotas sin Supabase. */
(() => {
  'use strict';
  const listado = document.getElementById('lista-sabiasque');
  const menu = document.getElementById('sabiasque-menu');
  const boton = document.getElementById('btn-sabiasque');
  if (!listado || !menu || !boton || typeof SABIAS_QUE === 'undefined') return;
  const title = menu.querySelector('h2');
  if (title) title.textContent = 'Aprende';
  const intro = menu.querySelector('.espana-cabecera p');
  if (intro) intro.textContent = 'Historia, geografía, cultura y curiosidades. Nuevas publicaciones periódicas.';
  const label = boton.querySelector('strong');
  if (label) label.textContent = 'Aprende';
  const subtitle = boton.querySelector('small');
  if (subtitle) subtitle.textContent = 'Artículos nuevos de historia, geografía y cultura.';
  const status = document.createElement('p');
  status.id = 'aprende-estado';
  status.className = 'aprende-estado';
  listado.before(status);
  const filtro = document.createElement('select');
  filtro.id = 'aprende-filtro';
  filtro.setAttribute('aria-label','Filtrar publicaciones por categoría');
  filtro.innerHTML = '<option value="">Todas las categorías</option><option>Historia</option><option>Geografía</option><option>Cultura</option><option>Curiosidades</option>';
  listado.before(filtro);
  let articulos = [];
  const key = 'geotrainer-aprende-visto';
  let ultimoVisto = localStorage.getItem(key) || '';
  const html = (s) => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function lista() {
    listado.replaceChildren();
    const visibles = articulos.filter(a=>!filtro.value || a.categoria === filtro.value);
    if (!visibles.length) {
      status.textContent = articulos.length ? 'No hay artículos en esta categoría.' : 'Aún no hay publicaciones. Pronto encontrarás artículos aquí.';
      return;
    }
    status.textContent = articulos.length + (articulos.length === 1 ? ' artículo disponible' : ' artículos disponibles');
    for (const a of visibles) {
      const b = document.createElement('button');
      b.className = 'boton-portada';
      const nuevo = a.fecha > ultimoVisto ? ' <span class="aprende-nuevo">Nuevo</span>' : '';
      b.innerHTML = `<span class="boton-icono">${html(a.icono || '📖')}</span><span class="boton-texto"><strong>${html(a.titulo)}${nuevo}</strong><small>${html(a.categoria)} · ${html(a.fecha)}</small></span><span class="boton-flecha">›</span>`;
      b.addEventListener('click',()=>abrir(a));
      listado.appendChild(b);
    }
  }
  function abrir(a) {
    const pub = {pais:a.categoria, bandera:a.icono || '📖', titulo:a.titulo, fecha:a.fecha, contenido:a.contenido, secciones:[]};
    mostrarDetalleSabiasQue(pub);
    const cont = document.getElementById('contenido-sabiasque');
    if (!cont) return;
    if (a.imagen && /^https:\/\//.test(a.imagen)) {
      const i=document.createElement('img');i.src=a.imagen;i.alt=a.titulo;i.loading='lazy';i.className='aprende-imagen';
      cont.querySelector('.sabias-cuerpo')?.prepend(i);
    }
    const qs=Array.isArray(a.preguntas) ? a.preguntas : [];
    if(qs.length) {
      const section=document.createElement('section'); section.className='aprende-test';
      const h=document.createElement('h3');h.textContent='Pon a prueba lo aprendido';section.append(h);
      qs.forEach((q,i)=>{
        if(!Array.isArray(q.opciones)||q.opciones.length!==4||!Number.isInteger(q.correcta)||q.correcta<0||q.correcta>3)return;
        const group=document.createElement('div');group.className='aprende-pregunta';
        const p=document.createElement('p');p.textContent=`${i+1}. ${q.enunciado}`;group.append(p);
        const feedback=document.createElement('p');feedback.setAttribute('aria-live','polite');
        q.opciones.forEach((o,j)=>{
          const bt=document.createElement('button');bt.className='aprende-opcion';bt.textContent=o;
          bt.addEventListener('click',()=>{
            group.querySelectorAll('button').forEach(x=>x.disabled=true);
            feedback.textContent=(j===q.correcta?'✅ Correcto. ':'❌ Incorrecto. Respuesta: '+q.opciones[q.correcta]+'. ')+(q.explicacion||'');
          });group.append(bt);
        });group.append(feedback);section.append(group);
      });cont.append(section);
    }
  }
  async function actualizar() {
    status.textContent='Cargando publicaciones…';
    try {
      const res=await fetch('publicaciones.json?t='+Date.now(), {cache:'no-store'});
      if (!res.ok) throw new Error('HTTP '+res.status);
      const data=await res.json();
      if (!Array.isArray(data)) throw new Error('Formato no válido');
      const hoy=new Date().toLocaleDateString('sv-SE',{timeZone:'Europe/Madrid'});
      articulos=data.filter(a=>a && /^\d{4}-\d{2}-\d{2}$/.test(a.fecha) && a.fecha<=hoy && a.titulo && a.contenido)
        .sort((a,b)=>b.fecha.localeCompare(a.fecha));
      SABIAS_QUE.splice(0,SABIAS_QUE.length,...articulos.map(a=>({pais:a.categoria,bandera:a.icono||'📖',titulo:a.titulo,fecha:a.fecha,contenido:a.contenido})));
      lista();
      if (articulos.length && articulos[0].fecha>ultimoVisto) {
        label.textContent='Aprende · Nuevo';
      }
      // El aviso se retira tras visitar la sección.
      if (articulos.length) {
        ultimoVisto=articulos[0].fecha;
        localStorage.setItem(key,ultimoVisto);
      }
    } catch(e) {
      status.textContent='No hemos podido actualizar. Comprueba la conexión a Internet.';
      listado.replaceChildren();
      console.warn('Publicaciones:',e);
    }
  }
  filtro.addEventListener('change',lista);
  boton.addEventListener('click',()=>{actualizar();});
  // Las lecturas anteriores quedan disponibles hasta la próxima conexión.
  
  // ======================================
  // APRENDE COMO APARTADO PRINCIPAL
  // ======================================

  // Mover Aprende desde Viajes a la portada
  const menuPrincipal = document.querySelector(
    '#inicio .inicio-opciones'
  );

  if (menuPrincipal && boton) {
    menuPrincipal.appendChild(boton);
  }

  // Cambiar el icono de Aprende
  const iconoAprende = boton.querySelector('.boton-icono');

  if (iconoAprende) {
    iconoAprende.textContent = '📚';
  }

  // Volver de Aprende al menú principal
  const volverAprende = document.getElementById(
    'volver-sabiasque-inicio'
  );

  if (volverAprende) {
    volverAprende.addEventListener(
      'click',
      function(evento) {
        evento.stopImmediatePropagation();
        mostrarInicioPrincipal();
      },
      true
    );
  }

})();
