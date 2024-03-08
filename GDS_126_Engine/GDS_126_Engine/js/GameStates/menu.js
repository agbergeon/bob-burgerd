/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/start.png"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/menu.jpg"
menuBackground.width=600;
menuBackground.height=200;
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.width=500;
	}
	else
	{
		//Default Button Graphic
		startButton.width=200;
		startButton.img.src="images/start.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
