# Criptografiando

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del Producto](#2-definición-del-producto)
* [3. Proceso de Diseño](#3-proceso-de-diseño)
* [4. Uso de la Aplicación Web](#4-uso-de-la-aplicación-web)


***

## 1. Preámbulo

Ante el incremento de la tecnología como herramienta para crear y facilitar la vida positivamente, debemos ser conscientes que su uso negativo crece en igual y hasta en mayor proporción.

El robo de información confidencial se ha convertido en uno de los principales objetivos de los ciberdelincuentes para luego extorsionar, amenazar, e incluso atentar contra la vida.

La criptografia es un mecanismo extra que podemos usar para proteger mejor nuestros datos personales y evitar que caiga en manos de la ciberdelincuencia.

## 2. Definición del producto

Esta aplicacion web ha sido creada para quien necesite proteger un texto. Por ejemplo, un niño que desee escribir su diario, o una niña que quiera escribir un mensaje secreto en un post-it, o una joven que necesite proteger datos confidenciales compartidos via whatsapp (incluso si perdiese su movil), o una cientifica que investiga sobre un tema top-secret y necesite subir sus hallazgos a la nube, etc. 

Dada la diversidad de usuarixs que usarán esta herramienta, se pensó en un diseño sencillo, minimalista, e intuitivo, para facilitar su uso. Sin embargo, esta no fue la idea inicial. Sigamos, y te cuento como fue proceso de diseño.

## 3. Proceso de Diseño

### Investigación:
* Páginas Referenciales:
  <details><summary>Links</summary><p>

  * [Escítala](https://es.wikipedia.org/wiki/Esc%C3%ADtala)
  * [Conceptos Básicos de Encriptación](https://www.xataka.com/basics/encriptar-que-sirve-como-cifrar-tus-archivos)
  * [DEDUESCAPEROOM](https://eduescaperoom.com/cifrado-cesar/)
  * [CRYPTOMATOR](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [ENCIPHER IT](https://encipher.it/)
  * [AXCRYPT](https://www.axcrypt.net/)
  * [STEGANOS](https://www.segurisoft.es/)
</p></details>

### Prototipado:

* Etapa Inicial: 

  Enfocada en un público mas joven, hice un diseño en papel
![](./src/img/dise%C3%B1o/prototipo1-bf.jpeg)

  Luego, para una mejor apreciación lo pasé a figma
![](./src/img/dise%C3%B1o/prototipo1-figma.png)

* Etapa Intermedia: 

  Tras recibir feedback, rediseñé el producto para una mejor experiencia de usuarix
![](./src/img/dise%C3%B1o/prototipo2-bf.png)

  Finalmente, así quedó el prototipo despues de algunos cambios.
![](./src/img/dise%C3%B1o/prototipo2-af.png)

* Etapa final:
  
  Producto final
  ![](./src/img/dise%C3%B1o/dise%C3%B1o-final.png)

### Interfaz de Usuaria:
* Diseño intuitivo.- al ser una herramienta exclusiva para cifrar texto, opté por una interfaz bicromática, donde las áreas mas importantes resalten con un tono mas claro.
* Diseño minimalista.- para no distraer a la usuaria con detalles innecesarios decidí implementar la aplicación con botones e inputs necesarios para una buena experiencia de usuaria.
* Area Informativa.- en la parte superior, he puesto un texto explicativo sobre la importancia del `texto cifrado` y los pasos a seguir para un mejor uso. 
* Area Ingreso de Texto.- en esta area implementé el elemento textarea para que la usuaria tenga la libertad de escribir la cantidad de considere necesaria. Dentro de esta area, al lado izquierdo estan los botones `Cifrar` y `Descifrar`, y al lado derecho el botón `Limpiar` (para borrar los datos ingresados anteriormente)
* Area Texto Resuelto.- area ubicada al lado derecho, permite una visualizacion intuitiva del texto resultante despues de presionar el botón cifrar/descifrar.


## 4. Uso de la Aplicación Web

  Usa [Critografiando](https://jessim40.github.io/DEV002-cipher/) para cifrar cualquier texto que necesites proteger. `OJO`: Recuerda que el cifrado es **sólo una herramienta mas** que puedes implementar. 

  En tres etapas tendrás tu texto cifrado / descifrado:
  * **Eleccion de clave**, este número indica el desplazamiento de posición que sufre un caracter.
  * **Ingreso de texto**, justo debajo de la indicación: "_Ingrese texto a cifrar/descifrar:_", empiece a escribir.
  * **Presionar botón cifrar / descifrar**, aquí es donde la magia ocurre, tu texto encriptado / desencriptado aparecerá en el _area de texto resuelto_.
  
  **RECUERDA**: Borrar todo lo escrito, con solo presionar el botón `Limpiar`. 

  Si deseas **compartir** tu información encriptada con alguien mas debes seguir los pasos descritos abajo <details><summary>Para compartir:</summary><p>

  * Copia el texto encriptado
  * Recuerda la clave que usaste para encriptar
  * Comparte el texto y la clave por separada a quien desees que descifre el texto.
</p></details>
