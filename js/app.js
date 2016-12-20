// problem: no user interaction causes no change to application
// solution: when user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas")
// NOTE!! for canvas, we need the actual HTML element in order to get the "context" property
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// NOTE!! use "on" for dynamic elements (added <li> will not be bound otherwise)
$(".controls ul").on("click", "li", function () {
    // deselect sibling elements
    $(this).siblings().removeClass("selected");
    // select clicked element
    $(this).addClass("selected");
    // cache current color
    color = $(this).css("background-color");
})


// when "new color" is pressed
$("#revealColorSelect").click(function () {
  // show color select (or hide it)
  $("#colorSelect").toggle();
});
  
// update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// when color slider changes
$("input[type=range]").change(changeColor); 

// when "add color" is pressed
$("#addNewColor").click(function() {
  // append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // select the new color
  $newColor.click();
})

// on mouse events on the canvas
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  // draw line
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

