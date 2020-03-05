import * as Phaser from 'phaser';

import SkyIamge from './assets/sky.png';
import GroundIamge from './assets/platform.png';
import StarIamge from './assets/star.png';
import BombIamge from './assets/bomb.png';
import DudeIamge from './assets/dude.png';


var config = {
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
    preload: preload,
    create: create,
    // update: update
  }
};
const game = new Phaser.Game(config);

let platforms;

function preload() {
  this.load.image('sky', SkyIamge);
  this.load.image('ground', GroundIamge);
  this.load.image('star', StarIamge);
  this.load.image('bomb', BombIamge);
  this.load.spritesheet('dude',
    DudeIamge,
    { frameWidth: 32, frameHeight: 48 }
  );
}

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  // const particles = this.add.particles('red');

  // const params: ICreateEmitterParams = {
  //   speed: 100,
  //   scale: { start: 1, end: 0 },
  //   blendMode: 'ADD'
  // };
  // const emitter = particles.createEmitter(params);

  // const logo = this.physics.add.image(400, 100, 'logo');

  // logo.setVelocity(100, 200);
  // logo.setBounce(1, 1);
  // logo.setCollideWorldBounds(true);

  // emitter.startFollow(logo);
}