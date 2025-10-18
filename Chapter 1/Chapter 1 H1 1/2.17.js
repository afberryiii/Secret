document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const pressButton = document.getElementById("pressButton");

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

  if (pressButton) {
    pressButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H1%201%201/2.22.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
