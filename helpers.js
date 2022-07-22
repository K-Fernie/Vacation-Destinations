import { delFunc } from './CRUD/deleteCards.js';
import { updateFunc } from './CRUD/updateCards.js';

const photo = document.getElementById('photo');
const cardContainer = document.getElementById('card-container');

export function cardCreate(image, localeVal, destNameVal, descriptionVal, id) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card');
  newDiv.setAttribute('card-id', id);
  newDiv.innerHTML = `
    <img src='${image}' class='card-img-top img-size' alt ="vacation photo"/>
    <div class='card-body'>
      <h5 class='card-title'>${destNameVal}</h5>
      <h4 class='card-subtitle mb-2 text-muted'>${localeVal}</h4>
      <p class='card-text'>${descriptionVal}</p>
    `;

  var newBtn1 = document.createElement('button');
  newBtn1.setAttribute('class', 'btn btn-primary');
  newBtn1.innerText = 'Edit';
  newBtn1.addEventListener('click', () => {
    //edit button functionality
    const parentEl = newBtn1.parentElement;
    let destNameVal = parentEl.getElementsByTagName('h5')[0];
    let localeVal = parentEl.getElementsByTagName('h4')[0];
    let descriptionVal = parentEl.getElementsByTagName('p')[0];

    let newDestNameVal = prompt('Enter a new Destination Name');
    let newLocaleVal = prompt('Enter a new Location');
    let newDescriptionVal = prompt('Enter a new description');

    if (!newDestNameVal) newDestNameVal = destNameVal.innerText;
    if (!newLocaleVal) newLocaleVal = localeVal.innerText;
    if (!newDescriptionVal) newDescriptionVal = descriptionVal.innerText;
    let id = newDiv.getAttribute('card-id');

    updateFunc(id, newDestNameVal, newLocaleVal, newDescriptionVal);
  });

  var newBtn2 = document.createElement('button');
  newBtn2.setAttribute('class', 'btn btn-danger');
  newBtn2.innerText = 'Remove';
  newBtn2.addEventListener('click', () => {
    //remove button functionality
    delFunc(newDiv.getAttribute('card-id'));
  });

  newDiv.appendChild(newBtn1);
  newDiv.appendChild(newBtn2);

  cardContainer.appendChild(newDiv);
  document.querySelector('form').reset();
}

export async function imageURL(dNValue) {
  let city = dNValue.replaceAll(' ', '-');
  let returnval;
  const ACCESS_KEY = 'C6L_DP5y54cCQkGgwYtfcDq0gdm059TKAP3BZScVWek';
  const URL = `https://api.unsplash.com/search/photos?query=${city}&client_id=${ACCESS_KEY}`;
  await fetch(URL)
    .then(res => res.json())
    .then(data => {
      //returns the regular image
      console.log(data.results[0].urls.regular);
      returnval = data.results[0].urls.regular;
    });
  return returnval;
}
