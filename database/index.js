var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  repos: Array
});

var Repo = mongoose.model('Repo', repoSchema);

Repo.find(function (err, users) {
  if (err) return console.log(err);
  console.log(users);
});

// Repo.remove({ repos: '' }, function (err) {
//   if (err) return handleError(err);
//   // removed!
// });

module.exports = Repo;
