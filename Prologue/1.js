document.title = "A Sinful Nightmare - Scene 1";

// === FADE IN LOGIC (Equivalent to 1.js) ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  if (container) {
    // *** START FADE IN ***
    // This adds the .is-visible class, transitioning opacity from 0 to 1 over 2 seconds.
    container.classList.add("is-visible");
    console.log("Scene 1 content fading in...");
  }
});
