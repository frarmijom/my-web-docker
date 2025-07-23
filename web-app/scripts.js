function cargarComponente(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html)
    .catch(err => console.error(`Error al cargar ${archivo}:`, err));
}

function mostrarCargando() {
  const contenido = document.getElementById('contenido');
  contenido.style.opacity = '0.3';
  contenido.innerHTML = '<div class="loader">Cargando...</div>';
}

function cargarSeccion(ruta) {
  mostrarCargando();
  fetch(ruta)
    .then(res => res.text())
    .then(html => {
      const contenido = document.getElementById('contenido');
      contenido.style.opacity = '0';
      setTimeout(() => {
        contenido.innerHTML = html;
        contenido.classList.add('slide-in');
        setTimeout(() => contenido.classList.remove('slide-in'), 800);
        contenido.style.opacity = '1';
      }, 300);
    })
    .catch(err => console.error(`Error al cargar sección ${ruta}:`, err));
}

window.addEventListener('DOMContentLoaded', () => {
  cargarComponente('header', 'header.html');
  cargarComponente('menu', 'menu.html');
  cargarComponente('footer', 'footer.html');
  cargarSeccion('sections/inicio.html');

  document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.closest('nav')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      if (href.startsWith('sections/')) {
        cargarSeccion(href);
      } else {
        window.location.href = href;
      }
    }
  });
});