var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

  $('#find').click(function() {
  	$('#content').html('');
  	var found = true;
  	var userName = $('#userName').val();
  	$("#loader").show();
  	github.getUser(userName, function(git) {
	  	if (git.message === "Not Found" || userName === '') {
	  		found = false;
	  		$('#content').html("<h1>Sorry, not currently a Github user:(</h1>");
	  	}

      else {
	  		var name = git.name;
	  		var email = git.email;
	  		var followers = git.followers;
	  		var login = git.login;
	  		var location = git.location;
	  		var public_repos = git.public_repos;
	  		var updated_at = git.updated_at;
	  		var private_repos = git.total_private_repos;

	  		if (name === undefined) {
	  		  name = login;
	  		}



	  	}
	  
  	});


  });

});
