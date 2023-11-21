# PHASER + VITE + javascript

Este es un repositorio base para la creacion de juegos en HTML5 utilizando Phaser.io y Vite.
El mismo trabaja con modulos, clases, herencia y polimorfismo.


### Build

``` # install dependencies
    npm install

    # serve with localhost
    npm run dev

    # build for production
    npm run build
```

# BUENAS PRACTICAS AL ESCALAR EL JUEGO

#### División de componentes: 

A medida que tu juego crezca, es recomendable dividir la lógica y los elementos de juego en componentes reutilizables. Por ejemplo, puedes tener carpetas separadas para enemigos, power-ups, interfaz de usuario, etc., y crear clases o módulos para cada uno.

#### Utilización de módulos: 

Aprovecha las capacidades de los módulos de ES6 para organizar y reutilizar tu código. Divide tus funciones y clases en módulos coherentes y luego impórtalos según sea necesario en tus escenas.

##### Gestión de estados: 

Considera utilizar un sistema de gestión de estados si tu juego se vuelve más complejo. Librerías como Redux o Vuex pueden ayudarte a manejar estados globales de manera efectiva.

#### Documentación y comentarios: 

Mantén tu código bien documentado y agrega comentarios explicativos cuando sea necesario. Esto facilitará la comprensión y el mantenimiento del código, tanto para ti como para otros desarrolladores.

#### Optimización: 

A medida que tu juego se desarrolle, presta atención a la optimización de rendimiento y carga. Minimiza el uso de recursos, optimiza las imágenes y realiza pruebas en diferentes dispositivos para garantizar una experiencia de juego fluida.

#### Comentarios de desarrollo: 

Utiliza herramientas como console.log para imprimir mensajes de depuración en la consola del navegador. Estos comentarios temporales pueden ser muy útiles para identificar problemas y depurar tu juego.
