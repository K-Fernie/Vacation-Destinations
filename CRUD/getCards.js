import { cardCreate } from '../helpers.js';

export function initialGet() {
  const serverURL = 'https://destinations-api-kfernie.herokuapp.com/';
  fetch(serverURL)
    .then(res => res.json())
    .then(data => {
      //use a for loop to iterate over the objects and then create cards from them
      console.log(data);
      data.forEach(element => {
        const id = element._id;
        const dest = element.destination;
        const loc = element.location;
        const desc = element.description;
        const img = element.photo;
        cardCreate(img, loc, dest, desc, id);
      });
    });
}
