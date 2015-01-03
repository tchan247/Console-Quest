quest.story = {

}

// generate next chapter or skip to chapter n
quest.storyGenerator = (function() {
	var chapter = 0;

	return function(n) {

		chapter++;

		n = n === undefined? chapter; || n;

		if(quest.story[n] !== undefined) {
			return quest.story[n];
		}

		throw new Error("Chapter not found.");
	}
})()
