function setup() {
	createCanvas(windowWidth, windowHeight);
	}

function draw() {

	background(0);
	noFill();
	stroke(50,255);
    circle(width/2,height /2,height/3);
	circle(width/2-height/3/4, height/2-height/18, height/12);
	circle(width/2+height/3/4, height/2-height/18, height/12);
	ellipse(750,670, 200, 350);
	ellipse(450,600,420,52)
	ellipse(1040,600,400,52)

}