var cat, cat_running, cat_collided, mouse,mouse_collided, mouse_dancing, backImg, mouse_happy, cat_sitting;
function preload() {
cat_running = loadAnimation("images/cat2.png","images/cat3.png")
cat_collided = loadAnimation("images/cat4.png")
cat_sitting = loadImage("images/cat1.png")
mouse_happy = loadImage("images/mouse1.png")
mouse_dancing = loadAnimation("images/mouse2.png", "images/mouse3.png")
mouse_collided = loadAnimation("images/mouse4.png")
backImg = loadImage("images/garden.png")

    //load the images here

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addImage("cat_sitting",cat_sitting);
cat.scale = 0.2

mouse = createSprite(200,600)
mouse.addImage("mouse_happy", mouse_happy);
mouse.scale = 0.15
}
function draw() {
background(backImg)
 //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x < (cat.width-mouse.width)/2){
 cat.addAnimation("cat_collided", cat_collided);
 cat.changeAnimation("cat_collided");
 cat.velocityX = 0;
 mouse.addAnimation("mouse_collided", mouse_collided);
 mouse.changeAnimation("mouse_collided");
 }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(("leftArrow")){
mouse.addAnimation("mouse_dancing", mouse_dancing)
mouse.changeAnimation("mouse_dancing")
cat.addAnimation("cat_running", cat_running)
cat.changeAnimation("cat_running")
cat.velocityX = -5
}
}
