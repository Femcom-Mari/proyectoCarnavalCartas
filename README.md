
# **Arcana Memory Game**

**Arcana Memory Game** es un juego interactivo de memoria donde el jugador debe emparejar cartas con imágenes. El objetivo es encontrar todas las parejas de cartas antes de que se agote el tiempo. Con un temporizador en marcha y estadísticas que muestran los avances del jugador, el juego ofrece una experiencia divertida y desafiante.

## **Características**

- **Juego de memoria**: El jugador debe emparejar cartas con imágenes.
- **Interactividad**: Cada carta se voltea al hacer clic.
- **Temporizador**: El jugador tiene 30 segundos para emparejar las cartas.
- **Estadísticas**: El nombre del jugador y el puntaje se muestran durante el juego.
- **Efectos de sonido**: Efectos de audio para las interacciones del jugador (clics, aciertos, fallos, victoria y derrota).

## **Tecnologías Utilizadas**

- **HTML**: La estructura de la página y los elementos del juego.
- **CSS**: Los estilos visuales del juego, haciéndolo atractivo y responsivo.
- **JavaScript**: La lógica del juego, incluyendo el manejo del temporizador, la interacción de las cartas y la actualización de las estadísticas.

## **Instalación Local**

Para instalar y ejecutar el juego en tu máquina local, sigue estos pasos:

### 1. Clona el repositorio

Primero, clona el repositorio del proyecto a tu máquina:

```bash
git clone https://github.com/tuusuario/arcana-memory-game.git
```

### 2. Navega al directorio del proyecto

```bash
cd arcana-memory-game
```

### 3. Estructura del Proyecto

El proyecto contiene los siguientes archivos principales:

- **index.html**: Contiene la estructura HTML del juego.
- **memorize.css**: Define los estilos visuales del juego.
- **arcanaMemory.js**: Contiene la lógica del juego, incluyendo la funcionalidad para voltear cartas, iniciar el temporizador y manejar la interacción del jugador.
- **domName.js**: Lógica para capturar e interactuar con el nombre del jugador y las estadísticas.
- **sounds/**: Carpeta con los efectos de sonido utilizados en el juego (clics, aciertos, fallos, victoria y derrota).
- **images/**: Carpeta con las imágenes de las cartas del juego.

### 4. Abre el archivo HTML en tu navegador

Puedes abrir el archivo `index.html` en cualquier navegador web moderno (como Chrome, Firefox, Safari, etc.) para comenzar a jugar. No se requieren dependencias adicionales.

## **Dependencias Técnicas**

Este proyecto no utiliza bibliotecas externas ni dependencias adicionales. Todo el código está autocontenido, por lo que solo necesitas un navegador web para ejecutar el juego.

## **Lógica del Juego**

El juego se basa en un temporizador que cuenta con 30 segundos para que el jugador encuentre todos los pares de cartas. A continuación se describe el flujo principal del juego:

- **Inicio**: El juego comienza cuando el jugador hace clic en la primera carta. El temporizador empieza a contar desde 30 segundos.
- **Volteo de cartas**: Al hacer clic en una carta, esta se voltea mostrando una imagen asociada a un número.
- **Emparejamiento de cartas**: Si el jugador encuentra dos cartas con el mismo número, estas permanecen volteadas. De lo contrario, las cartas se vuelven a ocultar después de un breve intervalo.
- **Victoria**: El jugador gana cuando empareja todas las cartas dentro del tiempo límite de 30 segundos. En este caso, se muestra un mensaje de éxito.
- **Derrota**: Si el tiempo llega a cero sin emparejar todas las cartas, el juego se termina y el jugador pierde.

Los efectos de sonido proporcionan retroalimentación instantánea sobre las acciones del jugador, como los clics, los aciertos, los fallos, la victoria y la derrota.

### **Función Principal**

La lógica principal del juego se encuentra en el archivo `arcanaMemory.js`. Aquí están los puntos clave:

- **countTime()**: Inicia el temporizador, que disminuye cada segundo y actualiza el tiempo restante en la pantalla.
- **blockCards()**: Bloquea las cartas después de que el tiempo se acaba para evitar que el jugador siga interactuando con ellas.
- **unCover()**: Función llamada cada vez que el jugador hace clic en una carta. Controla el voltaje de las cartas, verifica si coinciden, y gestiona la puntuación y el tiempo restante.

### **Efectos de Sonido**

El proyecto incluye una serie de efectos de sonido que se activan durante el juego:
- `Win.mp3`: Sonido cuando el jugador gana.
- `lose.mp3`: Sonido cuando el jugador pierde.
- `click.mp3`: Sonido cuando el jugador hace clic en una carta.
- `good.mp3`: Sonido cuando el jugador encuentra una pareja correcta.
- `bad.mp3`: Sonido cuando el jugador encuentra una pareja incorrecta.

Estos sonidos mejoran la experiencia de juego y proporcionan retroalimentación inmediata al jugador.

## **Contribución**

Si deseas contribuir al desarrollo de este proyecto, siéntete libre de abrir un *pull request* o enviar un *issue* si encuentras algún problema o tienes sugerencias de mejoras.

## **Licencia**

Este proyecto está licenciado bajo la licencia MIT.

---

Este archivo `README.md` ahora incluye detalles sobre la estructura del proyecto, la lógica de funcionamiento y cómo los efectos de sonido y las interacciones con las cartas están implementados en JavaScript. Si necesitas alguna modificación adicional o aclaración, no dudes en pedírmelo.