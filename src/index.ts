import * as Phaser from 'phaser';
import preload from './preloadScene';
import create from './createScene';

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
    create,
    
  }
};

new Phaser.Game(config);
