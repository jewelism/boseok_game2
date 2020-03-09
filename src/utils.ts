import * as Phaser from 'phaser';

export const GAME = {
  status: false,
  get gameOver() {
    return this.status;
  },
  set gameOver(bool: boolean) {
    this.status = bool;
  }
};

export const scoreString = score => `Score: ${score}`;

function generateBomb(player, bombs) {
  const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
  const bomb = bombs.create(x, 16, 'bomb');
  bomb.setBounce(1);
  bomb.setCollideWorldBounds(true);
  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
}

export function collectStar(score, scoreText, stars, bombs) {
  return function (player, star) {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText(scoreString(score));
    generateBomb(player, bombs);
    
    if (score === 120) {
      alert('끝난줄알았찌!?');
    }

    if (stars.countActive(true) === 0) {
      stars.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });

      generateBomb(player, bombs);
      setTimeout(() => {
        generateBomb(player, bombs);
      }, 1000);
    }
  }
}

export function hitBomb(scene) {
  return function (player, bombs) {
    scene.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    GAME.gameOver = true;
  }
}