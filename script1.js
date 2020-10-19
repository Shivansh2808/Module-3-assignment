(function(window) {
	var sayGoodbye = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(sayGoodbye + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);