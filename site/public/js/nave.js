var contg = 0
contg = sessionStorage.getItem("contg")       

class GameObject {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  collidesWith(obj) {
    return (this.x < obj.x + obj.width
         && this.x + this.width > obj.x
         && this.y < obj.y + obj.height 
         && this.y + this.height > obj.y);
  }
}

class Bullet extends GameObject {
  constructor(x, y, width, height, color, dy) {
    super(x, y, width, height, color)
    this.dy = dy;
  }
  
  update(x, y) {
    this.y += this.dy; 
  }
}

class SpaceShip extends GameObject {
  constructor(x, y, width, height, color, canvasHeight) {
    super(x, y, width, height, color);
    this.canvasHeight = canvasHeight;
    this.bulletWidth = 10;
    this.bulletHeight = 10;
    this.bulletColor = "#ffffff";
    this.bullets = [];
  }

  draw(ctx) {
    super.draw(ctx);
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(ctx);
      this.bullets[i].update(0, 0);

      if (this.bullets[i].y < 0 || this.bullets[i].y > this.canvasHeight) {
        this.bullets.splice(i, 1);
      }
    }
  }

  shoot(dy) {
    this.bullets.push(new Bullet(
      this.x + this.width / 2 - this.bulletWidth / 2,
      this.y - this.bulletHeight,
      this.bulletWidth,
      this.bulletHeight,
      this.bulletColor,
      dy
    ));
  }
}

class Player extends SpaceShip {
  constructor(x, y, width, height, color, canvasHeight, canvasWidth) {
    super(x, y, width, height, color, canvasHeight);
    this.canvasWidth = canvasWidth;
  }

  update(dx, dy) {
    super.update(dx, dy);

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.width > this.canvasWidth) {
      this.x = this.canvasWidth - this.width;
    }
  }
}

class Asteroid {
  constructor(x, y, width, height, color, noParts) {
    this.parts = [];
    for (var i = 0; i < noParts; i++) {
      for (var j = 0; j < noParts; j++) {
        this.parts.push(new GameObject(
          x + i * width,
          y + j * height,
          width,
          height,
          color
        ));
      }
    }
  }

  draw(ctx) {
    for (var i = 0; i < this.parts.length; i++) {
      this.parts[i].draw(ctx);
    }
  }

  collidesWith(obj) {
    for (var i = 0; i < this.parts.length; i++) {
      if (this.parts[i].collidesWith(obj)) {
        return true;
      }
    }
    return false;
  }

  removeOnCollide(obj) {
    for (var i = 0; i < this.parts.length; i++) {
      if (this.parts[i].collidesWith(obj)) {
        this.parts.splice(i, 1);
        break;
      }
    }
  }
}
var game = {};

game.canvas = document.getElementById('canvas');
game.ctx = game.canvas.getContext('2d');

game.backgroundColor = "black"

game.asteroidsParts = 4;
game.noOfAsteroids = 10;
game.asteroidsSpace = 75;
game.asteroidsX = 30;

game.enemiesEachLine = 15;
game.enemyLines = 4;
game.enemySpace = 30;
game.enemyFireRate = 100;
game.enemyFireTimer = 0;
game.enemyDirection = 1;
game.enemyStep = 5;

if(contg > 1){
    
game.enemiesEachLine = 20;
game.enemyLines = 5;
game.enemySpace = 30;
game.enemyFireRate = 150;
game.enemyStep = 7;
}

function dif(){
    contg = 1
    localStorage.setItem("contg", contg)
    location.reload()
}

