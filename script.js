'use strict';
//Setting Element Variables
const destName = document.getElementById('dest-name');
const locale = document.getElementById('location');
const description = document.getElementById('description');
const myForm = document.getElementById('destination-form');

import { cardCreate, imageURL } from './helpers.js';
import { initialGet } from './getCards.js';
import { submitFunc } from './postCards.js';
//Function for vacation card creation

initialGet();

//Actions that occur on submit
myForm.addEventListener('submit', async e => {
  e.preventDefault();
  submitFunc();
});

//this is connecting to my server and creating cards from it
