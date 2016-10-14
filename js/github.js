var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUser = function(searchName, searchDisplay) {
	var user = 'https://api.github.com/users/' + userName + '?access_token=' + apiKey;
    $.ajax({
      url: user,
      complete: function(git) {
        userDisplay.call(null, git.responseJSON);
      }
    });
};

}

exports.githubModule = Github;
