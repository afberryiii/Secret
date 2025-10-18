document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const stealButton = document.getElementById("stealButton");
  const enlistButton = document.getElementById("enlistButton");

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

  if (stealButton) {
    stealButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H2%201%201%202%201/2.26.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (enlistButton) {
    enlistButton.addEventListener("click", () =>
      navigate("../Chapter%201%20H2%201%201%202%201%202/2.27.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }
});
