//Francis incicio//
var halfwing1;
var halfwing2;

function preload() {
    halfwing1 = loadImage("GENESYSY%20IMAGES%20RESOURCES/halfwing1.png");
    halfwing2 = loadImage("GENESYSY%20IMAGES%20RESOURCES/halfwing2.png");
}

function setup() {
    let canvas = createCanvas(windowWidth, 800);
    canvas.parent("animacion");
    imageMode(CENTER);
}

canvas.parent("animacion");

function draw() {
    background(0);

var tiempo = millis();
var centroX = width / 2;
var centroY = height / 2;
var apertura = constrain((tiempo - 1000) / 500, 0, 1);

var separacion = 200 + 100 * apertura;

image(halfwing1, centroX - separacion, centroY, 400, 400);
image(halfwing2, centroX + separacion, centroY, 400, 400);

var transparencia = constrain((tiempo - 1000) / 2000, 0, 1);

    textAlign(CENTER, CENTER);
    textSize(40);
    fill(200, transparencia * 180);
    textFont("Jura");
    text ("GENESYS", centroX, centroY);

}
 
function mostrarMenu() {
  var menu = document.getElementById("menu-enlaces");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//Proyectos destacados Ian//

document.querySelectorAll(".destacados-preview").forEach(preview => {
  const video = preview.querySelector("video");
  if (!video) return;

preview.addEventListener("mouseenter", () => {
    video.muted = true;
    video.play().catch(error => {
        console.error("Error al reproducir vídeo:", error);
    });
});

preview.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});
});

// Cargamos YouTube al abrir y lo descargamos al cerrar para detener el sonido.
const reproductor = document.querySelector("#destacados-reproductor");
const youtube = document.querySelector("#destacados-youtube");

if (reproductor && youtube) {
  reproductor.addEventListener("show.bs.modal", event => {
    const enlace = event.relatedTarget;
    const id = enlace?.dataset.youtubeId;
    if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) {
      event.preventDefault();
      return;
    }

    document.querySelectorAll(".destacados-preview video").forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    youtube.title = enlace.getAttribute("aria-label") || "Reproductor de YouTube";
    youtube.src = enlace.dataset.youtubeEmbed || `https://www.youtube.com/embed/${id}?rel=0`;
  });

  reproductor.addEventListener("hidden.bs.modal", () => {
    youtube.removeAttribute("src");
  });
}

// ROB: reproducir en grande al abrir y detener al cerrar.
const robModal = document.querySelector("#destacados-rob-modal");
const robVideo = document.querySelector("#destacados-rob-video");

if (robModal && robVideo) {
  robModal.addEventListener("shown.bs.modal", () => {
    document.querySelectorAll(".destacados-preview video").forEach(video => video.pause());
    robVideo.play().catch(() => {});
  });

  robModal.addEventListener("hidden.bs.modal", () => {
    robVideo.pause();
    robVideo.currentTime = 0;
  });
}

// Ryan: el mismo comportamiento que ROB.
const ryanModal = document.querySelector("#destacados-ryan-modal");
const ryanVideo = document.querySelector("#destacados-ryan-video");

if (ryanModal && ryanVideo) {
  ryanModal.addEventListener("shown.bs.modal", () => {
    document.querySelectorAll(".destacados-preview video").forEach(video => video.pause());
    ryanVideo.play().catch(() => {});
  });

  ryanModal.addEventListener("hidden.bs.modal", () => {
    ryanVideo.pause();
    ryanVideo.currentTime = 0;
  });
}

// Fashion Week: reproducir en grande y detener al cerrar.
const fashionModal = document.querySelector("#destacados-fashion-modal");
const fashionVideo = document.querySelector("#destacados-fashion-video");

if (fashionModal && fashionVideo) {
  fashionModal.addEventListener("shown.bs.modal", () => {
    document.querySelectorAll(".destacados-preview video").forEach(video => video.pause());
    fashionVideo.play().catch(() => {});
  });

  fashionModal.addEventListener("hidden.bs.modal", () => {
    fashionVideo.pause();
    fashionVideo.currentTime = 0;
  });
}
