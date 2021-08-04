let badCorona = [];
let blackfungus = [];
let vaccine;
let img;
let robo;
let button;
var number;
let canvasW, canvasH;
let test=false;
let test2=false;
let r = (128);
let s;
let d = 0;

function preload(){
  corona = loadImage("corona.png");
  black = loadImage("blackFungus.png");
  vac = loadImage("vaccine.png");
  rovo = loadFont("roboto-bold.tff");
}

function setup() {

  reddish = createElement('body', '# of Corona');
  reddish.position(windowWidth/35, 265);
  redSlide = createSlider(25,150);
  redSlide.position(windowWidth/35, 300);

  blackish = createElement('body', '# of Black Fungus');
  blackish.position(windowWidth/35, 200);
  blackSlide = createSlider(25,150);
  blackSlide.position(windowWidth/35, 235);  
  let canvasW = (windowWidth*(4/6));
  let canvasH = (windowHeight*(4/6));

  button = createButton('start');
  button.position(windowWidth/35, 335);
  button.mousePressed(run);
  var cnv = createCanvas(canvasW,canvasH, WEBGL);
  cnv.position(windowWidth/6, 200);
  textFont(rovo);
  textSize(width/10);
  fill(255);
  textAlign(CENTER, CENTER);


}
function run(){
  test = false;
  test2 = false;
  blackfungus = [];
  badCorona = [];
  ix = (random(width));
  iy = (random(height));
  ir = random(40, 17);
  const r = redSlide.value();
  const b = blackSlide.value();
  vaccine = new Vaccine();
  for(let i = 0; i<r; i++){
    badCorona.push(new Corona());
  }

  for(let i = 0; i<b ; i++){
    blackfungus.push(new Blackfungus());
  }
}
function draw() {
  background(r);  
  translate(-width/2, -height/2);
  if(blackfungus.length<0){
    test2 === false;
  }

  for(var i = badCorona.length-1; i>=0 ; i--){
    badCorona[i].display();
    badCorona[i].move();
    if(vaccine.intersect(badCorona[i])){
      badCorona.splice(i,1);
    }
    vaccine.display();
    vaccine.move();
  }

  for(var i = blackfungus.length-1; i>=0; i--){
    blackfungus[i].display();
    blackfungus[i].move();
    if(vaccine.intersect(blackfungus[i])){
      test = true;
    }

    if(test === true){
    
      background(183,11,11) && text('YOU LOSE', windowWidth/3, windowHeight/3);
      
     /* textSize(25);
      stroke("yellow");
      strokeWeight(5);
      fill("white");*/
      
      
    }

    if(test2 === false && badCorona.length<=0){
      background(0,0,255) && ('YOU WIN', 400, 200);
      
    }

  }
  drawSprites();
}