// Axenov IT Single responsobility
async function getPosts() {
  // send query
  const response = await fetch("https://get-posts-url.com");

  // if status 200 format data and return
  if (response.status === 200) {
    return {
      id: response.data.post.id,
      name: response.data.post.name,
      rating: response.data.post.rating > 100 ? "good" : "bad",
    };
  } else {
    // if status 50* or 40* return null
    return null;
  }
}
