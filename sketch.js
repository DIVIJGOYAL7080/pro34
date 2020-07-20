//Create variables here
var hdog,hdog1,dog1,database,Food,foodstock;
function preload()
{
  //load images here
  hdog1=loadImage("Happy.png");
  dog1=loadImage("Dog.png");
}

function setup() {
 database=firebase.database();
  createCanvas(800, 700);
  hdog=createSprite(400,450,30,30)
  hdog.scale=0.3;
  hdog.addAnimation("img1",dog1)
  hdog.addAnimation("img",hdog1)
  
  foodstock=database.ref('food')
  foodstock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown("UP_ARROW")){
    writeStock(Food);
    hdog.changeAnimation("img",hdog1)
    
    
    
    
    }
  drawSprites();
  //add styles here
  textSize(20);
  fill("red")
  text("press UP_ARROW to feed the dog",10,100)
}


function readStock(data){

Food=data.val();









}
function writeStock(x){
if(x<=0){
x=0


}else{

x=x-1;



}
database.ref('/').update({







food:x









});







}









