import * as Phaser from 'phaser';
import preload from './preloadScene';
import createScene from './createScene';
import updateScene from './updateScene';

let platforms, player, cursors;
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
      const [createdPlatforms, createdPlayer, createdCursors] = createScene(this);
      platforms = createdPlatforms;
      player = createdPlayer;
      cursors = createdCursors;
    },
    update(){
      updateScene({ player, cursors });
    },
  }
};

const game = new Phaser.Game(config);

