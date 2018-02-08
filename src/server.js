const bodyParser = require('body-parser');
const express = require('express');

const Post = require('./post.js');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests

server.use(bodyParser.json());

server.get('/accepted-answer/:soID', (req, res) => {
  const { soID } = req.params;
  // const { acceptedAnswerID } = req.body;
  // const { body } = req.body;
  Post
  .find(soID)
  .then((ids) => {
    res.status(200).json(ids);
  })
  // .select('body', acceptedAnswerID)
  // .then((answer) => {
  //   res.status(200).json(answer);
  // })
  .catch((error) => {
    res.status(404).json({ error });
  });
});
server.listen(4300);
// TODO: write your route handlers here
//module.exports = { server };
