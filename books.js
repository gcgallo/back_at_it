
var x = 0;
//var y = 0;
//var down = 1;
var img = [];
var w, h;
var easing = .3;
    
function setup(){
    
	createCanvas(720, 600);
	img.push(loadImage("download7.png"));
	img.push(loadImage("download6.png"));
	img.push(loadImage("download5.png"));
	img.push(loadImage("download4.png"));
	img.push(loadImage("download3.png"));
	img.push(loadImage("download2.png"));
	img.push(loadImage("download1.png"));
	w = 725;
	h = 480;
}


function draw(){
    
	if (x < 255){
		
		tint(255, 255 - x);
		
		image(img[0], 0, 0, w, h);
		
		tint(255, x);
		
		image(img[1], 0, 0, w, h);
		
		
	} 
	else if(x < 512){
		
		tint(255, 512 - x);
		
		image(img[1], 0, 0, w, h);
		
		tint(255, x - 255);
		
		image(img[2], 0, 0, w, h);
		 
		
	}
	else if(x < 767){
		
		tint(255, 767 - x);
		
		image(img[2], 0, 0, w, h);
		
		tint(255, x - 512);
		
		image(img[3], 0, 0, w, h);
		 
		
	}
	else if(x < 1024){
		
		tint(255, 1024 - x);
		
		image(img[3], 0, 0, w, h);
		
		tint(255, x - 767);
		
		image(img[4], 0, 0, w, h);
		 
		
	}
	else if(x < 1279){
		
		tint(255, 1279 - x);
		
		image(img[4], 0, 0, w, h);
		
		tint(255, x - 1024);
		
		image(img[5], 0, 0, w, h);
		 
		
	}
	else if(x < 1534){
		
		tint(255, 1534 - x);
		
		image(img[5], 0, 0, w, h);
		
		tint(255, x - 1279);
		
		image(img[6], 0, 0, w, h);
		
		
	}
	else if(x > 1534){
		x = 0;
		
	}
	
	x+=8;
	print(x);
	
}
/*
function mouseWheel(event){
	
	
	//print(event.delta);
	print(x);
	
	x += event.delta * easing;
	
	//y += event.delta;
	
	
}*/
