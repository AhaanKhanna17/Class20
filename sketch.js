var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(600,400,50,80)
 fixedrect.shapeColor="red"
 movingrect=createSprite(400,200,80,30)
 movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY 
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.heigth/2+movingrect.heigth/2 &&
    movingrect.y-fixedrect.y<movingrect.heigth/2+fixedrect.heigth/2
    ){
  fixedrect.shapeColor="yellow"
  movingrect.shapeColor="yellow"
  }
  else{
  fixedrect.shapColor="red"
  movingrect.shapeClor="red"
  }
  drawSprites();
}