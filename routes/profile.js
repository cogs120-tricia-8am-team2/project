var data = require('../data.json');

exports.view = function(req, res){
    var loginStatus = data.currentUser.loginStatus;

    console.log("User is loggeed in: "+loginStatus);
    
    if (!loginStatus) { //not logged in; show pop up
    	res.render('profile_popup');
    }
    else {				//logged in; show profile page
    	res.render('profile');
    }

};