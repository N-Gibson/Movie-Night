class Movie {
  constructor(id, title, genre, bio) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.bio = bio;
  }

  saveToStorage(objectArray) {
    var allMovies = JSON.stringify(objectArray);
    localStorage.setItem('parsedArray', allMovies);
  }

  deleteFromStorage(objectArray, index) {
    objectArray.splice(index, 1);
    this.saveToStorage()
  }
}