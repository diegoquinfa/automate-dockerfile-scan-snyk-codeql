const form = document.querySelector('#form');
const img = document.querySelector('#img-qr');
const inputUrl = document.querySelector('#url');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  try {
    if (new URL(inputUrl.value)) {
      const newUrl = inputUrl.value.replaceAll('/', '^');

      img.src = `${window.location.href}api/qr/${newUrl}`;
    }
  } catch {
    alert('No es un url valido');
  }
});

inputUrl.addEventListener('input', () => {
  img.src = './assets/icons/image.svg';
});
