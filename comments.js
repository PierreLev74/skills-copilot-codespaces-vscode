// Create web server
// 1. When user visits /comments, return a list of comments
// 2. When user visits /comments/new, return a form for users to add new comment
// 3. When user posts to /comments, add the new comment to the list of comments
// 4. When user visits any other path, return 404 not found

// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Store comments in an array
var comments = [
  'First comment!',
  'Second comment!',
  'Third comment!'
];

// When user visits /comments, return a list of comments
app.get('/comments', function (req, res) {
  res.send(comments);
});

// When user visits /comments/new, return a form for users to add new comment
app.get('/comments/new', function (req, res) {
  res.send('<form method="post">' +
    '<input type="text" name="comment">' +
    '<input type="submit" value="Add Comment">' +
    '</form>');
});

// When user posts to /comments, add the new comment to the list of comments
app.post('/comments', function (req, res) {
  comments.push(req.body.comment);
  res.redirect('/comments');
});

// When user visits any other path, return 404 not found
app.get('*', function (req, res) {
  res.send('404 not found');
});

// Listen on port 3000
app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000');
});