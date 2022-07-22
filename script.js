'use strict';
//Setting Element Variables
export const destName = document.getElementById('dest-name');
export const locale = document.getElementById('location');
export const description = document.getElementById('description');
export const myForm = document.getElementById('destination-form');

import { cardCreate, imageURL } from './helpers.js';
import { initialGet } from './CRUD/getCards.js';
import { submitFunc } from './CRUD/postCards.js';
//Function for vacation card creation

initialGet();

//Actions that occur on submit
myForm.addEventListener('submit', async e => {
  e.preventDefault();
  submitFunc();
});

//this is connecting to my server and creating cards from it
