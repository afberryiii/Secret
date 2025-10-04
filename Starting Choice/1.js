document.title = "Prologue";

document.addEventListener("DOMContentLoaded", () => {
  // ===== Get elements =====
  const container = document.getElementById("sceneContainer");
  const runButton = document.getElementById("runButton");
  const messageButton = document.getElementById("messageButton");

  // ===== Page paths =====
  const nextPagePath1 = "../Choice%201/1.1.html";
  const nextPagePath2 = "../Prologue/Choice%202/1.2.html";

  // ===== FADE-IN LOGIC =====
  if (container) {
    container.classList.add("is-visible");
    console.log("Scene content fading in...");
  } else {
    console.error("Error: 'sceneContainer' not found in DOM.");
  }

  // ===== RUN BUTTON CLICK =====
  if (runButton && container) {
    runButton.addEventListener("click", () => {
      console.log("Run choice selected -> fade-out started...");
      container.classList.add("fade-out");

      setTimeout(() => {
        window.location.replace(nextPagePath1);
      }, 2100);
    });
  } else if (!runButton) {
    console.error("Error: 'runButton' not found in DOM.");
  }

  // ===== MESSAGE BUTTON CLICK =====
  if (messageButton && container) {
    messageButton.addEventListener("click", () => {
      console.log("Message choice selected -> fade-out started...");
      container.classList.add("fade-out");

      setTimeout(() => {
        window.location.replace(nextPagePath2);
      }, 2100);
    });
  } else if (!messageButton) {
    console.error("Error: 'messageButton' not found in DOM.");
  }
});
