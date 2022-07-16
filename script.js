'use strict';

//variables to get the elements on the page
const destName = document.getElementById('dest-name');
const locale = document.getElementById('location');
const photo = document.getElementById('photo');
const description = document.getElementById('description');
const cardContainer = document.getElementById('card-container');
const addBtn = document.getElementById('addBtn');
const defaultImage =
  'https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2020/04/21121102/GettyImages-1160947136-1.jpg';
//create functions for card creation
addBtn.addEventListener('click', e => {
  e.preventDefault();
  const dNValue = destName.value;
  const locValue = locale.value;
  const photoVal = photo.value;
  const descValue = description.value;

  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card-body');
  var newBtn1 = document.createElement('button');
  newBtn1.setAttribute('class', 'btn btn-primary');
  newBtn1.innerText = 'Edit';
  var newBtn2 = document.createElement('button');
  newBtn2.setAttribute('class', 'btn btn-primary');
  newBtn2.innerText = 'Remove';
  
  newDiv.innerHTML = `
  <img src="${photoVal}" class='card-img-top' alt ="vacation photo"/>
  <div class='card-body'>
    <h5 class='card-title'>${dNValue}</h5>
    <h5 class='card-title>${locValue}</h5>
    <p class='card-text'>${descValue}</p>
  `;
  newDiv.appendChild(newBtn1);
  newDiv.appendChild(newBtn2);

  document.querySelector('form').reset();
  cardContainer.appendChild(newDiv);
});
