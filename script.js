const nfce = document.querySelector('.nfce');
const output = document.querySelector('.output');
const btnCopiar = document.querySelector('.btn-copiar');
const btn = document.querySelector('.btn');
const aviso = document.querySelector('.aviso');
const input = nfce.value;

function handleClickBtn() {}

btn.addEventListener('click', handleClickBtn);

btnCopiar.addEventListener('click', () => {
  window.navigator.clipboard.writeText(output.innerText);
  aviso.style.display = 'block';

  setTimeout(() => {
    aviso.style.display = 'none';
  }, 2500);
});
