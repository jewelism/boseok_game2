import { GAME } from "./utils";

function updateScene({ player, cursors }) {
  if (GAME.gameOver) {
    player.setVelocityX(0);
    player.anims.play('turn');

    alert('당신은 패배했다 휴먼');
    GAME.gameOver = false;
    return;
  }
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play('left', true);
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
  }
  else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}

export default updateScene;