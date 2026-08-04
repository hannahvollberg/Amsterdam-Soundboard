// Application data

const scenes = [
    {
        id: "canals",
        name: "Prinsengracht Canals",
        image: "assets/images/rowhouses.jpg",
        ambientSound: "assets/audios/street_market_harp.mp3",
        music: "assets/audios/sunny_canals.mp3"
    },

    {
        id: "Vondelpark",
        name: "Vondelpark",
        image: "assets/images/vondelparkimg.jpg",
        ambientSound: "assets/audios/street_market_harp.mp3",
        music: "assets/audios/vondelpark_chill_garden.mp3"
    },

    {
        id: "RedLightDisctrict",
        name: "Red Light District",
        image: "assets/images/redlight.jpg",
        ambientSound: "assets/audios/red_light_walk.wav",
        music: "assets/audios/swanky_red_light.mp3"
    },

    {
        id: "Coffeeshop",
        name: "CoffeeShop",
        image: "assets/images/coffeeshop.jpg",
        ambientSound: "assets/audios/coffeeshop_rain.mp3",
        music: "assets/audios/coffeeshop_jazz.mp3"
    },

    {
        id: "cafe",
        name: "cafe",
        image: "assets/images/cafe.jpg",
        ambientSound: "assets/audios/dutch_cafe.wav",
        music: "assets/audios/cool_cafe.mp3"
    },
];

// audio player creation
const ambientPlayer = new Audio();
const musicPlayer = new Audio()

// Loop audio
ambientPlayer.loop = true;
musicPlayer.loop = true;

let currentScene = null;
let isPlaying = false;

const menuContainer = document.getElementById("location-menu");
const playBtn = document.getElementById("global-play-btn")
const ambientVolSlider = document.getElementById("ambient-volume");
const musicVolSlider = document.getElementById("music-volume");

// scenes function
function initApp() {
    scenes.forEach(scene => {
        const button = document.createElement("button");
        button.classList.add("menu-card")
        button.innerText = scene.name;

        button.addEventListener("click", () => changeEnvironment(scene));
        menuContainer.appendChild(button);
    });
}

// set volume
ambientVolSlider.addEventListener("input", (e) => ambientPlayer.volume = e.target.value);
musicVolSlider.addEventListener("input", (e) => musicPlayer.volume = e.target.value);

playBtn.addEventListener("click", togglePlayback);

// Change scene
function changeEnvironment(scene) {
    currentScene = scene;
    document.body.classList.remove('default-screen');
    document.body.style.background = `url('${scene.image}') center/cover no-repeat fixed`;

    ambientPlayer.volume = ambientVolSlider.value;
    musicPlayer.volume = musicVolSlider.value;

    ambientPlayer.src = scene.ambientSound;
    musicPlayer.src = scene.music;

    playBtn.removeAttribute("disabled");
    playBtn.innerText = "Play Scene";

    if (isPlaying) {
        startAudioTracks();
    }
}

function startAudioTracks() {
    Promise.all([ambientPlayer.play(), musicPlayer.play()])
        .then(() => {
            isPlaying = true;
            playBtn.innerText = "Pause Session";
        })
        .catch(error => {
            console.log("ERROR: Audio playback blocked by browser.", error);   
        });
}

function togglePlayback() {
    if (!currentScene) return;

    if (isPlaying) {
        ambientPlayer.pause();
        musicPlayer.pause();
        isPlaying = false;
        playBtn.innerText = "Resume Session";
    } else {
        startAudioTracks();
    }
}

// draggable window
function makeElementDraggable(dashboardEl) {
    const handle = dashboardEl.querySelector("h2");
    let posX=0, posY=0, mouseX=0, mouseY=0;

    if (handle) {
        handle.onmousedown = dragMouseDown;
    } else {
        dashboardEl.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        if (dashboardEl.style.transform !== "none") {
            const rect = dashboardEl.getBoundingClientRect();
            dashboardEl.style.transform = "none";
            dashboardEl.style.left = rect.left + "px";
            dashboardEl.style.top = rect.top + "px";
            dashboardEl.style.bottom = "auto";
        }

        mouseX = e.clientX;
        mouseY = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = mouseX - e.clientX;
        posY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        dashboardEl.style.top = (dashboardEl.offsetTop - posY) + "px";
        dashboardEl.style.left = (dashboardEl.offsetLeft - posX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
const dashboardElement = document.querySelector(".ambient-dashboard");
makeElementDraggable(dashboardElement);

initApp()
