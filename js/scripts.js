$(document).ready(function() {
  var height = parseFloat(prompt("What is your height in feet?"));

  if(height === 2) {
    $(".two-foot").show();
  }else if (height === 3) {
    $(".three-foot").show();
  }else if (height >= 4) {
    $(".four-foot").show();
  }
})
