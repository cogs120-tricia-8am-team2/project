var data = require('../data.json');

exports.view = function(req, res){
  var pageTitle = req.params.abc;
  console.log(pageTitle);
  res.render('play', {
  	'pageTitle': pageTitle
  });
};
