 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles=[];
var plinkos= [];
var divisions=[];
var divisionHeight=300;
var score=0;
var count=0;
function setup() {
  createCanvas(820,800);

 engine = Engine.create();
 world= engine.world;
 ground= new Ground(400,800,width,20);



for(var k=0; k <=width; k = k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight))
}

for(var j= 75; j <=width; j=j+50)
{

  plinkos.push(new Plinko(j,75));
}
for(var j = 50; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for(var j = 75; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for(var j = 50; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}
}



function draw() {
  background("black");  
  textSize(20)
  text("Score: " +score,35,45)
  text("100 ",25,515)
  text("100 ",105,515)
  text("100 ",185,515)
  text("100 ",265,515)
  text("200 ",345,515)
  text("200 ",425,515)
  text("500 ",505,515)
  text("500 ",585,515)
  text("500 ",665,515)
  text("500 ",745,515)
  Engine.update(engine);
  ground.display();

  for(var i= 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(300,600), 10,10));
   
  }
  for(var j= 0; j< particles.length;j++) {
    particles[j].display();
  }
  for(var k= 0; k< divisions.length;k++){
    divisions[k].display();
  }
  
}
if(particles!=null)
{
  particles.display();
  if(particles.body.position.y>760)
  {
    if(particles.body.position.x>100&&particles.body.position.x<760){
      score = score+100;
      particles =null;
    }
  }
}