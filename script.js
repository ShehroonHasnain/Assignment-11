// Calculate your age based on the current year and your birth year.
var currentYear = 2024;
var birthYear = 2005;
var myAge = currentYear-birthYear;
console.log("My age:"+myAge);

// Write a program that calculates the area of a rectangle using length and width variables.
var length = 20;
var width = 40;
var areaOfRectangle = length*width;
console.log("Area of rectangle:"+areaOfRectangle);

// Write a program that calculates the area of a circle.
var radius = 4.5;
var areaOfCircle = radius*radius*3.14159;
console.log("Area of circle:"+areaOfCircle);

// Write a program that calculates the area of the cube.
var side=3;
var area=side*side*side;
console.log("Area of cube:"+area);

// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
var temperature=100;
var celsius = (temperature - 32) * 5/9;
var fahrenheit = (temperature * 9/5) + 32;
console.log("Temperature from fahrenheit to calsius:"+celsius);
console.log("Temperature from calsius to fahrenheit:"+fahrenheit);

// Convert a given number of seconds into minutes and seconds using variables.
var totalSeconds = 150;
var minutes = totalSeconds / 60;
var seconds = totalSeconds % 60;
console.log("Seconds:" + totalSeconds +" = "+minutes+"min and "+seconds+"seconds");

// Write a program that calculates the percentage.
var given = 80;
var total = 100;
var percentage = (given / total) * 100;
console.log("Percentage:"+percentage+"%");

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var givenNumOfDays = 120;
var week = givenNumOfDays/4;
var days = givenNumOfDays%7;
console.log(givenNumOfDays+"day="+week+"weeks and "+days+"days");

// Increment and Decrement Operator:
//  - Q1:
var a = 2;
var b = ++a * 2; 
console.log("b="+b);
// b=6
 
// - Q2
var x = 5;
var y = x-- + 2;
console.log("y="+y);
// y=7

//  - Q3 
var x = 3;
var y = ++x + x++ + ++x;
console.log("y="+y);
// y=14

//  - Q4 
var m = 2;
var n = ++m * m++ * --m;
console.log("n="+n);
// n=27

//  - Q5
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log("result="+result);
// result=8

// - Q6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log("m="+m,"n="+n,"p="+p);
// m=2,n=4,p=10

//  - Q7
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a * (b-- + c) / --d;
console.log("a="+a,"b="+b,"c="+c,"d="+d,"result="+result);
// a=6, b=2, c=2, d=6 ,result=5

//  - Q8
var m= 2;
var n = 3;
var o = 4;
var result = m++ * (--n + m) / (o-- - n);
console.log("m="+m,"o="+o,"n="+n,"result="+result);
// m=3, o=3, n=2, result=5