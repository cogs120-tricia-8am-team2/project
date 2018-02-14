var data = require('../data.json');


//function : it makes a first char in a string capital
//for Category title
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


exports.view = function(req, res){


  var pageTitle = req.params.categoryTitle;
  var newPageTitle = jsUcfirst(pageTitle);
  if(pageTitle === "activites"){
    console.log('activites is chosen');
    var activitiesList = data.activitiesList['itemTitle'];
    console.log(activitiesList);
  }
  res.render('play', {
  	'pageTitle': newPageTitle
  });
};
