var data = require('../data.json');


//function : it makes a first char in a string capital
//for Category title
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


exports.view = function(req, res){

  var currentItemIndex = data.currentUser.currentItemIndex;
  var pageTitle = req.params.categoryTitle;
  var newPageTitle = jsUcfirst(pageTitle);

  console.log("length: " + data.activityList.length);

  currentItemIndex++;
  console.log("currentItemIndex: " + currentItemIndex);
  if(currentItemIndex === data.activityList.length-1){
    console.log('reached the end of the list');
    data.currentUser.currentItemIndex = -1;
  }
  else {
    data.currentUser.currentItemIndex = currentItemIndex;
  }

  if(pageTitle === "Activites"){

    console.log('activites is chosen');
    console.log('current Index: '+ currentItemIndex);
    var itemObj = data.activityList[currentItemIndex];
    var itemTitle = itemObj.itemTitle;
    var caption = itemObj.caption;
    var itemURL = itemObj.URL;
    console.log(itemURL);
  }
  console.log('herer');
  res.render('play', {
  	'pageTitle': newPageTitle,
    'itemTitle' : itemTitle,
    'caption' : caption,
    'itemURL' : itemURL
  });
};
