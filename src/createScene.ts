function createScene() {
  this.add.image(400, 300, 'sky');
  this.add.image(200, 300, 'star');

  const platforms = this.physics.add.staticGroup();

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

export default createScene;