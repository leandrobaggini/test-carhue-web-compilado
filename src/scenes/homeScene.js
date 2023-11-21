import Phaser from 'phaser';
import textData from '../data/textData';
import PreloaderScene from '../preloaderScene';

export default class homeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'homeScene' });
  }

  preload() {
    // Cargar recursos para la escena de inicio
    console.log("hola soy un juego de phaser")
  }

  create() {

    //Cargar video
    const videoIntro = this.add.video(960, 540, 'intro');
    videoIntro.play(true);
    videoIntro.getLoop(true);
   

    //degradado
    const degradado = this.add.image(960, 540, 'degradado_home');

    //logo playtur    
    const logo = this.add.image(1780, 50, 'logo-playtur');


    //logo carhue
    const logoCarhue = this.add.image(120, 50, 'logoCarhue');
          logoCarhue.setScale(.3); 
   
    /*
    //UI inferior
    const uiInferior = this.add.image(960, 930, 'uiInferior');
          uiInferior.setScale(1.34); 
          uiInferior.setAlpha(0.5);
    */

    /**
     * INICIO BOTON ACTIVIDADES
     */
    //boton actividades
    const actividades = this.add.image(1550, 930, 'actividades');
          actividades.setScale(1.34); 
          actividades.setInteractive();
          actividades.on('pointerdown', () => {
            this.scene.start('actividadesScene');
            console.log('soy boton actividades')
          });

          actividades.on('pointerover', () => {
          actividades.setTint(0xffcc00)
          textoActividades.setVisible(true);
        });
          actividades.on('pointerout', () => {
          actividades.clearTint();
          textoActividades.setVisible(false);
        });

    
    let textoActividades = this.add.text(1500, 1025, 'Actividades', {
      font: '14px Metropolis',
      fill: '#ffffff',
      });
      textoActividades.setVisible(false);
       
    /**
     * FIN BOTON ACTIVIDADES
     */      


    /**
     * INICIO BOTON ALOJAMIENTOS
     */
    //boton alojamiento
    const alojamiento = this.add.image(1242, 1003, 'alojamiento');
          alojamiento.setScale(1.34); 
          alojamiento.setInteractive();
          alojamiento.on('pointerdown', () => {
            this.scene.start('alojamientoScene');
            console.log('soy boton alojamiento')
          });

          alojamiento.on('pointerover', () => {
          alojamiento.setTint(0xffcc00)
          textoAloj.setVisible(true);
        });
          alojamiento.on('pointerout', () => { 
          alojamiento.clearTint();
          textoAloj.setVisible(false);
        });
     // Texto que se mostrará cuando el cursor pase por encima
     let textoAloj = this.add.text(1200, 1025, 'Alojamiento', {
      font: '14px Metropolis',
      fill: '#ffffff',
      });
      textoAloj.setVisible(false);
 
    /**
     * FIN BOTON ACTIVIDADES
     */
    
    
    /** 
     * INICIO BOTON TRANSPORTE
     */

    //boton transporte
    const transporte = this.add.image(1068, 1020, 'tranporte');
          transporte.setScale(1.34); 
          transporte.setInteractive();
          transporte.on('pointerdown', () => {
            this.scene.start('transporteScene');
            console.log('soy boton transporte')
          });

      transporte.on('pointerover', () => {
          transporte.setTint(0xffcc00)
          textoTrans.setVisible(true);
      });
      transporte.on('pointerout', () => { 
        transporte.clearTint();
        textoTrans.setVisible(false);
      });

     // Texto que se mostrará cuando el cursor pase por encima
    let textoTrans = this.add.text(1035, 1025, 'Ubicación', {
        font: '14px Metropolis',
        fill: '#ffffff',
        });
        textoTrans.setVisible(false);
   
    /**
    * FIN BOTON TRANSPORTE
    */ 

    /**
     * INICIO BOTON RUINAS
     */

    //boton ruinas
    const ruinas = this.add.image(205, 975, 'ruinas');
    ruinas.setScale(1.34); 
    ruinas.setInteractive();
    ruinas.on('pointerdown', () => {
      this.scene.start('ruinasScene');
      console.log('soy boton ruinas')
    });

    ruinas.on('pointerover', () => {
        ruinas.setTint(0xffcc00)
        textoRuinas.setVisible(true);
    });
    ruinas.on('pointerout', () => { 
      ruinas.clearTint();
      textoRuinas.setVisible(false);
    });

    // Texto que se mostrará cuando el cursor pase por encima
    let textoRuinas = this.add.text(130, 1025, 'Ruinas Villa Epecuen', {
        font: '14px Metropolis',
        fill: '#ffffff',
        });
        textoRuinas.setVisible(false);

    /**
     * FIN BOTON RUINAS
     */

    /**
     * INICIO BOTON MATADERO
     */
    //boton Matadero
    const matadero = this.add.image(625, 963, 'Matadero');
          matadero.setScale(1.34); 
          matadero.setInteractive();
          matadero.on('pointerdown', () => {
            this.scene.start('lagoScene');
            console.log('soy boton matadero')
          });

    matadero.on('pointerover', () => {  
        matadero.setTint(0xffcc00)
        textoMatadero.setVisible(true);
    });
    matadero.on('pointerout', () => {   
      matadero.clearTint();
      textoMatadero.setVisible(false);
    } );
    

    let textoMatadero = this.add.text(550, 1025, 'Matadero + Lago Epecuen', {
        font: '14px Metropolis',
        fill: '#ffffff',
        });
        textoMatadero.setVisible(false);
    
    /**
     * FIN BOTON MATADERO
     */

    /**
     * INICIO BOTON RESERVA NATURAL
     */

    //boton reserva natural
    const reservaNatural = this.add.image(918, 1012, 'reservaNatural');
          reservaNatural.setScale(1.34); 
          reservaNatural.setInteractive();
          reservaNatural.on('pointerdown', () => {
            this.scene.start('reservaScene');
            console.log('soy boton reserva natural')
          });

        reservaNatural.on('pointerover', () => {  
        reservaNatural.setTint(0xffcc00)
        textoReserva.setVisible(true);
        console.log('hola')
    });
    reservaNatural.on('pointerout', () => {
      reservaNatural.clearTint();
      textoReserva.setVisible(false);
    });


    let textoReserva = this.add.text(860, 1025, 'Reserva Natural', {
        font: '14px Metropolis',
        fill: '#ffffff',
        });
        textoReserva.setVisible(false);

    /**
    * FIN BOTON RESERVA NATURAL
    */

    /**
     * INICIO BOTON GASTRONOMIA
     */

    //boton gastronomia
    const gastronomia = this.add.image(1840, 1010, 'gastronomia');
          gastronomia.setScale(1.34); 
          gastronomia.setInteractive();
          gastronomia.on('pointerdown', () => {
            this.scene.start('gastronomiaScene');
            console.log('soy boton gastronomia')
          });  

    gastronomia.on('pointerover', () => {
        gastronomia.setTint(0xffcc00)
        textoGastronomia.setVisible(true);
    });  
    gastronomia.on('pointerout', () => {
      gastronomia.clearTint();
      textoGastronomia.setVisible(false);
    });


    let textoGastronomia = this.add.text(1790, 1025, 'Gastronomia', {
        font: '14px Metropolis',
        fill: '#ffffff',
        });
        textoGastronomia.setVisible(false);

    /**
     * FIN BOTON GASTRONOMIA
     */

    // Crear elementos y lógica de la escena de inicio
    this.add.text(800,190, textData.welcomeMessage, {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 100, color: '#ffffff '});
    this.add.text(750, 300, textData.belleza, { fontFamily:'Metropolis', fontSize: '40px', fill: '#ffffff' });
    //this.add.text(220, 400, textData.instructions, { fontFamily:'Metropolis', fontSize: '20px', fill: '#ffffff'});
    this.add.text(630, 50, textData.bienvenida, { fontFamily:'Metropolis', fontSize: '18px', fill: '#ffffff' });
    this.add.text(750, 80, 'Puede encontrarnos en Av.Colón y Belgrano de Carhué', { fontFamily:'Metropolis', fontSize: '18px', fill: '#ffffff' });


    




    let txtDescripEpecuen = this.add.text(400, 400, textData.instructions, {
      fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
      fontSize: 24,
      color: '#ffffff',
      align: 'center',
      wordWrap: {
          width: 1200, // Ancho máximo para el texto
          useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
      }
    });
    

    let btnExperiencia = this.add.graphics();  
    btnExperiencia.fillStyle(0xE6A33B);
    btnExperiencia.fillRoundedRect(770, 600, 400, 70, 30);

    let txtExperiencia = this.add.text(793, 622, 'Somos un Destino Gamificado', {
      fontFamily: 'Metropolis-black, "Times New Roman", Tahoma, serif',
      fontSize: 24,
      color: '#ffffff',
    });






  }

  update() {
    // Lógica de actualización de la escena de inicio
  }
}
