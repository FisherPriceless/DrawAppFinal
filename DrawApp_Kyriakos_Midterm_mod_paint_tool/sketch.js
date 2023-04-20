//variables for the toolbox, helper functions & thickness selector
var toolbox = null;
var helpers = null;
var thickness = 20;
//variable for the color picker tool
var colorPicker = 'black';
//variables for the photo uploader
var input;
var img;
//variables for the scissor tool
var selectButton;
var selectMode;
var selectedArea;
var selectedPixels;


function setup(){
	//scissor tool
	selectMode = 0;
	selectedArea = {x: 0, y: 0, w: 100, h: 100};
	//creates input button for scissor tool
	selectButton = createButton('Select Area');
	selectButton.position(1250,9);
	//scissor tool
	selectButton.mousePressed(function(){

		if(selectMode == 0){

			selectMode += 1;
			selectButton.html('Cut');
			loadPixels(); //stores current frame

		}
		else if(selectMode == 1){

			selectMode += 1;
			selectButton.html('Paste');
			//refresh screen
			updatePixels();
			//store drawing
			selectedPixels = get(selectedArea.x, selectedArea.y,
									selectedArea.w, selectedArea.h);
			//draw rectangle over it
			fill(255);
			noStroke();
			rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);

		}
		else if(selectMode == 2){

			selectMode = 0;
			loadPixels();
			selectedArea = {x: 0, y: 0, w: 100, h: 100};
			selectButton.html('Select Area');

		}

	});

	//creates input button to receive user's file
	input = createFileInput(handleFile);
	input.position(1340,9);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new sprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    //adds the circle tool to the toolbox
	toolbox.addTool(new circleTool());
	//adds the eraser tool to the toolbox
    toolbox.addTool(new eraserTool());
	background(255);
	//adds the stamp tool to the toolbox
	toolbox.addTool(new stampTool());

}

function draw(){
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if(selectMode == 0){

		if (toolbox.selectedTool.hasOwnProperty("draw")){

			toolbox.selectedTool.draw();

		}
		else{

			stroke(0);
			noFill();
			alert("it doesn't look like your tool has a draw method!");

		}
		//places the image on the canvas with the given size/location
		if (img){

			image(img, canvasContainer.size().width/4, canvasContainer.size().height/4,
					canvasContainer.size().width/2, canvasContainer.size().height/2);

			}

	}
	else if(selectMode == 1){

		updatePixels();
		noStroke();
		fill(0, 0, 255, 100);
		rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);

	}
}
//scissor tool
function mousePressed(){

	if(selectMode == 1){

		selectedArea.x = mouseX;
		selectedArea.y = mouseY;
	}
	else if(selectMode == 2){
		image(selectedPixels, mouseX, mouseY);

	}

}
//scissor tool
function mouseDragged(){

	if(selectMode == 1){

		var w = mouseX - selectedArea.x;
		var h = mouseY - selectedArea.y;

		selectedArea.w = w;
		selectedArea.h = h;

	}

}

//image uploader: checks to see if the file is an image file type
function handleFile(file){

	print(file);
	if (file.type === 'image'){

	  img = createImg(file.data, '');
	  img.hide();

	}
	else{

	  img = null;

	}
	
}