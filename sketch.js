var car1, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(1000,500);

  car1 = createSprite(250,250,50,50);
  car1.shapeColor = "red";
  car2 = createSprite(500,250,50,50);
  car2.shapeColor = "green";


  var car1Position = database.ref('ball/position');
  car1Position.on("value", readPosition, showError);


  resetbutton=new form()
  resetbutton.reset()
}

function draw(){
  background("white");
  
   
    if (keyDown("w")){
      writePosition1(0,-1);
    }
    if (keyDown("e")){
      writePosition2(0,-1);
    }
    
    drawSprites();
  
}

function writePosition1(x,y){
  database.ref('ball/position').update({ 
    'x1': position.x1+ x , 
    'y1': position.y1 + y 
  })
}

function writePosition2(x,y){
  database.ref('ball/position').update({ 
    'x2': position.x2+ x , 
    'y2': position.y2 + y 
  })
}

function readPosition(data){
  position = data.val();
  car1.x = position.x1;
  car1.y = position.y1;
  car2.x = position.x2;
  car2.y = position.y2;
}

function showError(){
  console.log("Error in writing to the database");
}
