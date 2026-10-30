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
