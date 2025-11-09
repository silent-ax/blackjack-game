# 🃏 Blackjack Game

Un pequeño juego de **Blackjack (21)** desarrollado en **JavaScript moderno (ES6+)**, con una estructura modular y siguiendo principios de *clean code*.

---

## 🎯 Objetivo del proyecto

El objetivo del juego es sumar cartas hasta acercarse lo más posible a **21 puntos** sin pasarse.  
Compites contra la computadora, que juega automáticamente su turno según las reglas básicas del Blackjack.

---

## 🧩 Características

- 🔁 Baraja generada dinámicamente.
- 🎲 Extracción aleatoria de cartas (sin reposición).
- 👤 Lógica separada entre *motor de juego* y *interfaz de usuario*.
- 📦 Arquitectura modular (separación de responsabilidades).
- 💬 Mensajes del juego en español.
- 💅 Interfaz simple con imágenes dinámicas de cartas.

---

## ⚙️ Estructura del proyecto

```

blackjack/
│
├── index.html
├── assets/
│   ├── img/               # Imágenes de las cartas
│   ├── css/
│   │   └── style.css
│   └── sounds/            # (Opcional) efectos de sonido
│
└── src/
├── main.js
├── core/
│   ├── deck.js
│   ├── blackjackGame.js
│   └── blackjackUtils.js
├── ui/
│   ├── uiHandlers.js
│   └── uiEvents.js
└── config/
└── constants.js

```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona o descarga el repositorio.  
   ```bash
   git clone https://github.com/silent-ax/blackjack-game.git
   cd blackjack-game
    ```

2. Abre el archivo `index.html` directamente en tu navegador.
   *(No requiere servidor ni dependencias externas).*

> 💡 Si usas VSCode, puedes instalar la extensión **Live Server** para recargar el juego automáticamente.

---

## 🧠 Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6 Modules)**

---

## 🧱 Principios aplicados

* **Clean Code:** nombres descriptivos, funciones puras y separación de responsabilidades.
* **Modularización:** código dividido en módulos lógicos (`core`, `ui`, `config`).
* **Encapsulación:** la baraja y la lógica del juego están aisladas del DOM.

---

## 💡 Próximas mejoras

* 🧠 Mejorar la IA de la computadora.
* 🎨 Añadir animaciones y efectos de sonido.
* 💾 Guardar puntuaciones o estadísticas en localStorage.
* 📱 Adaptar la interfaz para móviles.

---

## 👨‍🏫 Autor

Desarrollado por **Alex Martinez**
📧 silent.code.axmo@gmail.com
💼 https://github.com/silent-ax

```

---