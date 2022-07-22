import { imageURL } from './helpers.js';

const destName = document.getElementById('dest-name');
const locale = document.getElementById('location');
const description = document.getElementById('description');

export async function submitFunc() {
  const img = await imageURL(destName.value);
  await fetch('https://destinations-api-kfernie.herokuapp.com/destinations', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      destination: destName.value,
      location: locale.value,
      description: description.value,
      photo: img,
    }),
  })
    .then(res => {
      if (res.ok) return res.json();
    })
    .then(response => {
      window.location.reload(true);
    });
}
