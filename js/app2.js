// when color is clicked, it should be "selected"
var color;

function makeSelected() {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
}


// when "new color" is clicked, color select should show
$("#revealColorSelect").click(function() {
  $("#colorSelect").toggle();
})

function getColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val()
  color = "rgb(" + r + "," + g + "," + b + ")"
  $("#newColor").css("background-color", color);
}


function addColorLi() {
  $(".controls ul").append("<li></li>");
  $("li").last().css("background-color", color).addClass("selected").siblings().removeClass("selected");
}

// NOTE!!! with event handler, we don't need to define the callback inside!
$("input").click(getColor);
// NOTE!! use "on" for dynamic elements (added <li> will not be bound otherwise)
$(".controls ul").on("click", "li", makeSelected);
$("#addNewColor").click(addColorLi);
