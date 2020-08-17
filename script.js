var marginLeft = 10;
var marginTop = 10;
let ball = document.getElementById("ball");
var pokemon = document.getElementById("pokemon");

let ballList = document.getElementsByClassName("ball1");
let score = document.getElementById("score");
let currentScore = 0;

for (let i = 0; i < ballList.length; i++) {
  if (i == 0) {
    ballList[i].style.marginTop = Math.random(0 - 1000) + "px";
    ballList[i].style.marginLeft = Math.random(0 - 1000)  + "px";
    continue;
  }

  console.log("i===j");
  for (let j =1; j < i; j++) {
    // console.log("VALUE Of i is   ", j);

    let isOverlap = ballOverlapDetection(ballList[i], ballList[j]);

    while (isOverlap) {
      console.log("*****************before",isOverlap);
      // console.log("Inside the while and value of j is   ", j);
      ballList[i].style.marginTop = Math.random(0 - 1000)*658 + "px";
      ballList[i].style.marginLeft = Math.random(0 - 1000)*1250  + "px";
      isOverlap = ballOverlapDetection(ballList[i], ballList[j]);
      console.log("***************** after",isOverlap);
    }
  }
}

function hideball(ballToHide) {
  ballToHide.style.visibility = "hidden";
  ballToHide.style.opacity = "0";
}
function moveBallRandom(ballToMove) {
  ballToMove.style.marginTop = Math.random() * 650 + "px";
  ballToMove.style.marginLeft = Math.random() * 1200 + "px";
  setTimeout(() => {
    ballToMove.style.visibility = "visible";
    ballToMove.style.opacity = "1";
  }, 200);
}
// moveBallRandom();

// var pokemonPosition=$(pokemon).position();
// console.log("pokemon Positio", pokemonPosition);

function movePokemon(event) {
  const pokemonBottom = pokemon.getBoundingClientRect().bottom;
  const pokemonHeight = pokemon.getBoundingClientRect().height;
  const pokemonTop = pokemon.getBoundingClientRect().top;
  const pokemonWidth = pokemon.getBoundingClientRect().width;
  const pokemonLeft = pokemon.getBoundingClientRect().left;
  for(let i=0 ;  i  < ballList.length; i++)
  {
    const ballBottom =  ballList[i].getBoundingClientRect().bottom;
    const ballLeft =  ballList[i].getBoundingClientRect().left;
    const ballHeight =  ballList[i].getBoundingClientRect().height;
    const ballWidth =  ballList[i].getBoundingClientRect().width;
    const ballRight =  ballList[i].getBoundingClientRect().right;
    const ballTop =  ballList[i].getBoundingClientRect().top;
  if (pokemonLeft + pokemonWidth >= Math.floor(ballLeft)) {
    
    // &&
    // ((pokemon.getBoundingClientRect().bottom + pokemon.getClientRects().height)>=(ball.getBoundingClientRect().bottom + ball.getClientRects().height)))
    if (pokemonBottom + pokemonHeight >= ballBottom + ballHeight) {
      // window.alert("caught");
      if (pokemonLeft <= ballRight) {
        if (pokemonTop <= ballTop + ballHeight) {
          //   console.log("true in vertical also************");
          //   console.log("pokemmonTop", pokemonTop);
          //   console.log("balltop", ballTop);
          //   console.log("ballHeight", ballHeight);
          hideball(ballList[i]);
          moveBallRandom(ballList[i]);
          score.innerText = currentScore + 1;
          currentScore++;
        }
      }
    }
  }
}

  var x = event.keyCode;

  if (x == 39 && marginLeft < 1450) {
    var value = pokemon.offsetLeft;
    //   console.log(value);
    var pokemonPosition = pokemon.offsetLeft;

    pokemon.style.marginLeft = marginLeft + "px";
    marginLeft += 10;
  } else if (x == 37 && marginLeft > 0) {
    marginLeft -= 10;

    pokemon.style.marginLeft = marginLeft + "px";
  } else if (x == 38 && marginTop > 0) {
    marginTop -= 10;
    pokemon.style.marginTop = marginTop + "px";
  } else if (
    x == 40 &&
    pokemon.offsetTop + pokemon.offsetHeight + 19 < window.innerHeight
  ) {
    console.log("offTop", pokemon.offsetTop);
    console.log("offheight", pokemon.offsetHeight);
    console.log("ineerHeigfht", window.innerHeight);
    pokemon.style.marginTop = marginTop + "px";
    marginTop += 10;
  }
}

function ballOverlapDetection(ball1, ball2) {
  console.log(ball1);
  console.log(ball1.getBoundingClientRect());
  console.log(ball2.getBoundingClientRect());
  let ball1Y = ball1.getBoundingClientRect().y;
  let ball2Y = ball2.getBoundingClientRect().y;
  let ball1X = ball1.getBoundingClientRect().x;
  let ball2X = ball2.getBoundingClientRect().x;
  console.log("here", ball1Y);
  console.log(Math.abs(ball1Y - ball2Y));
  console.log(Math.abs(ball1X - ball2X));

  if (Math.abs(ball1Y - ball2Y) <= 500 && Math.abs(ball1X - ball2X) <= 500) {
    //  console.log("true");
    return true;
  }
  return false;
}

// window.alert("Press Enter to Start Game");
//Timer
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      window.alert("Game Over Press Enter to Start");
      currentScore=0;
      score.innerText = currentScore;
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 2,
    display = document.querySelector("#timer");
  display.textContent = "2:00";
  startTimer(fiveMinutes, display);
};

 function getDistance(x1, y1 ,x2,y2)
 {
   var xDistance= x2-x1;
   var yDistance=y2-y1;
   var tPower=Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
   return Math.sqrt(tPower);
 }