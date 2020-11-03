//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer)

var radius = parseInt(prompt("What is the circles radius?"));

function circleCalculation(radius) {
  var circleArea = Math.PI * Math.pow(radius, 2);
  var circlePerimeter = 2 * Math.PI * radius;
  var sentence =
    "The area of the circle is " +
    circleArea +
    " and the perimeter of the circle is " +
    circlePerimeter +
    ".";
  console.log(sentence);
}
circleCalculation(radius);
