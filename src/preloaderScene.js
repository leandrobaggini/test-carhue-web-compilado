import Phaser from 'phaser';

const basePath = '../assets/';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }

  preload() {
    // Cargar los recursos necesarios para el juego
    /*
    this.load.image('background', 'ruta/a/tu/imagen/fondo.png');
    this.load.image('player', 'ruta/a/tu/imagen/jugador.png');
    */

  
    // Agrega más recursos aquí

    //Importar fonts otf
    function loadFont(Name, url) {
      var newFont = new FontFace(Name, `url(${url})`);
      newFont
        .load()
        .then(function (loaded) {
          document.fonts.add(loaded);
        })
        .catch(function (error) {
          return error;
        });
    }

    loadFont('Metropolis', basePath + 'fonts/Metropolis-Regular.otf');
    loadFont('Metropolis-Bold', basePath + 'fonts/Metropolis-Bold.otf');
    loadFont('Metropolis-Black', basePath + 'fonts/Metropolis-Black.otf');
    loadFont('Metropolis-medium', basePath + 'fonts/Metropolis-Medium.otf');
    loadFont('Metropolis-SemiBold', basePath + 'fonts/Metropolis-SemiBold.otf');
    loadFont('Metropolis-Thin', basePath + 'fonts/Metropolis-Thin.otf');
   

    


    //videos
    this.load.video('intro', basePath + 'video/FondoWeb.mp4', 'loadeddata', false, true);

    //images
    this.load.image('logo-playtur', basePath + 'images/logo_playtur_4.0 2.png');
    this.load.image('degradado_home', basePath + 'images/degradado_home.png');
    this.load.image('degradado_ruinas', basePath + 'images/degradado_ruinas.png');
    this.load.image('uiInferior', basePath + 'images/UI_siNtesis_default.png');
    this.load.image('logoCarhue', basePath + 'images/logo_carhue_blanco.png');

    this.load.image('actividades', basePath + 'images/actividades.png');
    this.load.image('alojamiento', basePath + 'images/alojamiento.png');
    this.load.image('tranporte', basePath + 'images/trasnporte.png');
    this.load.image('Matadero', basePath + 'images/Matadero_lago_epecuen.png');
    this.load.image('ruinas', basePath + 'images/RuinasEpecuen.png');
    this.load.image('reservaNatural', basePath + 'images/reservanatural.png');
    this.load.image('gastronomia', basePath + 'images/gastronomia.png');
    this.load.image('fondoRuinas', basePath + 'images/fondoRuinas.png');
    this.load.image('fondoreserva', basePath + 'images/reserva_natural_bg.png');
    this.load.image('fondoMatadero', basePath + 'images/FondoMatadero.png');
    this.load.image('fondoActvidades', basePath + 'images/FondoActividades.png');
    this.load.image('imgRuinas', basePath + 'images/DJI_0153-1024x575.jpg');
    this.load.image('imgActividades', basePath + 'images/7-819x1024.jpg');
    this.load.image('imgUbicacion', basePath + 'images/DJI_0061.jpg');
    this.load.image('btn_general', basePath + 'images/btn_general.png');
    this.load.image('mapa', basePath + 'images/Mapa_Carhue_Epecuen.png');

    // Mostrar una barra de carga o texto mientras se cargan los recursos
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 4, height / 2 - 30, width / 2, 50);

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Cargando...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 4 + 10, height / 2 - 20, (width / 2 - 20) * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();

      // Cambiar a la escena de inicio cuando se completan los recursos
      this.scene.start('homeScene');
    });
  }
}
