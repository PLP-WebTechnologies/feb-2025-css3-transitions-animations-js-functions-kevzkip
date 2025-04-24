// Check if there's a stored user preference in localStorage
window.onload = () => {
    const box = document.getElementById("animatedBox");
    const savedState = localStorage.getItem("boxState");

    // If the user has a saved preference, apply it
    if (savedState === "rotated") {
        box.classList.add("animated");
    }
};

// Function to handle button click and trigger animation
document.getElementById("animateBtn").addEventListener("click", () => {
    const box = document.getElementById("animatedBox");
    
    // Toggle animation on button click
    box.classList.toggle("animated");

    // Store the state in localStorage
    if (box.classList.contains("animated")) {
        localStorage.setItem("boxState", "rotated");
    } else {
        localStorage.removeItem("boxState");
    }
});
