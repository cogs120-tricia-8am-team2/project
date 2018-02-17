var data = require('../data.json');

exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;
  var currentCategorySelected = data.currentUser.currentCategorySelected;
  var allCategoryList = data.allCategoryList;

  console.log(categoryTitle);
  console.log(itemId);
	res.render('share', {
    'categoryTitle':categoryTitle,
    'itemId':itemId,
    'allCategoryList' : allCategoryList,
    'currentCategorySelected' : currentCategorySelected
  });
};
