const nfce = document.querySelector('.nfce');
const output = document.querySelector('.output');
const btnCopiar = document.querySelector('.btn-copiar');
const btn = document.querySelector('.btn');
const input = nfce.value;

btnCopiar.addEventListener('click', () => {
  window.navigator.clipboard.writeText(output.innerText);
});
