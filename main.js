let objectArray = [];
let movieTitle = document.querySelector('.title__input');
let movieBio = document.querySelector('.bio__input');
let movieGenre = document.querySelector('.genre__input');
let createMovieButton = document.querySelector('.button__create__movie');
let randomMovie = document.querySelector('.random__button');
let main = document.querySelector('.main');
let winnerCard = document.querySelector('.winner-all');
let inputs = document.querySelector('.input');

let createHandler = () => {
  inputError();
}

let randomHandler = () => {
  watchRandom();
}

let mainHandler = () => {
  deleteCard();
}

let winnerCircle = () => {
  deleteWinnerCard();
}

let makeCard = (movieObj) => {
  main.insertAdjacentHTML('afterbegin', `  <article class="card" data-id="${movieObj.id}">
  <header class="card-header">
    <p class="card__title">${movieTitle.value}</p>
    <img class="delete__image" src="images/delete.svg">
  </header>
    <p class="card__genre">${movieGenre.value}</p>
    <p class="fill-bio">${movieBio.value}</p>
</article>`)
}

let randomPopulator = (rndmMovie) => {
  winnerCard.insertAdjacentHTML('afterbegin', `<article class="winner-card" data-id="${rndmMovie.id}">
  <header class="winner-card-header">
    <p class="winner-card__title">${rndmMovie.title}</p>
    <img class="winner-delete__image" src="images/delete.svg">
  </header>
  <p class="winner-card__genre">${rndmMovie.genre}</p>
  <p class="winner-fill-bio">${rndmMovie.bio}</p>
</article>`)
}

let makeObject = () => {
  let newObj = new Movie(Date.now(), movieTitle.value, movieGenre.value, movieBio.value);
  objectArray.push(newObj);
  console.log(objectArray);
}

let watchRandom = () => {
  var tonightsMovie = objectArray[Math.floor(Math.random()*objectArray.length)];
  console.log(tonightsMovie);
  randomPopulator(tonightsMovie);
}

let clearInputs = () => {
  movieTitle.value = '';
  movieGenre.value = '';
  movieBio.value = '';
}

let inputError = () => {
  if(movieTitle.value === '' || movieGenre.value === '' || movieBio.value === '') {
    return;
} else {
  makeObject();
  makeCard(Movie);
  clearInputs(); 
  }
}

let deleteCard = () => {
  event.target.closest('.card').remove();
}

let deleteWinnerCard = () => {
  event.target.closest('.winner-card').remove();
}

createMovieButton.addEventListener('click', createHandler);
randomMovie.addEventListener('click', randomHandler);
main.addEventListener('click', mainHandler);
winnerCard.addEventListener('click', winnerCircle);