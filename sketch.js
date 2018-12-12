
var bubbles = [];
var canvas;
var h1;
var m = 40;
var n = 40;
var song;
var song2;

let words;
let worddd=[];

function preload(){
	words = loadImage('words.png');
  worddd[0]= loadImage('words1.png');
  worddd[1]= loadImage('words2.png');
  worddd[2]= loadImage('words3.png');
  worddd[3]= loadImage('words4.png');
  worddd[4]= loadImage('words5.png');
  song = loadSound('bit.mp3');
  song2 = loadSound('gameover.mp3');
}

function setup(){
	canvas = createCanvas(1280,600);
	h1 = createElement('h1','DO NOT CLICK');
  song.play();
}



function mousePressed(){
	h1.html("Well...obviously your finger is out of control!");
    createP("IT IS TIME TO SLEEP!!!IT IS TIME TO SLEEP!!!IT IS TIME TO SLEEP!IT IS TIME TO SLEEP!!!");
  let r = random(10,50);
	var b = new Bubble (mouseX,mouseY,r);
	bubbles.push(b);
  for (let i = 0; i<bubbles.length;i++){
        bubbles[i].clicked(mouseX,mouseY);
  }
  
}
	

function draw(){
  background(0);
	for (var i = 0; i<bubbles.length;i++){
		bubbles[i].move();
		bubbles[i].show();
	}
	h1.position(m,n);
	m = m+random(-3,3);
	n = n+random(-3,3);
}

class Bubble{

	constructor(x,y,r,img){
		this.x = x;
		this.y = y;
		this.r = r;
    this.word = random(worddd);

	}
  clicked(px,py){
		// let d =dist(px,py,this.x,this.y);
		// if (d<this.r){
		// 	this.word = random(worddd);
		if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.word = words; //random(kittens);
      song2.play();
    
    }
  }
    
	move(){
	this.x = this.x + random(-3,3);
	this.y = this.y + random(-2,2);
  }
	
  show(){
  	image(this.word,this.x,this.y,60,60);
    	// stroke(255);
    	// strokeWeight(4);
    	// noFill();
    	// ellipse(this.x, this.y, this.r*2);
    }
}

	




