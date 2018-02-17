var data = require('../data.json');
var randomList = require('../randomList.json');



exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;
  var currentCategorySelected = data.currentUser.currentCategorySelected;
  var allCategoryList = data.allCategoryList;


	res.render('info', {
    'categoryTitle':categoryTitle,
    'itemId':itemId,
    'description': "hello", 
    'allCategoryList' : allCategoryList,
    'currentCategorySelected' : currentCategorySelected
  });
};
