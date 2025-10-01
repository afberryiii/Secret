document.title = "A Sinful Nightmare - Title Screen";

// === GAME EXIT FUNCTION ===
// This function simulates closing the application gracefully by fading to a final screen.
const handleGameExit = () => {
  const pageContent = document.getElementById("pageContent");
  const finalExitScreen = document.getElementById("finalExitScreen");
  const backgroundAudio = document.getElementById("creepyAudio");

  // 1. Stop audio
  if (backgroundAudio) {
    backgroundAudio.pause();
    backgroundAudio.muted = true;
  }

  // 2. Hide the main page content
  pageContent.style.display = "none";

  // 3. Show the final exit screen with a smooth fade in
  finalExitScreen.style.display = "flex";
  finalExitScreen.classList.add("fade-in-start");
  document.body.style.backgroundColor = "#000"; // Ensure background is black
  console.log("Game session gracefully ended.");
};

document.addEventListener("DOMContentLoaded", () => {
  // === DOM ELEMENTS ===
  const backgroundAudio = document.getElementById("creepyAudio");
  const soundToggleButton = document.getElementById("unmuteButton");
  const pickupButton = document.getElementById("pickupButton");
  const hangupButton = document.getElementById("hangupButton");
  const pageContent = document.getElementById("pageContent");

  // Helper function to toggle the sound state and button appearance
  const toggleSound = () => {
    if (!backgroundAudio || !soundToggleButton) return;

    if (backgroundAudio.muted) {
      // UNMUTING
      backgroundAudio.muted = false;
      backgroundAudio.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });

      // Update button to show MUTE state
      soundToggleButton.innerHTML = "Mute Sound 🔇";
      soundToggleButton.classList.add("text-green-400");
      soundToggleButton.classList.remove("text-red-400");
      console.log("Sound Unmuted");
    } else {
      // MUTING
      backgroundAudio.muted = true;
      backgroundAudio.pause(); // Also pause when muted

      // Update button to show UNMUTE state
      soundToggleButton.innerHTML = "Unmute Sound 🔊";
      soundToggleButton.classList.add("text-red-400");
      soundToggleButton.classList.remove("text-green-400");
      console.log("Sound Muted");
    }
  };

  // === EVENT LISTENERS ===

  // 1. Sound Toggle Listener
  if (soundToggleButton && backgroundAudio) {
    // Initialize button appearance
    soundToggleButton.classList.add("text-red-400");
    soundToggleButton.addEventListener("click", toggleSound);
  }

  // 2. Pickup Button Listener (Navigates to next page)
  if (pickupButton && pageContent) {
    pickupButton.addEventListener("click", () => {
      console.log("Call picked up! Navigating to 1.html...");

      // Ensure sound is playing before transition
      if (backgroundAudio && backgroundAudio.muted) {
        backgroundAudio.muted = false;
        backgroundAudio
          .play()
          .catch((e) => console.log("Failed to play audio on pickup."));
      }

      // Start the fade-out animation
      pageContent.classList.add("fade-out");

      // Navigate to the next page after the animation duration (2.1s)
      setTimeout(() => {
        window.location.href = "../Prologue/1.html";
      }, 2100);
    });
  }

  // 3. Hangup Button Listener (Custom Modal)
  if (hangupButton) {
    hangupButton.addEventListener("click", () => {
      console.log("Call hung up! Displaying exit message.");

      // Show the final exit screen
      const finalExitScreen = document.getElementById("finalExitScreen");
      if (finalExitScreen) {
        finalExitScreen.style.display = "flex";
      }

      // Start the fade-out animation
      pageContent.classList.add("fade-out");

      // After a delay, call the exit handler to ensure graceful exit
      setTimeout(handleGameExit, 2000);
    });
  }
});
