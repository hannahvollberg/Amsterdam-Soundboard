# Sounds of Amsterdam 

An interactive, ambient soundboard web application designed to transport listeners to iconic locations across Amsterdam through synced visual backgrounds, local ambient soundscapes, and curated background music. 

*Created as a front-end practice project to refresh core HTML, CSS, and vanilla JavaScript concepts.*

---

## Features

* **Interactive Scene Switching:** Dynamically updates the page's background image, ambient audio loop, and music track based on selected locations (e.g., Prinsengracht Canals, Vondelpark, Red Light District, Coffeeshop, Cafe).
* **Dual Audio Mixing:** Independent volume sliders for ambient environmental noise and music tracks allow for custom soundscape balancing.
* **Draggable & Resizable Interface:** A modern UI container with backdrop blur effects that can be freely dragged around the screen by clicking and holding its header.
* **Synced Playback Controls:** Seamless play/pause session toggling that keeps both audio streams synchronized.
* **Custom Typography & Styling:** Clean layout styling utilizing Google Fonts (*Quicksand* and *Lora*) with glassmorphism design trends.

---

## Screenshots

---

## Built With

* **HTML5:** Semantic document structure.
* **CSS3:** Custom CSS variables, Flexbox layouts, glassmorphism (`backdrop-filter`), custom range sliders, and dynamic background styling.
* **JavaScript (Vanilla ES6):** Asynchronous Audio API management (`Promise.all`), event listeners, DOM manipulation, and dynamic mouse-drag positional logic.

---

## File Structure

```text
├── index.html        # Main HTML structure and UI dashboard
├── style.css         # Styling, glassmorphism UI, typography, and controls
├── app.js            # Soundboard state management, audio players, and drag functionality
└── assets/           # Images (.jpg) and Audio files (.mp3, .wav) referenced in scene config
