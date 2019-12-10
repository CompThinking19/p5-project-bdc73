function setup() {
  bg = loadImage('lover house.jpeg');
  createCanvas(1200, 736);
  function preload() {
    //the background the program should be a picture of the house featured in the "Lover" music video
  soundFormats('mp3');
  mySound = loadSound('lover.mp3');
  // this should play the song "Lover" when the user clicks on the page
}
//This program was based on Taylor Swift's music video for Lover and should be used to create a more interactive experience with the video. The video takes place inside of a snowglobe, so this program shows the house from the video with snow falling around it. When the user clicks on the page it plays the song "Lover".
function setup() {
  mySound.setVolume(0.3);
  mySound.play();
}
}
function snowflake() {
//this function creates the falling snow effect
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);


  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);


    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
