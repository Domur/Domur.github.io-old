var twoSelected = false;
var count = 0;
var c1 = 0;
var c2 = 0;
var x = document.getElementsByClassName("box");
var y = document.getElementsByClassName("box2");

function myFunc(numSelected){
if(count < 1){
x[numSelected - 1].style.display = "none";
y[numSelected - 1].style.display = "inline-block";
c1 = numSelected - 1;
count++;
}

else if(count < 2){
x[numSelected - 1].style.display = "none";
y[numSelected - 1].style.display = "inline-block";
c2 = numSelected - 1;
count++;
if(y[c1].innerHTML === y[c2].innerHTML){
  y[c1].style.backgroundColor = "green";
  y[c2].style.backgroundColor = "green";
}

}

else{
for(var i = 0; i < x.length; i++){
if(y[i].style.backgroundColor != "green"){
 y[i].style.display = "none";
 x[i].style.display = "inline-block";
 }
}

x[numSelected - 1].style.display = "none";
y[numSelected - 1].style.display = "inline-block";
c1 = numSelected - 1;
count = 1;
}
}
