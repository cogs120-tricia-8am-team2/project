var data = require('../data.json');
var categoryList = require('../categoryListData.json');

//function : it makes a first char in a string capital
//for Category title



exports.view = function(req, res){

  var currentItemIndex = data.currentUser.currentItemIndex;
  var pageTitle = req.params.categoryTitle;
  var isScreenShared = data.currentUser.isScreenShared;
  var currentCategorySelected = data.currentUser.currentCategorySelected;
  var allCategoryList = data.allCategoryList;


  if(currentItemIndex === 0){
    console.log('first page');
  }

  if(pageTitle === "activities"){

    console.log('activites is chosen');
    console.log('current Index: '+ currentItemIndex);
    var itemObj = data.activityList[currentItemIndex];
    var itemTitle = itemObj.itemTitle;
    var caption = itemObj.caption;
    var itemURL = itemObj.URL;
    console.log(itemURL);
  }

  res.render('play', {
  	'pageTitle': pageTitle,
    'itemTitle' : itemTitle,
    'caption' : caption,
    'itemURL' : itemURL,
    'isScreenShared' : isScreenShared,
    'allCategoryList' : allCategoryList,
    'currentCategorySelected' : currentCategorySelected,
    'loginStatus' : userData.loginStatus,
     categoryList
  });
};
