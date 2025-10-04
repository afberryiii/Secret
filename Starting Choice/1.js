document.title = "Prologue";

document.addEventListener("DOMContentLoaded", () => {
  // ===== Get elements =====
  const container = document.getElementById("sceneContainer");
  const runButton = document.getElementById("runButton");
  const messageButton = document.getElementById("messageButton");
  const shoutButton = document.getElementById("shoutButton");

  // ===== Page paths =====
  const nextPagePath1 = "../Prologue/Choice%201/1.1.html";
  const nextPagePath2 = "../Prologue/Choice%202/1.2.html";
  const nextPagePath3 = "../Prologue/Choice%203/1.3.html";

  // ===== FADE-IN LOGIC =====
  if (container) {
    container.classList.add("is-visible");
    console.log("Scene content fading in...");
  } else {
    console.error("Error: 'sceneContainer' not found in DOM.");
  }

  // ===== EVENT LISTENERS =====

  // RUN BUTTON CLICK
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

  // MESSAGE BUTTON CLICK
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

  // SHOUT BUTTON CLICK - Corrected
  if (shoutButton && container) {
    shoutButton.addEventListener("click", () => {
      console.log("Shout choice selected -> fade-out started...");
      container.classList.add("fade-out");

      setTimeout(() => {
        window.location.replace(nextPagePath3);
      }, 2100);
    });
  } else if (!shoutButton) {
    console.error("Error: 'shoutButton' not found in DOM.");
  }
});
