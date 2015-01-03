// character class
quest.character = function() {
	var name,
		id,
		img,
		status,
		// dialogue
		msg = {

		}

	return function() {
		getName : function() {
			return name;
		},
		interact : function(e) {
			return msg[e];
		}

	}

}

// character instances:

