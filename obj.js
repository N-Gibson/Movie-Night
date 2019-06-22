class Movie {
  constructor(id, title, genre, bio) {
    this.id = Date.now() || id;
    this.title = title;
    this.genre = genre;
    this.bio = bio;
  }
}