'use strict';

$(document).ready(function() {

  $('#moreBtn').click(function() {
    $('#page-media-title').toggle();
    $('#page-madia-caption').toggle("slow");
  });

  $('#share-btn').click(function(){
    $('.share-background').addClass('height100vh');
    $('.nav-container').addClass('visibilityHidden');
    $('.page-container').addClass('overflowHidden');
    $('.share-box').addClass('visibilityVisible-box');
  });

  $('#cancel').click(function(){
    $('.share-background').removeClass('height100vh');
    $('.nav-container').removeClass('visibilityHidden');
    $('.page-container').removeClass('overflowHidden');
    $('.share-box').removeClass('visibilityVisible-box');
  });

  $('#send').click(function(){
    $('.share-background').removeClass('height100vh');
    $('.nav-container').removeClass('visibilityHidden');
    $('.page-container').removeClass('overflowHidden');
    $('.share-box').removeClass('visibilityVisible-box');
  });



})
