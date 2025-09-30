document.title = "A Sinful Nightmare - Title Screen";

document.addEventListener("DOMContentLoaded", () => {
  const backgroundAudio = document.getElementById("creepyAudio");
  const unmuteButton = document.getElementById("unmuteButton");
  const pickupButton = document.getElementById("pickupButton");
  const hangupButton = document.getElementById("hangupButton");
  const pageContent = document.getElementById("pageContent");
  const muteButton = document.getElementById("muteButton");

  if (unmuteButton && backgroundAudio) {
    unmuteButton.addEventListener("click", () => {
      backgroundAudio.muted = false;
      backgroundAudio.play();
      unmuteButton.style.display = "none";
    });
  }

  if (pickupButton && pageContent) {
    pickupButton.addEventListener("click", () => {
      console.log("Call picked up! Navigating to 1.html...");

      pageContent.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "1.html";
      }, 2100);
    });
  }

  if (hangupButton) {
    hangupButton.addEventListener("click", () => {
      console.log("Call hung up!");
      window.close();
    });
  }
});

if (muteButton && backgroundAudio) {
  muteButton.addEventListener("click", () => {
    backgroundAudio.muted = !backgroundAudio.muted;

    if (backgroundAudio.muted) {
      muteButton.textContent = "Unmute";
    } else {
      muteButton.textContent = "Mute";
    }
  });
}
