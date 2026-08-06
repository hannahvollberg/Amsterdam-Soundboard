# Sounds of Amsterdam 

Interactive soundboard web app designed to transport listeners to iconic locations across Amsterdam 


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
![Site landing screen](./product_screenshots/landingpage.png)
**Site Landing Page:**  Users are greeted with a screen containing an image of Amsterdam as the background, along with a menu containing options that allow the user to select a location for their soundscape. A title is included in the top left, reading "Sounds of Amsterdam"
<br>


![Canals page](./product_screenshots/canals-shot.png)
**The Prinsengracht Canals:** Selecting any location on the menu will update the page to view a new image and allow the user to play the audios for that specific location

![Vondelpark](./product_screenshots/resize-menu.png)
**Vondelpark:** Each location is fitted with two different audios: ambient noise and music. Volume settings for each are individually controllable, allowing the user to have full autonomy over their experience

![Red Light District menu resize](./product_screenshots/mini-menu.png)
**Red Light District:** The control menu is easily adjustable and allows users to drag and resize based on their desired experience. To move the menu, simply click/grab the top of the menu where the "Select Location" text is located, and drag. To resize the menu, click and hold on the bottom right corner of the menu, and drag in or out to shrink or enlarge the menu.

---
## Site Demo:
https://github.com/user-attachments/assets/62c0ae0b-4ff2-410e-9ff0-86affa7046a6



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
