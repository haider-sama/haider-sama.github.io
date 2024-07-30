document.getElementById('year').textContent = new Date().getFullYear();
    
function getRandomNumber() {
        return Math.floor(Math.random() * 10000) + 1; // Generate a random number between 1 and 10000
}

function startPowerLevel() {
    const powerLevelDisplay = document.getElementById('power-level-display');
    const powerLevelSpan = powerLevelDisplay.querySelector('.power-level');
    const characterMessage = document.getElementById('character-message');
    const scouterSound = document.getElementById('scouter-sound');
    powerLevelDisplay.classList.remove('hidden');
    characterMessage.classList.add('hidden'); // Hide the message initially

    scouterSound.play();

     let interval = setInterval(() => {
        powerLevelSpan.textContent = getRandomNumber();
    }, 100); // Change number every 100ms

    setTimeout(() => {
        clearInterval(interval);
        scouterSound.pause(); // Stop the sound
        scouterSound.currentTime = 0; // Reset the sound
        const finalNumber = getRandomNumber();
        powerLevelSpan.textContent = finalNumber; // Set final random number

        let message = '';
        if (finalNumber < 1000) {
            message = "You're a saibaman!";
        } else if (finalNumber >= 1000 && finalNumber < 2000) {
            message = "You're Krillin!";
        } else if (finalNumber >= 2000 && finalNumber < 3000) {
            message = "You're Yamcha!";
        } else if (finalNumber >= 3000 && finalNumber < 4000) {
            message = "You're Tien!";
        } else if (finalNumber >= 4000 && finalNumber < 5000) {
            message = "You're Piccolo!";
        } else if (finalNumber >= 5000 && finalNumber < 6000) {
            message = "You're Goku!";
        } else if (finalNumber >= 6000 && finalNumber < 7000) {
            message = "You're Vegeta!";
        } else if (finalNumber >= 7000 && finalNumber < 8000) {
            message = "You're Trunks!";
        } else if (finalNumber >= 8000 && finalNumber < 9000) {
            message = "You're Gohan!";
        } else {
            message = "You're a Super Saiyan!";
        }

        characterMessage.textContent = message;
        characterMessage.classList.remove('hidden'); // Show the message
        }, 4000); // Stop after 4 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcons = menuButton.querySelectorAll('svg');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcons[0].classList.toggle('hidden'); // Show hamburger icon
      menuIcons[1].classList.toggle('hidden'); // Show close icon
    });
});


