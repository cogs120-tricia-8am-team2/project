
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'categories': [
      { 'title': 'Activites',
        'id': 'activites'
      },
      { 'title': 'Food',
        'id': 'food'
      },
      { 'title': 'Travel',
        'id': 'travel'
      },
      { 'title': 'Reading',
        'id': 'reading'
      },
    ],
    'recently' : [
      { 'link': 'https://www.youtube.com/embed/tgbNymZ7vqY'}
    ]
  });
};
