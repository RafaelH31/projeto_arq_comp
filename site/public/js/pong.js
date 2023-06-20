var qtdclick = 0
//fetch da quantidade de vezes que cada um ganhou até agora





    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 400;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';



    var leftraqtY = 175;
    var rightraqtY = 175;
    var leftraqtpont = 0;
    var rightraqtpont = 0;
    var bolaX = 300;
    var bolaY = 200;
    var bolavelX = -5;
    var bolavelY = -5;
    var gameon = false;
    var gameinter;



    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';
      ctx.fillRect(50, leftraqtY, 25, 50);
      ctx.fillRect(525, rightraqtY, 25, 50);
      ctx.fillStyle = 'white';
      ctx.font = '24px Arial';
      ctx.fillText('pontos: ' + leftraqtpont, 50, 30);
      ctx.fillText('pontos: ' + rightraqtpont, canvas.width - 150, 30);
      drawbola();
    }
    function drawbola() {
      bolaX += bolavelX;
      bolaY += bolavelY;
      if (bolaY < 0 || bolaY > canvas.height) {
        bolavelY = -bolavelY;
      }
      if (
        (bolaX < 75 && bolaY > leftraqtY && bolaY < leftraqtY + 50) ||
        (bolaX > 525 && bolaY > rightraqtY && bolaY < rightraqtY + 50)
      ) {
        bolavelX = -bolavelX;
      }

      if (bolaX < 0) {
        rightraqtpont++;
        if (rightraqtpont === 10) {
          endgame('Right');
        } else {
          resetbola();
        }
      } else if (bolaX > canvas.width) {
        leftraqtpont++;
        if (leftraqtpont === 10) {
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

    function endgame(winner) {
  bolavelX = 0;
  bolavelY = 0;

  if (winner == 'Right') {
    //o post aqui
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.fillText(winner + ' Player Wins!', canvas.width / 2 - 150, canvas.height / 2);
  }
  if(winner =='Left'){
    //ou aqui
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.fillText(winner + ' Player Wins!', canvas.width / 2 - 150, canvas.height / 2);
  }

  clearInterval(gameinter);
  gameon = false; 
}



    function startgame() {
  if (!gameon) {
    leftraqtpont = 0;
    rightraqtpont = 0;
    resetbola();

    gameon = true;
    gameinter = setInterval(draw, 1000 / 60);
  } 
  if(qtdclick > 0){


  }
  qtdclick ++
}

    document.addEventListener('keydown', function(event) {
      if (event.key === 'w' && leftraqtY > 0) {
        leftraqtY -= 25;
      }
      else if (event.key === 's' && leftraqtY < canvas.height - 50) {
        leftraqtY += 25;
      }
      else if (event.key === 'ArrowUp' && rightraqtY > 0) {
        rightraqtY -= 25;
      }
      else if (event.key === 'ArrowDown' && rightraqtY < canvas.height - 50) {
        rightraqtY += 25;
      }
    });