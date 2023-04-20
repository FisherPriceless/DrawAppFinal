function eraserTool(){
	//sets an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraserTool";
	

	var eraserMouseX = -1;
	var eraserMouseY = -1;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they eraserMouseX and Y are -1. set them to the current mouse x and y if they are
			if (eraserMouseX == -1){

				eraserMouseX = mouseX;
				eraserMouseY = mouseY;

			}
			//if we already have values for eraserMouseX and Y we can draw a line from there to the current mouse location
			else{

				stroke(255, 255, 255);
				strokeWeight(thickness);
				line(eraserMouseX, eraserMouseY, mouseX, mouseY);
				//uses the white colour to mimic an eraser on the canvas
				eraserMouseX = mouseX;
				eraserMouseY = mouseY;

			}

		}
		//if the user has released the mouse we want to set the eraserMouse values back to -1
		else{

			eraserMouseX = -1;
			eraserMouseY = -1;

		}

	};
	
}