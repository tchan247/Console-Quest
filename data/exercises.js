quest.exercises = {
	easy : {
		0 : { 
			text : "Create a function named addTwo that adds two numbers and returns the sum:",
			generateCases : {
				bool:true,
				times:10,
				changeBy: 0
			},
			// sets of arguments
			cases : [test.generateValue(-100, 100),test.generateValue(-100, 100)],
			test : quest.test.asserts(/* custom scope. */addTwo, function().apply(this, cases[key]))
		},

		1: {
			text : "Create a function named reverse that returns a reversed version of a string input",
			generateCases : {
				bool:false,
				times:0,
				changeBy: 0
			},
			// sets of arguments
			cases : [],
			test : quest.test.asserts(/* custom scope. */reverse, function().apply(this, cases[key]))
		}
	},
	medium : {

	},
	hard : {

	}
}
