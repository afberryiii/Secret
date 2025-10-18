document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goButton = document.getElementById("goButton");
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

  if (observeButton) {
    observeButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%202%201/2.19.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (goButton) {
    goButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%201%202%202%201/2.14.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
