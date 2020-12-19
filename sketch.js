//Create variables here
var dog, happyDog, database, foodS,dogImg, foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog =createSprite(250,320,70,70);
  dog.scale=0.5;
  dog.addImage(dogImg);
foodStock=database.ref('food');
foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))  {
  writeStock(foodS);
  dog.addImage(happyDog);

}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
text("press up arrow to feed drago milk", 20,30);
text("food: "+foodS,200,100);
}

function readStock(data) {
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

