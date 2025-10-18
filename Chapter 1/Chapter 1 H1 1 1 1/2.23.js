document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const trackButton = document.getElementById("trackButton");
  const confrontButton = document.getElementById("confrontButton");

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

  if (confrontButton) {
    confrontButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H%201%201%201/2.30.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (trackButton) {
    trackButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H1%201%201%201%201/2.28.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
