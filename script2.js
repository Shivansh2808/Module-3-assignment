(function(window) {
	var sayHello = "Hello";
	var helloSpeaker = function (name) {
		console.log(sayHello + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);