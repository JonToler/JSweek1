var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUser = function(searchName, searchDisplay) {
	var user = 'https://api.github.com/users/' + searchName + '?access_token=' + apiKey;
    $.ajax({
      url: user,
      complete: function(git) {
        searchDisplay.call(null, git.responseJSON);
      }
    });
};


Github.prototype.getRepos = function(searchName, repo, searchRepo) {
	var user = 'https://api.github.com/users/' + searchName +  '/repos?sort=update?access_token=' + apiKey;
    $.ajax({
      url: user,
      complete: function(git) {
        searchRepo.call(null, git.responseJSON);
      }
    });
};

exports.githubModule = Github;
