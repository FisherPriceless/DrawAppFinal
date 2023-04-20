function stampTool(){
    //sets an icon and a name for the object
    this.icon = "assets/stamp.jpg";
    this.name = "stampTool";

    this.draw = function(){

        if(mouseIsPressed){
            //mouth
            noStroke();
            fill(252,157,154);
            //face back
            fill(0);
            ellipse(pmouseX, pmouseY, 105, 105);
            //face
            fill(249,205,173);
            ellipse(pmouseX, pmouseY, 100, 100);
            //left eye
            fill(0);
            ellipse(pmouseX-20, pmouseY,10, 10);
            //right eye
            ellipse(pmouseX+20, pmouseY,10);
            //mouth
            fill(252,157,154);
            arc(pmouseX, pmouseY+20, 30, 30, 0, radians(180), PIE);

        }

    }

}