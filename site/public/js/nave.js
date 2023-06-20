var qtdclick = 0
//fetch da quantidade de vezes que cada um ganhou até agora





    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 400;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';

    var leftRaqtY = 175;
    var rightRaqtY = 175;

    var leftRaqtScore = 0;
    var rightRaqtScore = 0;

    var bolaX = 300;
    var bolaY = 200;
    var bolavelX = -5;
    var bolavelY = -5;

    var gamon = false;

    var gameinter;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'green';
      ctx.fillRect(50, leftRaqtY, 25, 50);
      ctx.fillRect(525, rightRaqtY, 25, 50);

      ctx.fillStyle = 'white';
      ctx.font = '24px Arial';
      ctx.fillText('Score: ' + leftRaqtScore, 50, 30);
      ctx.fillText('Score: ' + rightRaqtScore, canvas.width - 150, 30);

      drawbola();
    }

    function drawbola() {
      // Update the position of the bola
      bolaX += bolavelX;
      bolaY += bolavelY;

      if (bolaY < 0 || bolaY > canvas.height) {
        bolavelY = -bolavelY;
      }

      if (
        (bolaX < 75 && bolaY > leftRaqtY && bolaY < leftRaqtY + 50) ||
        (bolaX > 525 && bolaY > rightRaqtY && bolaY < rightRaqtY + 50)
      ) {
        bolavelX = -bolavelX;
      }

      if (bolaX < 0) {
        rightRaqtScore++;

        if (rightRaqtScore === 10) {
          endgame('Right');
        } else {
          resetbola();
        }
      } else if (bolaX > canvas.width) {
        leftRaqtScore++;

        if (leftRaqtScore === 10) {
          endgame('Left');
        } else {
          resetbola();
        }
      }

      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.arc(bolaX, bolaY, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    function resetbola() {
      bolaX = 300;
      bolaY = 200;
      bolavelX = -5;
      bolavelY = -5;
    }

    function endgamee(winner) {
  bolavelX = 0;
  bolavelY = 0;

  if (winner == 'Right') {
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.fillText(winner + ' Player Wins!', canvas.width / 2 - 150, canvas.height / 2);
  }
  if(winner =='Left'){
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.fillText(winner + ' Player Wins!', canvas.width / 2 - 150, canvas.height / 2);
  }

  clearInterval(gameinter);
  gamon = false; 
}


    function startGame() {
  if (!gamon) {
    leftRaqtScore = 0;
    rightRaqtScore = 0;
    resetbola();

    gamon = true;
    gameinter = setInterval(draw, 1000 / 60);
  } 
  if(qtdclick > 0){
//o post aqui

  }
  qtdclick ++
}

    document.addEventListener('keydown', function(event) {
      if (event.key === 'w' && leftRaqtY > 0) {
        leftRaqtY -= 25;
      }
      else if (event.key === 's' && leftRaqtY < canvas.height - 50) {
        leftRaqtY += 25;
      }
      else if (event.key === 'ArrowUp' && rightRaqtY > 0) {
        rightRaqtY -= 25;
      }
      else if (event.key === 'ArrowDown' && rightRaqtY < canvas.height - 50) {
        rightRaqtY += 25;
      }
    });