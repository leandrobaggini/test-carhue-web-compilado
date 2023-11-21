import Phaser from 'phaser';
//import homeScene from './scenes/homeScene';

const config = {
    type: Phaser.AUTO,
  
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'game-container',
      width: 1920,
      height: 1080,
    },
    scene: [],
  };

export default config;
