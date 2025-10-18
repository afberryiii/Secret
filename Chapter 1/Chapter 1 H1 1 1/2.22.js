document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const checkButton = document.getElementById("checkButton");
  const demandButton = document.getElementById("demandButton");

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

  if (demandButton) {
    demandButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H1%201%201%201/2.23.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (checkButton) {
    checkButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H%201/2.18.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
