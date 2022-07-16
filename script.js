'use strict';

const destName = document.getElementById('dest-name');
const locale = document.getElementById('location');
const photo = document.getElementById('photo');
const description = document.getElementById('description');
const cardContainer = document.getElementById('card-container');
const myForm = document.getElementById('destination-form');
const addBtn = document.getElementById('addBtn');
const defaultImage =
  'https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2020/04/21121102/GettyImages-1160947136-1.jpg';
//create functions for card creation\
function createCard() {
  const dNValue = destName.value;
  const locValue = locale.value;
  const photoVal = photo.value;
  const descValue = description.value;

  var newDiv = document.createElement('div');
  newDiv.innerHTML = `
  <img src="${photoVal}" class='card-img-top' alt ="vacation photo"/>
  <div class='card-body'>
    <h5 class='card-title'>${dNValue}</h5>
    <h5 class='card-title>${locValue}</h5>
    <p class='card-text'>${descValue}</p>
  `;
  newDiv.setAttribute('class', 'card-body');

  var newBtn1 = document.createElement('button');
  newBtn1.setAttribute('class', 'btn btn-primary');
  newBtn1.innerText = 'Edit';
  newBtn1.addEventListener('click', () => {});

  var newBtn2 = document.createElement('button');
  newBtn2.setAttribute('class', 'btn btn-primary');
  newBtn2.innerText = 'Remove';
  newBtn2.addEventListener('click', () => {
    newBtn2.parentElement.remove();
  });

  newDiv.appendChild(newBtn1);
  newDiv.appendChild(newBtn2);

  cardContainer.appendChild(newDiv);
  document.querySelector('form').reset();
}
//create function for edit
//create function for remove

myForm.addEventListener('submit', e => {
  e.preventDefault();
  createCard();
});
