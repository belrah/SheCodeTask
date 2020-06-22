var fullName=["Sam Huges", "Terri Bishop", "Jar Burke", "Julio Miller", "Gabriella Stewards", "Ava Pena", "Chester Flores", "Madison Marshall"];
var length=fullName.length;
var list="<ol>"
for (var i = 0; i<length; i++) {
  list +="<li>" + fullName[i] + "</li>";
}
list +="</ol>";
document.getElementById('demo').innerHTML=list;

var youngToOld=["Gabriella Stewards = 26", "Julio Miller = 29", "Terri Bishop=31", "Chester Flores = 32", "Ava Pena = 34", "Jar Burke = 35","Madison Marshall = 40", "Sam Huges= 42"];
var length=youngToOld.length;
var list="<ol>"
for (var i = 0; i<length; i++) {
  list +="<li>" + youngToOld[i] + "</li>";
}
list +="</ol>";
document.getElementById('demo1').innerHTML=list;

var ages = [31, 32, 34, 35, 26, 40, 29, 42];

function checkAdult(age) {
  return age >= 30;
}

 document.getElementById("demo2").innerHTML = ages.filter(checkAdult);

var totalIncome = 315000;
var noOFPersons = 8;
var averageIcome =  315000/ 8;
document.getElementById("demo3").innerHTML = averageIcome;

var departments = ["Sales=2", "Marketing=2", "Development=3", "Office Management=1"];
var i = 0;
var text = "";
for (;departments[i];) {
  text += departments[i] + "<br>";
  i++;
}
document.getElementById("demo4").innerHTML = text;
