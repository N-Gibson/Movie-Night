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
  main.insertAdjacentHTML('afterbegin', `  <article class="card" data-id="${movieObj.id}">
  <header class="card-header">
    <p class="card__title">${movieObj.title}</p>
    <img class="delete__image" src="images/delete.svg">
  </header>
    <p class="card__genre">${movieObj.genre}</p>
    <p class="fill-bio">${movieObj.bio}</p>
</article>`)
}

function randomPopulator(rndmMovie) {
  winnerCard.insertAdjacentHTML('afterbegin', `<article class="winner-card" data-id="${rndmMovie.id}">
  <header class="winner-card-header">
    <p class="winner-card__title">${rndmMovie.title}</p>
    <img class="winner-delete__image" src="images/delete.svg">
  </header>
  <p class="winner-card__genre">${rndmMovie.genre}</p>
  <p class="winner-fill-bio">${rndmMovie.bio}</p>
</article>`)
}

function makeObject() {
  let newObj = new Movie(Date.now(), movieTitle.value, movieGenre.value, movieBio.value);
  objectArray.push(newObj);
  console.log(objectArray);
  newMovie = newObj;
  newObj.saveToStorage(objectArray);
  return newObj;
}

function watchRandom() {
  var tonightsMovie = objectArray[Math.floor(Math.random()*objectArray.length)];
  console.log(tonightsMovie);
  randomPopulator(tonightsMovie);
}

function clearInputs() {
  movieTitle.value = '';
  movieGenre.value = '';
  movieBio.value = '';
}

function inputError() {
  if(movieTitle.value === '' || movieGenre.value === '' || movieBio.value === '') {
    return;
} else {
  makeObject();
  makeCard(newMovie);
  clearInputs(); 
  }
}

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
