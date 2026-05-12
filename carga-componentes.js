document.addEventListener("DOMContentLoaded", () => {
  const rutas = {
    header: "componentes/header.html",
    footer: "componentes/footer.html"
  };

  function cargar(id, archivo) {
    const contenedor = document.getElementById(id);
    if (!contenedor) return;
    fetch(archivo)
      .then(res => res.text())
      .then(html => {
        contenedor.innerHTML = html;
      })
      .catch(err => console.error(`Error al cargar ${archivo}:`, err));
  }

  cargar("header-container", rutas.header);
  cargar("footer-container", rutas.footer);
});