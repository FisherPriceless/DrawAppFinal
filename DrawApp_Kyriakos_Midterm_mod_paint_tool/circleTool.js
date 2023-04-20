function circleTool(){
	//sets an icon and a name for the object
	this.name = "CircleTool";
    this.icon = "assets/circle.jpg";

    var lastMouseX = -1;
	var lastMouseY = -1;
    var drawing = false;
    var biggerCircle = 50;
    
	this.draw = function(){
        //starts drawing the circle from point where mouseX & mouseY are pressed
		if(mouseIsPressed){

			if(lastMouseX == -1){
				lastMouseX = mouseX;
				lastMouseY = mouseY;
				drawing = true;
				loadPixels();
				
			}
            else{

				updatePixels();
				noStroke();
				fill(colorPicker);
				ellipse(mouseX, mouseY, biggerCircle, biggerCircle);

			}

		}
         //restarts the circle tool creating a new circle
		else if(drawing){

			drawing = false;
			lastMouseX = -1;
			lastMouseY = -1;

		}

	};
    //allows the user to make larger & smaller circles using up and down arrows
    document.addEventListener("keyup", function(event){

        if (event.keyCode === 38){

            biggerCircle += 50;

        }
        else if (event.keyCode === 40){

            biggerCircle -= 50;

        }

    });

}