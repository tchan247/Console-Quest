
window.quest = {};

quest.user = function() {
	var name;
	var score;

	return {
		setName : function(str) {
			name = str;
			return this;
		},

		getInfo : function() {
			return {
				this.name : name,
				this.score : score,
			}
		}
	}
}()

quest.start = function() {

	//will have to use prompt method for now until console fully becomes UI
	var user = quest.user;
	var name = prompt("Please enter your name:");

	// default name
	if(name === "" || name === null) {
		name =  "The-one-who-shall-not-be-named";
	}

	user.setName(name);

	console.log("Hello " + user.getName());

	// user settings pseudocode
	var settings = function() {

		// difficulty
		
		// topic

		// return object containing all settings
		return {};
	}
	settings();

	// start adventure with given settings
	quest.adventure(settings);
}

window.onload = quest.start;
