var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

    $('#searchGitHub').click(function() {
    	$('#GitHubUser').html('');
    	var found = true;
    	var userName = $('#userName').val();
    	$("#loader").show();

    	github.getUser(userName, function(git) {
        console.log(git)
  	  	if (git.message === "Not Found" || userName === '') {
  	  		found = false;
  	  		$('#GitHubUser').html("<h1>Sorry, not currently a Github user:(</h1>");
  	  	}else {
        var email = "<h3>Email: " + git.email + "</h3>";
        var followers = "<h3>Followers: " + git.followers + "</h3>";
        var following = "<h3>Following: " + git.following + "</h3>";
        var login = "<h2>Username: " + git.login + "</h2>";
        var location = "<h3>Location: " + git.location + "</h3>";
        var public_repos = "<h3>Public repos: " + git.public_repos + "</h3>";
        var updated_at = "<h3>Last update: " + moment(git.updated_at).format('MMM DD YYYY') + "</h3>";
        var image = "<img src='" + git.avatar_url + "' alt='" + git.name + "' class='img-responsive' />";
        var madeAt = "<h3>Created at: " + moment(git.created_at).format('MMM DD YYYY') + "</h3>";
        var name = "";
        if (git.name === undefined) {
          name = "<h1>Name: " + git.login + "</h1>";
        } else {
          name = "<h1>Name: " + git.name + "</h1>";
        }
        $('#GitHubUser').append("<div class='row'><div class='col-md-12'>"+ email + followers + following + login + location + public_repos + updated_at + image + madeAt + name+ "</div></div><div class='row'><div class='col-md-12' id='content'></div></div>");

      }

      if (found) {
        github.getRepos(userName, git.public_repos, function(git) {
          $('#content').append("<div class='row'><h1>" + userName + "\'s Repos</h1><div class='col-sm-12' id='next'></div></div>");
          for (var i = 0; i < git.length; i++) {
            var link = "<a href='" + git[i].html_url + "' class='btn btn-primary links' target='_blank'>" + git[i].name + "</a>";
            $('#next').append(link);
          }
        });
      }

      $('#GitHubUser').show();

    });
  });
});
