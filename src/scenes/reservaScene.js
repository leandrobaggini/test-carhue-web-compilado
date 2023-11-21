import Phaser from "phaser";    
import textData from "../data/textData";
import PreloaderScene from "../preloaderScene";


export default class reservaScene extends Phaser.Scene {
    constructor() {
        super({ key: "reservaScene" });
    }   
    create() {
            
        this.add.image(960, 540, 'fondoreserva');
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



let txtReserva = this.add.text(750,80, textData.txtReserva, {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 60, color: '#ffffff '});

let txttituloreserva = this.add.text(280, 280, 'Reserva natural cultural e histórica Laguna Epecuén ', {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 24, color: '#000000 '}); 

let txtdescripreserva = this.add.text(280, 330, "En el marco de dar protección y manejo a los diferentes ambientes naturales, históricos y culturales dentro del Distrito de Adolfo Alsina, y por ordenanza n°4265, es que se crea el 5 de marzo de 2018, una Reserva Natural Municipal. Su inauguración oficial el 22 de Julio del año 2019. Se realizó con la colaboración de alumnos, docentes y directivos de la Escuela N° 3 Juan Bautista Alberdi de Carhué. ", {      
  fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
  fontSize: 20,
  color: '#000000',
  wordWrap: {
      width: 1300, 
      useAdvancedWrap: true 
  }});

  let txtdescripreserva1 = this.add.text(280, 410, "La misma cuenta con un plan de manejo que incluye tres zonas muy diferenciadas y en cada una de ellas, una serie de lineamientos y acciones necesarias para su implementación como herramientas claves para su ordenamiento y conservación. La zona intangible/ zona de uso extensivo/ zona de uso intensivo y una zona común para las tres anteriores que es la zona de amortiguación. ", {      
    fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
    fontSize: 20,
    color: '#000000',
    wordWrap: {
        width: 1300, 
        useAdvancedWrap: true 
    }});

let txttituloreserva1 = this.add.text(280, 500, 'Maravillosas aguas', {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 24, color: '#000000 '}); 

let txtdescripreserva2 = this.add.text(280, 540, "Hacia 1899 anoticiados por comentarios elogiosos y gracias al ferrocarril, los primeros turistas comenzaron a arribar al lago Epecuen, otorgando un importante crecimiento al pueblo de Carhué. Hasta 1921 la ciudad de Carhué creció al ritmo de los hoteles y a los centenares de turistas que necesitaban de esta fuente natural de salud. El 23 de enero de 1921 el visionario don Arturo Vatteone inauguraba un balneario a orillas mismas del Lago Epecuén, convirtiéndolo luego en la base del pueblo o Villa “Lago Epecuen”. ", {      
  fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
  fontSize: 20,
  color: '#000000',
  wordWrap: {
      width: 1300, 
      useAdvancedWrap: true 
  }});

let txtdescripreserva3 = this.add.text(280, 650, "Desde aquel día Lago Epecuén comenzó a convertirse en una realidad para el turismo de salud de la República Argentina. Sus aguas altamente mineralizadas producían y producen efectos realmente asombrosos en quienes aprovechan sus bondades. ", {      
  fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
  fontSize: 20,
  color: '#000000',
  wordWrap: {
      width: 1300, 
      useAdvancedWrap: true 
  }});

  let txtdescripreserva4 = this.add.text(280, 720, "Problemas como la artritis, artrosis, psoriasis y diversas enfermedades de la piel, fueron tratadas con asiduidad a lo largo de casi más de un siglo. Estudios realizados desde 1886 en adelante explican que la altísima concentración de minerales, que la hace hipermarina, es comparable únicamente con el Mar Muerto. La inmersión en sus aguas produce efectos beneficiosos en el organismo, los que son analizados y controlados por profesionales de la salud que conocen y apoyan el desarrollo de la actividad termal. ", {      
    fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
    fontSize: 20,
    color: '#000000',
    wordWrap: {
        width: 1300, 
        useAdvancedWrap: true 
    }});

let txttituloreserva2 = this.add.text(280, 830, 'Los Flamencos del Lago', {fontFamily:  'Metropolis-Bold, "Times New Roman", Tahoma, serif', fontSize: 24, color: '#000000 '}); 

let txtdescripreserva5 = this.add.text(280, 870, "Si bien son aves migratorias, los flamencos encontraron en el lago el ambiente ideal para vivir y reproducirse, no sólo por la tranquilidad de la zona, sino por la existencia en el Lago Epecuén de uno de sus platos predilectos, la artemia salina, único ser vivo que habita este espejo de agua. ", {      
  fontFamily: 'Metropolis, "Times New Roman", Tahoma, serif',
  fontSize: 20,
  color: '#000000',
  wordWrap: {
      width: 1300, 
      useAdvancedWrap: true 
  }});


let fondoBlanco = this.add.graphics();  
fondoBlanco.fillStyle(0xffffff, 0.3);
fondoBlanco.fillRoundedRect(225, 200, 1450, 2000, 20);

let panel = this.add.container(0,0);
panel.setSize(1500,2000);
panel.setInteractive(new Phaser.Geom.Rectangle(0, 0, 400, 400), Phaser.Geom.Rectangle.Contains);

panel.add([fondoBlanco, 
          txtReserva, 
          txttituloreserva,
          txtdescripreserva, 
          txtdescripreserva1,
          txttituloreserva1, 
          txtdescripreserva2, 
          txtdescripreserva3,
          txtdescripreserva4,
          txttituloreserva2,
          txtdescripreserva5]);

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