document.title = "Prologue";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goLeftButton = document.getElementById("LeftButton");
  const goRightButton = document.getElementById("RightButton");

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

  if (goLeftButton) {
    goLeftButton.addEventListener("click", () =>
      navigate("../Choice%201%20Outcome%201/1.0.html")
    );
  } else {
    console.error("Error: Button with ID 'LeftButton' not found.");
  }

  if (goRightButton) {
    goRightButton.addEventListener("click", () =>
      navigate("../Choice%201%20Outcome%202/1.4.html")
    );
  }
});
