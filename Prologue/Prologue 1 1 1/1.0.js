document.title = "Prologue";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const WakeUpButton = document.getElementById("WakeUpButton");
  // FIX: Changed "scene_1_run.html" to "./scene_1_run.html" to ensure it's treated as a valid URL
  // relative to the current directory, fixing the SyntaxError.
  const nextPagePath = "../../Chapter%201/2.html";

  // === FADE IN LOGIC (on load) ===
  if (container) {
    // Add the .is-visible class to start the fade-in transition
    container.classList.add("is-visible");
    console.log("Scene Content fading in...");
  }

  // === FADE OUT AND NAVIGATION LOGIC (on click) ===
  if (WakeUpButton && container) {
    WakeUpButton.addEventListener("click", () => {
      console.log("Choice selected: -> Initiating fade-out...");

      // 1. Start the fade-out animation
      container.classList.add("fade-out");

      // 2. Navigate to the next page after the animation duration (2100 milliseconds)
      setTimeout(() => {
        window.location.replace(nextPagePath);
      }, 2100);
    });
  } else {
    if (!WakeUpButton) console.error("Error: Button 'WakeUpButton' not found.");
    if (!container)
      console.error("Error: Container 'sceneContainer' not found.");
  }
});
