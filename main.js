<<<<<<< HEAD
const objectArray = [];
const movieTitle = document.querySelector('.title__input');
const movieBio = document.querySelector('.bio__input');
const movieGenre = document.querySelector('.genre__input');
const createMovieButton = document.querySelector('.button__create__movie');
const randomMovie = document.querySelector('.random__button');
const main = document.querySelector('.main');
const winnerCard = document.querySelector('.winner-all');
const inputs = document.querySelector('.input');

const createHandler = () => {
  inputError();
}

const randomHandler = () => {
  watchRandom();
}

const mainHandler = () => {
  deleteCard();
}

const winnerCircle = () => {
  deleteWinnerCard();
}

const makeCard = (movieObj) => {
=======
var objectArray = JSON.parse(localStorage.getItem('parsedArray')) || [];
var movieTitle = document.querySelector('.title__input');
var movieBio = document.querySelector('.bio__input');
var movieGenre = document.querySelector('.genre__input');
var createMovieButton = document.querySelector('.button__create__movie');
var randomMovie = document.querySelector('.random__button');
var main = document.querySelector('.main');
var winnerCard = document.querySelector('.winner-all');
var inputs = document.querySelector('.input');
var newMovie = null;

createMovieButton.addEventListener('click', createHandler);
randomMovie.addEventListener('click', randomHandler);
main.addEventListener('click', mainHandler);
winnerCard.addEventListener('click', winnerCircle);

function createHandler() {
  inputError();
}

function randomHandler() {
  watchRandom();
}

function mainHandler() {
  deleteCard();
}

function winnerCircle() {
  deleteWinnerCard();
}

function makeCard(movieObj) {
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  main.insertAdjacentHTML('afterbegin', `  <article class="card" data-id="${movieObj.id}">
  <header class="card-header">
    <p class="card__title">${movieObj.title}</p>
    <img class="delete__image" src="images/delete.svg">
  </header>
    <p class="card__genre">${movieObj.genre}</p>
    <p class="fill-bio">${movieObj.bio}</p>
</article>`)
}

<<<<<<< HEAD
const randomPopulator = (rndmMovie) => {
=======
function randomPopulator(rndmMovie) {
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  winnerCard.insertAdjacentHTML('afterbegin', `<article class="winner-card" data-id="${rndmMovie.id}">
  <header class="winner-card-header">
    <p class="winner-card__title">${rndmMovie.title}</p>
    <img class="winner-delete__image" src="images/delete.svg">
  </header>
  <p class="winner-card__genre">${rndmMovie.genre}</p>
  <p class="winner-fill-bio">${rndmMovie.bio}</p>
</article>`)
}

<<<<<<< HEAD
const makeObject = () => {
  const newObj = new Movie(Date.now(), movieTitle.value, movieGenre.value, movieBio.value);
=======
function makeObject() {
  let newObj = new Movie(Date.now(), movieTitle.value, movieGenre.value, movieBio.value);
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  objectArray.push(newObj);
  console.log(objectArray);
  newMovie = newObj;
  newObj.saveToStorage(objectArray);
  return newObj;
}

<<<<<<< HEAD
const watchRandom = () => {
=======
function watchRandom() {
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  var tonightsMovie = objectArray[Math.floor(Math.random()*objectArray.length)];
  console.log(tonightsMovie);
  randomPopulator(tonightsMovie);
}

<<<<<<< HEAD
const clearInputs = () => {
=======
function clearInputs() {
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  movieTitle.value = '';
  movieGenre.value = '';
  movieBio.value = '';
}

<<<<<<< HEAD
const inputError = () => {
=======
function inputError() {
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
  if(movieTitle.value === '' || movieGenre.value === '' || movieBio.value === '') {
    return;
} else {
  makeObject();
  makeCard(newMovie);
  clearInputs(); 
  }
}

<<<<<<< HEAD
const deleteCard = () => {
  event.target.closest('.card').remove();
}

const deleteWinnerCard = () => {
  event.target.closest('.winner-card').remove();
}

createMovieButton.addEventListener('click', createHandler);
randomMovie.addEventListener('click', randomHandler);
main.addEventListener('click', mainHandler);
winnerCard.addEventListener('click', winnerCircle);
=======
function getId(event) {
  let uniqueId = event.target.closest('.card').getAttribute('data-id');
  return parseInt(uniqueId);
  console.log(uniqueId)
}
 
function getIndex() {
  var uniqueId = getId(event);
  for(var i = 0; i < objectArray.length; i++) {
    if(uniqueId === objectArray[i].id) {
    return console.log(objectArray.indexOf(objectArray[i]))
    }
  }
}

function deleteFromArray() {
  var uniqueIndex = getIndex();
  // Need to get id,index of specific card without making a new one and assign that to a local var here so i can run method
  // objectArray.splice(uniqueIndex, 1);
  // deleteFromStorage(objectArray, uniqueIndex);
}

function deleteCard() {
  if(event.target.closest('.delete__image')){
    deleteFromArray();
    console.log(objectArray)
    event.target.closest('.card').remove();
  }
}

function deleteWinnerCard() {
  if(event.target.closest('.winner-delete__image')) {
    event.target.closest('.winner-card').remove();
  }
}
>>>>>>> f47e0bd11cbe886d3b98d80fafbdfe4ffcca7853
