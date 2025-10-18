document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const attemptButton = document.getElementById("attemptButton");

  if (container) {
    container.classList.add("is-visible");
    console.log("Scene Content fading in successfully.");
  }

  const navigate = (nextFilePath) => {
    if (!container) return;
    container.classList.remove("is-visible");
    container.classList.add("fade-out");

    setTimeout(() => {
      window.location.replace(nextFilePath);
    }, 2100);
  };

  if (attemptButton) {
    attemptButton.addEventListener("click", () =>
      navigate("../Chapter%202/3.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
