// app.js

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Navegando a sección...');
  });
});