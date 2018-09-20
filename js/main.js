var twoSelected = true;
var c1 = 0;
var c1a = 0;
var c2 = 0;
var c2a = 0;
var x = document.getElementsByClassName("box");
var y = document.getElementsByClassName("box2");
var degree = 0;
var boxInterval;
var inProgress = false;

function myFunc(numSelected){
  if(!inProgress){
    flipBoxes(x[numSelected - 1], y[numSelected - 1], true);
  } 
}

function flipBoxes(box1, box2, clicked){
  inProgress = true;
    degree = 0;
    boxInterval = setInterval(function(){
      degree += 1;
      if(degree <= 180){
        box1.style.transform = "rotateY(" + degree + "deg)";
        box2.style.transform = "rotateY(" + (degree + 180) + "deg)";
      }
      else{
        clearInterval(boxInterval);
        if(clicked){
          finishBlock(box1, box2);
        }
      }
      if(degree == 90){
        box1.style.display = "none";
        box2.style.display = "inline-block";
      } 
    }, 10);
}

function flip2Boxes(box1, box1a, box2, box2a){
  inProgress = true;
    degree = 0;
    boxInterval = setInterval(function(){
      degree += 1;
      if(degree <= 180){
        box1.style.transform = "rotateY(" + degree + "deg)";
        box1a.style.transform = "rotateY(" + (degree + 180) + "deg)";
        box2.style.transform = "rotateY(" + degree + "deg)";
        box2a.style.transform = "rotateY(" + (degree + 180) + "deg)";
      }
      else{
        clearInterval(boxInterval);
        inProgress = false;
      }
      if(degree == 90){
        box1.style.display = "none";
        box1a.style.display = "inline-block";
        box2.style.display = "none";
        box2a.style.display = "inline-block";
      } 
    }, 10);
    
}

function finishBlock(box1, box2){
    if(twoSelected){
      c1 = box2;
      c1a = box1;
      twoSelected = false;
      inProgress = false;
    }
    else{
      c2 = box2;
      c2a = box1;
      twoSelected = true;
      if(c1.innerHTML === c2.innerHTML){
        c1.style.backgroundColor = "green";
        c2.style.backgroundColor = "green";
        inProgress = false;
      }
      else{
        flip2Boxes(c1, c1a, c2, c2a);
      }
    }
}

$(document).mousemove(function(e){
  $("#circle").css({left:e.pageX - 25, top:e.pageY - 25});
});

window.onload = function(){
  console.log("done");
}
