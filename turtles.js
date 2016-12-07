var _heading = 0
var _position = {x: 0, y: 0};
var _actionInProgress;
var _turtle = $("#turtle");

function turnRight() {
  _heading = _heading + 90  
  animateRotate(_heading, _turtle);
}

function turnLeft() {
  _heading = _heading - 90  
  animateRotate(_heading, _turtle);
}

function goForward(distance) {    
  var radians = -1 * _heading * (Math.PI/180);
  var yIncrement = Math.sin(radians) * distance;
  var xIncrement = Math.cos(radians) * distance;        
  
  var origPosition = {x: _position.x, y: _position.y}; 
  var origHeading = _heading;
  
  _position.x = _position.x + xIncrement;
  _position.y = _position.y + yIncrement;
  
  _turtle.animate({
    left: _position.x, 
    bottom: _position.y,
  },{
    complete : function() {
      insertLine(origPosition, origHeading, distance)
    }
  })
  
}

function insertLine(origin, angle, magnitude) {
  var line = $("<div class='line'></div>");
  console.log("rotate", "rotate(" + angle + "deg)") 
  line.css({
    left: origin.x + _turtle.width() / 2,    
    bottom: origin.y + _turtle.height() / 2,
    width: magnitude,
    transform: "rotate(" + angle + "deg)",
    "transform-origin": "top left"
  })
  
  $("#turtle-cage").append(line);
  console.log($("#turtle-cage"))
}

function animateRotate(angle, element) {    
  // we use a pseudo object for the animation
  // (starts from `0` to `angle`), you can name it as you want
  $({deg: 0}).animate({deg: angle}, {
    duration: 100,
    step: function(now) {
      // in the step-callback (that is fired each step of the animation),
      // you can use the `now` paramter which contains the current
      // animation-position (`0` up to `angle`)
      element.css({
        transform: 'rotate(' + now + 'deg)'
      });
    }
  });
}

