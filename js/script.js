//Francis incicio//
var halfwing1;
var halfwing2;

function preload() {
    halfwing1 = loadImage("GENESYSY%20IMAGES%20RESOURCES/halfwing1.png");
    halfwing2 = loadImage("GENESYSY%20IMAGES%20RESOURCES/halfwing2.png");
}

function setup() {
    createCanvas(windowWidth, 800);
    imageMode(CENTER);
}

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
    video.play().then(() => {
      // Si el ratón ya salió mientras cargaba, detenemos la reproducción.
      if (!preview.matches(":hover")) {
        video.pause();
        video.currentTime = 0;
      }
    }).catch(() => {});
  });

  preview.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
