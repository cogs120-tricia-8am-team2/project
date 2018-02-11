var data = require('../data.json');

exports.view = function(req, res){
  console.log('hello');
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;
  console.log(categoryTitle);
  console.log(itemId);
	res.render('info', {
    'categoryTitle':categoryTitle,
    'itemId':itemId
  });
};
