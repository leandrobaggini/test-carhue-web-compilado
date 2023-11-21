import Phaser from "phaser";    
import textData from "../data/textData";
import PreloaderScene from "../preloaderScene";


export default class transporteScene extends Phaser.Scene {
    constructor() {
        super({ key: "transporteScene" });
    }   
    create() {

        const imgUbicacion = this.add.image(960, 540, 'imgUbicacion');
        imgUbicacion.setScale(.4);


        this.add.image(960, 540, 'degradado_ruinas');
            
        //logo playtur    
         const logo = this.add.image(1780, 50, 'logo-playtur');


        //logo carhue
        const logoCarhue = this.add.image(120, 50, 'logoCarhue');
              logoCarhue.setScale(.3); 
              logoCarhue.setInteractive();
              logoCarhue.on('pointerdown', () => {
                this.scene.start("homeScene");
              });


      
              let txtReserva = this.add.text(800,80, textData.txtTransporte, {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 60, color: '#ffffff '});

              let txtEpecuen = this.add.text(280, 280, 'Ubicación de Carhué', {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 30, color: '#000000 '});
              let txtdescriptionUbicacion = this.add.text(280, 330, "La ciudad de Carhué está situada al oeste de la Provincia de Buenos Aires, en el distrito de Adolfo Alsina, República Argentina a 520 km. de la Capital Federal. Dista 200 km. de Bahía Blanca, 560 de Mar del Plata y aproximadamente 200 km de Santa Rosa (La Pampa).", {  
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              let txtdescriptionUbicacion2 = this.add.text(280, 400, "Cuenta con una población de más de 10.000 habitantes y está unida al país por la Ruta Nacional Nº 33 (Rosario – Bahía Blanca) y la Ruta Provincial Nº 60 (Buenos Aires – La Pampa).", {  
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              let txtSubtitle = this.add.text(280, 470, "Trayectos y tiempos de viaje desde las principales ciudades", {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 30, color: '#000000 '});

              let txtruta1description = this.add.text(280, 520, "Desde Capital Federal: Tomar Autopista Ricchieri hasta Ezeiza y luego la Autopista Ezeiza – Cañuelas. Continuar por Ruta Nacional 205 hasta Bolívar y empalmar con Ruta provincial 65 hasta la ciudad de Guaminí. Luego tomar Ruta Nacional 33 hasta el cruce con la Ruta Provincial 60. Girar a la derecha hasta el acceso a Carhué. Distancia en Km: 540 – Tiempo de viaje: 6 hs.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              let txtrutadescription2 = this.add.text(280, 620, "Desde La Plata: Tomar Ruta Provincial 6 hasta Cañuelas. Continuar por Ruta Nacional 205, luego Ruta Provincial 65 y Ruta Nacional 33 hasta cruce con Ruta Provincial 60. Girar a la derecha hasta el acceso a Carhué. Distancia en Km: 560 – Tiempo de viaje: 7 hs.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });
              
              let txtrutadescription3 = this.add.text(280, 700, "Desde Bahía Blanca: Tomar Ruta Provincial 33 hasta el cruce de Espartillar, girar a la izquierda y continuar hasta Carhué: Distancia en Km: 200. – Tiempo de viaje: 2 hs.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });
              
              let txtrutadescription4 = this.add.text(280, 755, "Desde Mar del Plata: Distancia en Km: 560 – Tiempo de viaje: 7 hs.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              let txtrutadescription5 = this.add.text(280, 790, "Desde Rosario: Distancia en Km: 650 – Tiempo de viaje: 8 hs.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              
              let txtrutadescription6 = this.add.text(280, 820, "Desde Córdoba: Distancia en Km: 832 – Tiempo de viaje: 9hs. 50 min.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });

              let txtrutadescription7 = this.add.text(280, 850, "Desde Santa Rosa: Distancia en Km: 186 – Tiempo de viaje: 2 h. 20 min.", {
                fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
                fontSize: 20,
                color: '#000000',
                wordWrap: {
                    width: 1200, // Ancho máximo para el texto
                    useAdvancedWrap: true // Usa un enfoque más avanzado para el ajuste de palabras
                }
              });
              
              
              let imgMapa = this.add.image(950, 1500, 'mapa');
              imgMapa.setScale(.35);

              let fondoBlanco = this.add.graphics();  
              fondoBlanco.fillStyle(0xffffff, 0.3);
              fondoBlanco.fillRoundedRect(225, 200, 1450, 2000, 20);
              
              let panel = this.add.container(0,0);
              panel.setSize(1500,2000);
              panel.setInteractive(new Phaser.Geom.Rectangle(0, 0, 400, 400), Phaser.Geom.Rectangle.Contains);
              
              panel.add([fondoBlanco, 
                        txtReserva, 
                        txtEpecuen, 
                        txtdescriptionUbicacion, 
                        txtdescriptionUbicacion2, 
                        imgMapa, txtSubtitle, 
                        txtruta1description, 
                        txtrutadescription2,
                        txtrutadescription3,
                        txtrutadescription4,
                        txtrutadescription5,
                        txtrutadescription6,
                        txtrutadescription7]);
              
                  // Configura el evento de scroll
                  this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {
                    panel.y -= deltaY;
                });

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
    }

    update() {
    }
}