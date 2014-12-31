window.quest = {};

quest.user = function() {
	var name;

	return {
		setName : function(str) {
			name = str;
			return this;
		},

		getName : function() {
			return name;
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


}

window.onload = quest.start;
