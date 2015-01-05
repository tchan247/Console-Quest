quest.test = {
	asserts : function(a, b) {
		if(typeof a === typeof b) {

			if (Array.isArray(a) && Array.isArray(b)) {
				for(var i=0, l=a.length; i<l; i++) {
					if(a[i] !== b[i]) {
						return false;
					}
				}
				return true;
			} else if (!Array.isArray(a) && !Array.isArray(b)) {
				for(var key in a) {
					if(a[key] !== b[key])
						return false;
				}
			} else {
				return a === b;
			}
		}
		return false;
	},
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
	}
}
