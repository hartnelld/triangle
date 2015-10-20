var triangle = function(a,b,c){
    if ((a === b) && (b === c)) {
        return "equilateral";
    } else if ((a === c) && (a !== b) && (c !== b)) {
        return "isoceles";
    } else if ((a !== b) && (b !== c)) {
        return "scalene";
    } else if ((a + b + c) !== 180) {
        return "unknown";
    }
};

$(document).ready(function() {
  $("form#triangle-input").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var result = triangle(a,b,c);

    if (result === "equilateral") {
      $(".result").text("This is an equilateral triangle.");
    } else if (result === "isoceles") {
      $(".result").text("This is an isoceles triangle.");
    } else if (result === "scalene") {
      $(".result").text("This is a scalene triangle.");
    } else if (result === "unknown") {
      $(".result").text("This is not a triangle.");
    } else {
      $(".result").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
