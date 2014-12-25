window.quest = {};

quest.start = function() {

	console.log("Please enter your name:")
	// var name = prompt();

	// console.log(window.console.valueOf())

	alert(window.console.valueOf().toString());
}

window.onload = quest.start;
