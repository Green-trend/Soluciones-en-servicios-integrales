const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});


document.querySelectorAll(
  '.text-small, .main-text, .main-texto, .main-title, .main-title-1, .main-title-text, .logo-greentreend, .text-card, .muestra-1, .flex-card, .process-container, .gallery-section, .main-title-text2, .main-title-2, .main-title-3, .main-title-4, .picture-gpps, .picture-muestra, .card, .card-plastic, .card-plastic-image, .img-cards, .main-title-5, .tabla-comparativa, .contact-container, .cont-footer'
).forEach(el => observer.observe(el));

const btnTop = document.getElementById("btnTop");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    
    if (scrollPosition > pageHeight / 6) {
      btnTop.classList.add("show");
      btnTop.classList.remove("hide");
    } else {
      btnTop.classList.add("hide");
      btnTop.classList.remove("show");
    }
  });

  

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

function toggleSmooth(id, btn) {
    const content = document.getElementById(id);
    
    // Alterna la clase 'show'
    content.classList.toggle('show');
    
    // Cambia el texto con un pequeño retraso
    if (content.classList.contains('show')) {
        btn.textContent = "Ver menos ↑";
    } else {
        btn.textContent = "Ver más ↓";
        // Opcional: Desplazar la vista al título si la categoría es muy larga
        content.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
}


const checkbox = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

// Verificar si ya había una preferencia guardada
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  
  // Guardar preferencia
  let theme = 'light';
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});
