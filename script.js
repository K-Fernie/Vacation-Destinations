'use strict';

//Setting Element Variables
const destName = document.getElementById('dest-name');
const locale = document.getElementById('location');
const photo = document.getElementById('photo');
const description = document.getElementById('description');
const cardContainer = document.getElementById('card-container');
const myForm = document.getElementById('destination-form');
const addBtn = document.getElementById('addBtn');
const defaultImage =
  'https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2020/04/21121102/GettyImages-1160947136-1.jpg';

//Function for vacation card creation
function cardCreate(image, localeVal, destNameVal, descriptionVal) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card');
  newDiv.innerHTML = `
  <img src='${image}' class='card-img-top' alt ="vacation photo"/>
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
    let img = parentEl.getElementsByTagName('img')[0];
    let destNameVal = parentEl.getElementsByTagName('h5')[0];
    let localeVal = parentEl.getElementsByTagName('h4')[0];
    let descriptionVal = parentEl.getElementsByTagName('p')[0];

    let newImg = prompt('Enter a new Image URL');
    let newDestNameVal = prompt('Enter a new Destination Name');
    let newLocaleVal = prompt('Enter a new Location');
    let newDescriptionVal = prompt('Enter a new description');

    if (newDestNameVal) destNameVal.innerText = newDestNameVal;
    if (newImg) img.src = newImg;
    if (newLocaleVal) localeVal.innerText = newLocaleVal;
    if (newDescriptionVal) descriptionVal.innerText = newDescriptionVal;
  });

  var newBtn2 = document.createElement('button');
  newBtn2.setAttribute('class', 'btn btn-danger');
  newBtn2.innerText = 'Remove';
  newBtn2.addEventListener('click', () => {
    //remove button functionality
    newBtn2.parentElement.remove();
  });

  newDiv.appendChild(newBtn1);
  newDiv.appendChild(newBtn2);

  cardContainer.appendChild(newDiv);
  document.querySelector('form').reset();
}

//Building the card based on photo value provided
function cardBuild() {
  const dNValue = destName.value;
  const locValue = locale.value;
  const photoVal = photo.value;
  const descValue = description.value;

  if (photoVal) {
    cardCreate(photoVal, locValue, dNValue, descValue);
  } else {
    cardCreate(defaultImage, locValue, dNValue, descValue);
  }
}

//Actions that occur on submit
myForm.addEventListener('submit', e => {
  e.preventDefault();
  cardBuild();
});
