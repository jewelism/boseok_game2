import * as Phaser from 'phaser';
import preload from './preloadScene';
import createScene from './createScene';
import updateScene from './updateScene';

let player, cursors, stars;
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload,
    create() {
      const [createdPlayer, createdCursors] = createScene(this);
      player = createdPlayer;
      cursors = createdCursors;
    },
    update() {
      updateScene({ player, cursors });
    },
  }
};

const game = new Phaser.Game(config);

