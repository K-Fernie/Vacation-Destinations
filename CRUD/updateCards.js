import { imageURL } from '../helpers';
import { destName, locale, description } from '../script.js';

export async function updateFunc(id) {
  const URL = 'https://destinations-api-kfernie.herokuapp.com/destinations';
  const img = await imageURL(destName.value);
  await fetch(URL, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: ObjectId(id),
      destination: destName.value,
      location: locale.value,
      description: description.value,
      photo: imageURL(destName.value),
    }),
  });
}
