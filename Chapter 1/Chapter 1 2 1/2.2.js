document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const gokeepTalkingButton = document.getElementById("keepTalkingButton");
  const goChangeButton = document.getElementById("ChangeButton");

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

  if (gokeepTalkingButton) {
    gokeepTalkingButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%201%201/2.4.html")
    );
  } else {
    console.error("Error: Button with ID 'askButton' not found.");
  }

  if (goChangeButton) {
    goChangeButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%201%202/2.5.html")
    );
  }
});
