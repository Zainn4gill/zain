// Smooth Scroll to Games Section
function scrollToGames() {
    document.getElementById("games").scrollIntoView({ behavior: 'smooth' });
}

// Game Launch Logic
function launchGame(gameId) {
    alert(`Launching ${gameId}...`);
    // Here you can load the actual game by redirecting to a new page or dynamically loading content
}

// Optional: Dynamic Game Loading
document.addEventListener("DOMContentLoaded", function() {
    // Add any game loading logic here
});

