/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:65, height:120, startX:0, startY:0},
				{width:65, height:120, startX:66, startY:0},
				{width:65, height:120, startX:132, startY:0},
				{width:65, height:120, startX:198, startY:0},
				{width:65, height:120, startX:264, startY:0}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:69, height:120, startX:340, startY:0},
				{width:69, height:120, startX:414, startY:0},
				{width:69, height:120, startX:485, startY:0},
				{width:69, height:120, startX:627, startY:0},
				{width:69, height:120, startX:698, startY:0},
				{width:69, height:120, startX:769, startY:0},
				{width:69, height:120, startX:840, startY:0},
				{width:69, height:120, startX:911, startY:0},
				{width:69, height:120, startX:627, startY:0},
				{width:69, height:120, startX:485, startY:0},
				{width:69, height:120, startX:414, startY:0},
				{width:69, height:120, startX:340, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:3,
			cycle:false,
			frames:
			[
				{width:67, height:120, startX:2823, startY:0},
				{width:67, height:120, startX:2892, startY:0},
				{width:67, height:120, startX:2961, startY:0},
				{width:67, height:120, startX:3030, startY:0},
				{width:67, height:120, startX:3099, startY:0},
				{width:67, height:120, startX:3306, startY:0},
				{width:67, height:120, startX:2961, startY:0},
				{width:67, height:120, startX:2892, startY:0},
				{width:67, height:120, startX:2823, startY:0},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:10,
			cycle:true,
			frames:
			[
				{width:67, height:120, startX:1266, startY:0},
				{width:67, height:120, startX:1404, startY:0},
				{width:67, height:120, startX:1473, startY:0},
				{width:67, height:120, startX:1542, startY:0},
				{width:67, height:120, startX:1611, startY:0},
				{width:67, height:120, startX:1680, startY:0},
				{width:67, height:120, startX:1749, startY:0},
				{width:67, height:120, startX:1818, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:2,
			cycle:false,
			//width:300,
			frames:
			[
				{width:67, height:120, startX:1956, startY:0},
				{width:74, height:120, startX:2025, startY:0},
				{width:75, height:120, startX:2102, startY:0},
				{width:76, height:120, startX:2178, startY:0},
				{width:82, height:120, startX:2256, startY:0},
				{width:82, height:120, startX:2340, startY:0},
				{width:82, height:120, startX:2424, startY:0},
				{width:76, height:120, startX:2178, startY:0},
				{width:75, height:120, startX:2102, startY:0},
				{width:74, height:120, startX:2025, startY:0},
				{width:67, height:120, startX:1956, startY:0}
				
			]
		}
	}
		
}