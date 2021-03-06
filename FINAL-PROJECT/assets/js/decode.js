document.getElementById("decodeButton").addEventListener("click",
	function() {
		var text = document.getElementById("pikalang").value;

		text = decode(text)

		console.log(text); 
		//console logs all pikalang to brainfreak code even when the brainfreak code doesn't necessarily render any text

		document.getElementById("out").innerHTML = brainfreakOutput(text);
	});

function decode(input) {
	pikaMap = new Map();
	pikaMap.set("pipi", ">");
	pikaMap.set("pichu", "<");
	pikaMap.set("pi", "+");
	pikaMap.set("ka", "-");
	pikaMap.set("pikachu", ".");
	pikaMap.set("pikapi", ",");
	pikaMap.set("pika", "[");
	pikaMap.set("chu", "]");
	input = input.replace(/\n|\r/g, " ");
	input = input.split(" ")
	var brainfreak = "";
	for (var i = 0; i < input.length; i++) {
		if (input[i] == "") continue;
		input[i] = input[i].toLowerCase();
		if (pikaMap.get(input[i]) == undefined) return "Could not convert Pikalang.";
		brainfreak += pikaMap.get(input[i]);
	}

	return brainfreak;
}

'use strict';

var getInput = function() {
	// TODO: input
	return 0;
};

var brainfreakOutput = function(code) {
	const MemorySize = 3000;
	var result = '';
	var programCounter = 0;
	var pointer = 0;
	var memory = new Array(MemorySize);
	for (var i = 0; i < MemorySize; i++) {
		memory[i] = 0;
	}

	while (programCounter < code.length) {
		var command = code.charAt(programCounter);
		switch (command) {
			case '>':
				pointer++;
				if (pointer > MemorySize) {
					MemorySize = MemorySize;
				}
				break;
			case '<':
				pointer--;
				if (pointer < 0) {
					pointer = 0;
				}
				break;
			case '+':
				memory[pointer]++;
				break;
			case '-':
				memory[pointer]--;
				break;
			case '.':
				result += String.fromCharCode(memory[pointer]);
				break;
			case ',':
				memory[pointer] = getInput();
				break;
			case '[':
				if (memory[pointer] == 0) {
					var nestCount = 0;
					while (true) {
						programCounter++;
						if (code.charAt(programCounter) == ']') {
							if (nestCount <= 0) {
								break;
							} else {
								nestCount--;
							}
						}
						if (code.charAt(programCounter) == '[') {
							nestCount++;
						}
						if (programCounter >= code.length) {
							programCounter = code.length;
							break;
						}
					}
				}
				break;
			case ']':
				if (memory[pointer] != 0) {
					var nestCount = 0;
					while (true) {
						programCounter--;
						if (code.charAt(programCounter) == '[') {
							if (nestCount <= 0) {
								break;
							} else {
								nestCount--;
							}
						}
						if (code.charAt(programCounter) == ']') {
							nestCount++;
						}
						if (programCounter < 0) {
							programCounter = 0;
							break;
						}
					}
				}
				break;
		}

		programCounter++;
	}

	return result;
};