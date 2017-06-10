var twoSelected = false;
var count = 0;
function myFunc(numSelected){
var x = document.getElementsByClassName("box");
var y = document.getElementsByClassName("box2");

if(count < 2){
x[numSelected - 1].style.display = "none";
y[numSelected - 1].style.display = "inline-block";
count++;
}
else{
for(var i = 0; i < x.length; i++){
 y[i].style.display = "none";
 x[i].style.display = "inline-block";
}
x[numSelected - 1].style.display = "none";
y[numSelected - 1].style.display = "inline-block";
count = 1;
}
}
