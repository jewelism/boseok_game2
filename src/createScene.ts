import collectStar, { scoreString } from './collectStar';

function createScene(scene) {
  scene.add.image(400, 300, 'sky');
  scene.add.image(200, 300, 'star');

  const platforms = scene.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  const player = scene.physics.add.sprite(100, 450, 'dude');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);


  scene.anims.create({
    key: 'left',
    frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20
  });

  scene.anims.create({
    key: 'right',
    frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
  scene.physics.add.collider(player, platforms);

  const cursors = scene.input.keyboard.createCursorKeys();

  const stars = scene.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(child => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  scene.physics.add.collider(stars, platforms);

  let score = 0;
  const scoreText = scene.add.text(16, 16, scoreString(score), { fontSize: '32px', fill: '#000' });
  const collectStars = collectStar(score, scoreText);
  scene.physics.add.overlap(player, stars, collectStars, null, scene);

  return [player, cursors];
}

export default createScene;