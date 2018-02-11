var data = require('../data.json');

exports.view = function(req, res){
  console.log(req);
	res.render('web', data);
};
