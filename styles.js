// Select the drum pad with ID 'pad-5'
const pad5 = document.getElementById('pad-5');

let firstButton = pad5.children[0];
let secondButton = pad5.children[1];
let thirdButton = pad5.children[2];
let fourthButton = pad5.children[3];

const drumSound = new Audio('assets/mixkit-beautiful-dream-493.mp3');
const drumSound2 = new Audio('assets/mixkit-dirty-thinkin-989.mp3');
const drumSound3 = new Audio('assets/mixkit-driving-ambition-32.mp3');
const drumSound4 = new Audio('assets/mixkit-tech-house-vibes-130.mp3');

firstButton.addEventListener('click', () => {
  drumSound.pause();
  drumSound2.pause();
  drumSound3.pause();
  drumSound4.pause();
  drumSound.currentTime = 0; // Reset sound to start
  drumSound.play();

  setTimeout(() => {
    drumSound.pause();
    alert('audio paused');
  }, 5000);
});
secondButton.addEventListener('click', () => {
  drumSound.pause();
  drumSound2.pause();
  drumSound3.pause();
  drumSound4.pause();
  drumSound2.currentTime = 0; // Reset sound to start
  drumSound2.play();

  setTimeout(() => {
    drumSound2.pause();
    alert('audio paused');
  }, 5000);
});
thirdButton.addEventListener('click', () => {
  drumSound.pause();
  drumSound2.pause();
  drumSound3.pause();
  drumSound4.pause();
  drumSound3.currentTime = 0; // Reset sound to start
  drumSound3.play();

  setTimeout(() => {
    drumSound3.pause();
    alert('audio paused');
  }, 5000);
});
fourthButton.addEventListener('click', () => {
  drumSound.pause();
  drumSound2.pause();
  drumSound3.pause();
  drumSound4.pause();

  drumSound4.currentTime = 0; // Reset sound to start
  drumSound4.play();

  setTimeout(() => {
    drumSound4.pause();
    alert('audio paused');
  }, 5000);
});
