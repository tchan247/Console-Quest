quest.test = {
	// test if bot values/objects are equal
	asserts : function(a, b) {
		// make sure items a and b are comparable
		if(typeof a === typeof b) {
			// compare arrays
			if (Array.isArray(a) && Array.isArray(b)) {
				for(var i=0, l=a.length; i<l; i++) {
					if(a[i] !== b[i]) {
						return false;
					}
				}
				return true;
			// compare object literals
			} else if (!Array.isArray(a) && !Array.isArray(b)) {
				for(var key in a) {
					if(a[key] !== b[key])
						return false;
				}
			// compare others such as strings and numers or (array/object which is false)
			} else {
				return a === b;
			}

			return true;
		}
		return false;
	},
	// test if difference of both values are within the tolerance range
	approx : function(a, b, tol) {
		
		if(typeof a === "number" && typeof b === "number") {
			if(tol === undefined || typeof tol !== "number") {
				tol = 0;
			} else {
				if(tol < 0) tol *= -1;
			}

			return Math.abs(a - b) < tol;
		}

		return false
	},
	// generate random test case
	generateCase : function (n, fn) {
		var inp = Math.random * n;
		var ans = fn(inp)

		return [inp, ans];
	}

}
