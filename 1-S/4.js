// Axenov IT Single responsobility
class Post {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.rating = this.getRating(data.rating);
  }

  getRating(rating) {
    return rating > 100 ? "good" : "bad";
  }
}

async function getPosts() {
  const response = await fetch("https://get-posts-url.com");

  if (response.status === 200) {
    return new Post(response.data.post);
  } else {
    return null;
  }
}
