import Phaser from 'phaser';
import config from '../src/phaserConfig';
import PreloaderScene from './preloaderScene';
import homeScene from '../src/scenes/homeScene';
import ruinasScene from '../src/scenes/ruinasScene';
import lagoScene from '../src/scenes/lagoScene';
import reservaScene from '../src/scenes/reservaScene';
import transporteScene from '../src/scenes/trasnporte';
import actividadesScene from '../src/scenes/actividades';
import gastromiaScene from '../src/scenes/gastronomia';
import alojamientoScene from './scenes/alojamientoScene';

const game = new Phaser.Game(
    { ...config, 
    scene: [PreloaderScene, 
            homeScene, 
            ruinasScene, 
            lagoScene, 
            reservaScene, 
            transporteScene, 
            actividadesScene, 
            gastromiaScene,
            alojamientoScene] });
