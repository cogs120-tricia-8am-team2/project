
document.getElementById("allCategoryUL").style.display = "none";
document.getElementById("popularCategoryUL").style.display = "";


function myFunction() {


    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");

    if (input.value == '') { 
      document.getElementById("allCategoryUL").style.display = "none";
      document.getElementById("popularCategoryUL").style.display = "";
    }
    else {
      document.getElementById("allCategoryUL").style.display = "";
      document.getElementById("popularCategoryUL").style.display = "none";
    }

    filter = input.value.toUpperCase();
    ul = document.getElementById("allCategoryUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }

}
function show_overlay()
{
  $('#search-icon-top').hide();
  $('#search-overlay').fadeIn();
}

function hide_overlay()
{
  $('#search-overlay').fadeOut();
  $('#search-icon-top').show();
}

