canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["image_1.jpg","image_2.jpeg", "image_3.jpg","image_4.jpg"];
 random_number = Math.floor(Math.random() * 4);
 console.log(random_number);

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";

background_image =nasa_mars_images_array[random_number];

function add() {
    background_imgTag = new Image();//defining a variable with new image
    background_imgTag.onload = uploadBackground;//setting a function,onloading this variable
    background_imgTag.src = background_image;//loading the image

    rover_imgTag = new Image();//defining a variable with new image
    rover_imgTag.onload = uploadRover;//setting a function,onloading this variable
    rover_imgTag.src = rover_image;//loading the image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
        console.log("You have pressed Left arrow");
    }

    if (keyPressed == "38") {
        up();
        console.log("You have pressed up arrow");
    }

    if (keyPressed == "39") {
        right();
        console.log("You have pressed right arrow");
    }

    if (keyPressed == "40") {
        down();
        console.log("You have pressed down arrow");
    }
}
function up() {
    if (rover_y >= 0) 
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (rover_y <= 500) 
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x >= 0) 
    {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) 
    {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}