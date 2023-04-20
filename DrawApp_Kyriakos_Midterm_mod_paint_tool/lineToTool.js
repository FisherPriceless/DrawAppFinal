function LineToTool(){
	//sets an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        //starts drawing the line from point where mouseX & mouseY is pressed
		if(mouseIsPressed){

			if(startMouseX == -1){

				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();

			}
            //ends the line on the screen
			else{

				updatePixels();
				stroke(colorPicker);
				strokeWeight(thickness);
				line(startMouseX, startMouseY, mouseX, mouseY);

			}

		}
        //restarts the line tool creating a new line
		else if(drawing){

			drawing = false;
			startMouseX = -1;
			startMouseY = -1;

		}

	};
	
}
