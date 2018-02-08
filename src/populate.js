const fs = require('fs'); // filesystem allows us to store and read files in function.

let savedPosts = null;

const Post = require('./post.js');

const readPosts = () => {
  // cache posts after reading them once
  if (!savedPosts) { // if no saved posts
    const contents = fs.readFileSync('posts.json', 'utf8'); // make fs read posts.json
    savedPosts = JSON.parse(contents); // make saved posts the contents
  }
  return savedPosts;
};
const populatePosts = () => {
  // TODO: implement this
  const posts = readPosts();
  console.log(readPosts());
  const promises = posts.map(p => new Post(p).save()); // for each post run the read post and make it a promise to chain the execution to the next post

  return Promise.all(promises);
};

populatePosts();

module.exports = { readPosts, populatePosts };
