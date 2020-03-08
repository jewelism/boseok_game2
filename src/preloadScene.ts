import SkyIamge from './assets/sky.png';
import GroundIamge from './assets/platform.png';
import StarIamge from './assets/star.png';
import BombIamge from './assets/bomb.png';
import DudeIamge from './assets/dude.png';

function preloadScene() {
  this.load.image('sky', SkyIamge);
  this.load.image('ground', GroundIamge);
  this.load.image('star', StarIamge);
  this.load.image('bomb', BombIamge);
  this.load.spritesheet('dude',
    DudeIamge,
    { frameWidth: 32, frameHeight: 48 }
  );
}

export default preloadScene;