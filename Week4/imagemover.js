// event listener for reference of html
document.addEventListener('DOMContentLoaded', function() {
  //references of image and buttons
    const movingImage = document.getElementById('movingImage');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
  
    let animationInterval;
  //function for where image is stored and how much to move image 
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
  //event listener for the buttons in html 
    startButton.addEventListener('click', moveImage);
    stopButton.addEventListener('click', stopImage);
  });
  

