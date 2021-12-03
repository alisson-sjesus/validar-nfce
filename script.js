const output = document.querySelector('.output');
const btn = document.querySelector('.btn-copiar');

// const botao = document.querySelector('.btn-copiar');

btn.addEventListener('click', () => {
  window.navigator.clipboard.writeText(output.innerText);
});
