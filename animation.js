const box = document.getElementById('box');
const controlButton = document.getElementById('controlButton');
let isMoving = false;

controlButton.addEventListener('click', function() {
  if (!isMoving) {
    box.style.transform = 'translateX(400px)';
    isMoving = true;
    controlButton.textContent = 'Reset';
  } else {
    box.style.transform = 'translateX(0)';
    isMoving = false;
    controlButton.textContent = 'Move';
  }
});
