//goForward(200);
//turnLeft();
//goForward(100);

//for (var i = 0; i < 50; i = i + 1) {
//  goForward(i * 2);
//  turnLeft();
//}

// jquery hide element
// jquery img border 
// jquery change css

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    console.log("saw enter press!");
    goForward(100);
  } 
})

//for (var i = 0; i < 50; i ++) {    
//  if ((i % 2) == 0) {
//    goForward(i * 4);
//    turnLeft();
//  } else {
//    goForward(i * 2);
//    turnLeft();
//  }
//}