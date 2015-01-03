quest.adventure = function() {
	var key;

	// program interval
	if(typeof programLoop !== "undefined") clearInterval(programLoop);
	programLoop = setInterval(runAdventure, 25);

	// program loop
	function runAdventure() {

		if(key !== undefined) {
			quest.keyTable[key]();
			key = undefined;
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
