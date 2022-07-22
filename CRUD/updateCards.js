import { imageURL } from '../helpers.js';

export async function updateFunc(id, destName, locale, description) {
  const URL = 'https://destinations-api-kfernie.herokuapp.com/destinations';
  const img = await imageURL(destName);
  await fetch(URL, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: id,
      destination: destName,
      location: locale,
      description: description,
      photo: img,
    }),
  }).then(response => {
    window.location.reload(true);
  });
}
