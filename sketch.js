var car1,car2,car3,car4,wall1,wall2,wall3,speeeeeeeeeeed,speed3,speed2,speed4,weight,weight2,weight3,weight4
trgt1,trgt2,trgt3,trgt4;
function setup() {
  createCanvas(400,400);
  speeeeeeeeeeed=Math.round(random(55,90));
  speed2=Math.round(random(55,90));
  speed3=Math.round(random(55,90));
  speed4=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  weight2=Math.round(random(400,1500));
  weight3=Math.round(random(400,1500));
  weight4=Math.round(random(400,1500));
    wall1=createSprite(200,100,400,10);
  wall1.shapeColor=(80,80,80);
  wall2=createSprite(200,200,400,10);
  wall2.shapeColor=(80,80,80);
  wall3=createSprite(200,300,400,10);
  wall3.shapeColor=(80,80,80);
  trgt1=createSprite(365,46,35,55);
  trgt2=createSprite(365,150,35,55);
  trgt3=createSprite(365,250,35,55);
  trgt4=createSprite(365,350,35,55);

  car1=createSprite(50,350,40,17)
  car1.velocityX=speeeeeeeeeeed;
  car1.weight=weight;

  car2=createSprite(50,250,40,17);
  car2.weight=weight4;
  car2.velocityX=speed3;

  car3=createSprite(50,150,40,17);
  car3.velocityX=speed4;
  car3.weight=weight2;

  car4=createSprite(50,50,40,17);
  car4.velocityX=speed2;
  car4.weight=weight3;
 
  }

function draw() {
  background(0); 
  car4.collide(trgt1);
  car3.collide(trgt2);
  car2.collide(trgt3);
  car1.collide(trgt4);
  if (trgt1.x-car4.x < (car4.width+trgt1.width)){
        car4.velocityX=0;
    var deformation=0.5*weight3*speed2*speed3/22509;
    if (deformation>180){
      car4.shapeColor=color(255,0,0);
      }else if (deformation<180 && deformation>100){
        car4.shapeColor=color(230,230,0);
      } else if (deformation<100){
        car4.shapeColor=color(0,255,0);
      }
  }
  if (trgt3.x-car2.x < (car2.width+trgt3.width)){
    car2.velocityX=0;
    var deformation=0.5*weight4*speed3*speed3/22509;
    if (deformation>180){
      car2.shapeColor=color(255,0,0);
      }else if (deformation<180 && deformation>100){
        car2.shapeColor=color(230,230,0);
      } else if (deformation<100){
        car2.shapeColor=color(0,255,0);
      }
  }
  if (trgt2.x-car3.x < (car3.width+trgt2.width)){
    car3.velocityX=0;
    var deformation=0.5*weight2*speed4*speed4/22509;
    if (deformation>180){
      car3.shapeColor=color(255,0,0);
      }else if (deformation<180 && deformation>100){
        car3.shapeColor=color(230,230,0);
      } else if (deformation<100){
        car3.shapeColor=color(0,255,0);
      }
  }
  if (trgt4.x-car1.x < (car1.width+trgt4.width)){
    car1.velocityX=0;
    var deformation=0.5*weight*speeeeeeeeeeed*speeeeeeeeeeed/22509;
    if (deformation>180){
      car1.shapeColor=color(255,0,0);
      }else if (deformation<180 && deformation>100){
        car1.shapeColor=color(230,230,0);
      } else if (deformation<100){
        car1.shapeColor=color(0,255,0);
      }
  }
  drawSprites();
}