var dog,happyDog,dogImg;
var database;
var foodS,foodStock;

function preload(){
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(1000,3000);
var dog = createSprite(500,500,150,150);
 dog.addImage(dogImg);
 dog.scale = 0.40;
  foodStock = database.ref('Food');
    foodStock.on("value",readStock);
    textSize(30);
}


function draw() {  
background("red")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  fill("black");
  stroke("black");
  text("food remaning :"+foodS,300,200);
  textSize(21);
  text("note : press up_arrow key to feed milk to tom",300,50,400,20);

}
function readStock(data){
  foodS = data.val();
  }
  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food : x,
      })
    }
