document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const approachButton = document.getElementById("approachButton");
  const observeButton = document.getElementById("observeButton");

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

  if (approachButton) {
    approachButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%202/2.9.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (observeButton) {
    observeButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%201%202%202/2.12.html")
    );
  }
});
