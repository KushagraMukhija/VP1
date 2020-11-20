//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  
  //load images here
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  dogSprite = createSprite(250,250)
  dogSprite.addImage("dogSprite",dog)
  dogSprite.scale = 0.15
  foodStock=database.ref('Food')                                        
 foodStock.on("value",readStock)
  
}


function draw() {  
 background("cyan")
 if(keyWentDown("UP_ARROW")){
   writeStock(foodS)
   dogSprite.addImage("dogSprite",happyDog)
 }
  drawSprites();
 // After drawSprites() write the text to print foodStock from the database.
//Use textSize to increase the size of the text, fill() to set text color and stroke() to outline the text.
//(You can add one more text in draw() to show as an instruction on Canvas)
  //add styles here
  text("PRESS UP ARROW TO FEED THE DOG",0,450)
}
  function readStock(data){
    foodS=data.val()
  }

  function writeStock(x){
    if(x<=0){
      x=0
    }
    else{
      x=x-1
    }
    database.ref('/').update({
      Food:x
    })

  }




