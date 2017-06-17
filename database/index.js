var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  repos: Array
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;

