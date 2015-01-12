quest.adventure = function(settings) {
	var key,
		excercises = quest.excercises,
		excerciseCount = Object.Keys(excercises[settings.difficulty]).length;
		excercise = null,	// current excercise
		errors = 0,
		user  = quest.user;


	// program loop interval
	if(typeof programLoop !== "undefined") clearInterval(programLoop);
	programLoop = setInterval(runAdventure, 25);

	// Main program loop
	function runAdventure() {

		if(key !== undefined) {
			quest.keyTable[key]();
			key = undefined;
		}
		
		// get new random excercise
		if(excercise === null) {
			excercise = excercises[settings.difficulty][Math.floor(Math.random() * excerciseCount)];
		}

		// if excercise passed
		if (excercise.test) {	
			excercise = null;
		} else if (!excercise.test) {
			errors++;
			// try again
		}

		if(errors > 2) {
			// next problem
			excercise = null;
		}

	}

	window.addEventListener('keydown',function(e) {
		e = e || window.e;
		var keyNum = e.which;
		if(quest.keyTable) {
			key = keyNum;
		}

	})

}

// lookup table for keyboard events
quest.keyTable = {
	// enter
	13 : function() {

	},
	// space
	32 : function() {
		console.log("space");
	},
	// arrow left
	37 : function() {

	},
	// arrow up
	38 : function() {

	},
	// arrow right
	39 : function() {

	},
	// arrow down
	40 : function() {

	},
	// a
	65 : function() {

	},
	// d
	68 : function() {

	},
	// s
	83 : function() {

	},
	// w
	87: function() {

	}
}




