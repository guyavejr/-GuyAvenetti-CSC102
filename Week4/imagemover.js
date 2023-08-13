document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('movingImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
  
    let animationInterval;
  
    function moveImage() {
      let x = -700;
      let y = -800;
  
      animationInterval = setInterval(() => {
        x += 7;
        y += 7;
        movingImage.style.left = x + 'px';
        movingImage.style.top = y + 'px';
      }, 50);
    }
  
    function stopImage() {
      clearInterval(animationInterval);
    }
  
    startButton.addEventListener('click', moveImage);
    stopButton.addEventListener('click', stopImage);
  });
  

