const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var earth,earth_animation;
var moon;
var i=0;

var db1_obj=[];
var db2_obj=[];
var db3_obj=[];
var db4_obj=[];
var db5_obj=[];
function preload()
{
   bg=loadImage("universe.jpg");
   astImg=loadImage("inew.png");
   dbi1=loadImage("pics/db1.png");
  dbi2=loadImage("pics/db2.png");
  dbi3=loadImage("pics/db3.png");
  dbi4=loadImage("pics/db4.png");
  dbi5=loadImage("pics/db5.png");
   //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world=engine.world;
    gif_createImg.position(250, 50);
    moon=createSprite(800,50,25,25);
    moon.addImage("ass", astImg)
    moon.scale=0.7;
    moon.velocityX=-2;

    moon.velocityY=1;
  
            
}

function draw(){
    background(bg);
    Engine.update(engine);

   
  
spawnDebris();
for (var j=0;j<db1_obj.length;j++){
    db1_obj[j].display();
}
for (var j=0;j<db2_obj.length;j++){
  db2_obj[j].display();

}
for (var j=0;j<db3_obj.length;j++){
  db3_obj[j].display();
}
for (var j=0;j<db4_obj.length;j++){
  db4_obj[j].display();
}
for (var j=0;j<db5_obj.length;j++){
  db5_obj[j].display();
}
    drawSprites();
    
}




function spawndebris() {
  if(frameCount % 60 === 0) {
    var debris = createSprite(displayWidth-20,300);
    
        var rand = Math.round(random(1,5));
        debris.x=random(0,400);
         debris.velocityY=random(-3,3);
           debris.velocityX=random(-3,3);
             debris.y=random(0,400);
   switch(rand){
case 1:
  debris.addImage(dbi1);
  break;
  case 2:
  debris.addImage(dbi2);
  break;
  case 3:
  debris.addImage(dbi3);
  break;
  case 4:
  debris.addImage(dbi4);
  break;
  case 5:
  debris.addImage(dbi5);
  break;
  

   }
    debris.scale = 0.5;
    debris.lifetime = 570;
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
    
    
  }
  function spawnDebris()
  {

   
    if(frameCount % 50 === 0) {
       //console.log("hello");
       var rand = Math.round(random(1,5));
       switch(rand){
       case 1:
       db1_obj.push(new db1(random(100,1200),random(100,800)));
       break;
       case 2:
       db2_obj.push(new db2(random(100,1200),random(100,800)));
       break;
       case 3:
       db3_obj.push(new db3(random(100,1200),random(100,800)));
       break;
       case 4:
       db4_obj.push(new db4(random(100,1200),random(100,800)));
       break;
       case 5:
       db5_obj.push(new db5(random(100,1200),random(100,800)));
       break;
       }

    }
    
     
       
      

  }