game.update = function() {
  game.ctx.fillStyle = game.backgroundColor;
  game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);

  game.player.draw(game.ctx);

  for (var i = 0; i < game.asteroids.length; i++) {
    game.asteroids[i].draw(game.ctx);
  }

  for (var i = 0; i < game.enemies.length; i++) {
    game.enemies[i].draw(game.ctx);
    game.enemies[i].update(game.enemyDirection, 0);
  }

  if (game.enemies.length == 0) {
    game.restart();
  }

  if (game.enemyDirection == 1)
  {
    var closestToRightSideEnemy = game.enemies[0];
    for (var i = 1; i < game.enemies.length; i++) {
      if (game.enemies[i].x > closestToRightSideEnemy.x) {
        closestToRightSideEnemy = game.enemies[i];
      }
    }
    if (closestToRightSideEnemy.x + 
        closestToRightSideEnemy.width > game.canvas.width) 
    {game.enemyDirection = -1;       
      for (var i = 0; i < game.enemies.length; i++) {
        game.enemies[i].update(0, game.enemyStep);
      }
    }          
  }
  else if (game.enemyDirection == -1)
  {
    // Find the enemy closest to the left side of the screen
    var closestToLeftSideEnemy = game.enemies[0];
    for (var i = 1; i < game.enemies.length; i++) {
      if (game.enemies[i].x < closestToLeftSideEnemy.x) {
        closestToLeftSideEnemy = game.enemies[i];
      }
    }

    if (closestToLeftSideEnemy.x < 0) {
      game.enemyDirection = 1;
      for (var i = 0; i < game.enemies.length; i++) {
        game.enemies[i].update(0, game.enemyStep);
      }
    }
  }

  game.enemyFireTimer += Math.random() * 10;
  if (game.enemyFireTimer > game.enemyFireRate) {
    game.enemyFireTimer = 0;
    game.enemies[Math.floor(Math.random() * game.enemies.length)].shoot(5);
  }
  for (var i = 0; i < game.player.bullets.length; i++) {
    for (var j = 0; j < game.asteroids.length; j++) {
      if (game.asteroids[j].collidesWith(game.player.bullets[i])) {
        game.asteroids[j].removeOnCollide(game.player.bullets[i]);
        game.player.bullets.splice(i, 1);
        break;
      }
    }
  }

  for (var i = 0; i < game.enemies.length; i++) {
    for (var j = 0; j < game.enemies[i].bullets.length; j++) {
      for (var k = 0; k < game.asteroids.length; k++) {
        if (game.asteroids[k].collidesWith(game.enemies[i].bullets[j])) {
          game.asteroids[k].removeOnCollide(game.enemies[i].bullets[j]);
          game.enemies[i].bullets.splice(j, 1);
          break;
        }
      }
    }
  }

  for (var i = 0; i < game.player.bullets.length; i++) {
    for (var j = 0; j < game.enemies.length; j++) {
      if (game.enemies[j].collidesWith(game.player.bullets[i])) {
        game.enemies.splice(j, 1);
        game.player.bullets.splice(i, 1);
        break;
      }
    }
  }

  for (var i = 0; i < game.enemies.length; i++) {
    for (var j = 0; j < game.enemies[i].bullets.length; j++) {
      if (game.player.collidesWith(game.enemies[i].bullets[j])) {
        game.restart();
        break;
      }
    }
  }

  for (var i = 0; i < game.enemies.length; i++) {
    if (game.enemies[i].y + game.enemies[i].height > game.player.y) {
      game.restart();
      break;
    }
  }
}

game.keydown = function(e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    game.player.update(-5, 0);
  }
  else if (e.keyCode == 39 || e.keyCode == 68) {
    game.player.update(5, 0);
  }
  else if (e.keyCode == 32) {
    game.player.shoot(-5);
  }
}      

game.init = function() {
  game.interval = setInterval(game.update, 1000 / 60);

  game.player = new Player(
    game.canvas.width / 2 - 50,
    game.canvas.height - 50,
    20,
    20,
    '#0099CC',
    game.canvas.width
  );

  game.asteroids = [];
  for (var i = 0; i < game.noOfAsteroids; i++) {
    game.asteroids.push(new Asteroid(
      game.asteroidsSpace + i * game.asteroidsSpace,
      game.canvas.height - 180,
      5,
      5,
      '#ffffff',
      game.asteroidsParts
    ));
  }

  game.enemies = [];
  for (var i = 0; i < game.enemyLines; i++) {
    for (var j = 0; j < game.enemiesEachLine; j++) {
      game.enemies.push(new SpaceShip(
        game.enemySpace + j * game.enemySpace,
        game.enemySpace + i * game.enemySpace,
        20,
        20,
        '#FF0000'
      ));
    }
  }
}

game.stop = function() {
  clearInterval(game.interval);
}

game.restart = function() {
  game.stop();
  game.init();
}



window.onload = game.init;

window.onkeydown = game.keydown;
