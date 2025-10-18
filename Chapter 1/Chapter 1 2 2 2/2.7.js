document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const continueButton = document.getElementById("continueButton");

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

  if (continueButton) {
    continueButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%201/2.8.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
