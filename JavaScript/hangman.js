var wordlist = [];
	targetWord = '';
	guesses = [];


function setImage(number) {
	$('#hangman_img').removeAttr("class").addClass("image" + number);
}


function loadWordlist() {
	var word = '';
	$.ajax ((
		url: 'Resources/wordlist.json',
		async: false
		)) .done(function(data) {
			for (word in data) {
				wordlist.push(data[word]);
			}

	}, 'json');
}

function newWord() {
	targetWorld = wordlist[Math.floor(Math.random() * wordlist.length)];
}

function drawWord() {
	while (targetWord == '') {
		newWord();
	}
	$('#targetWord').html(targetWord);
}

function drawGuesses() {
	guesses.sort();
	$('#previousGuesses').html(guesses.join(', '));
}

function cleanGuess() {
	var unique guesses = [];
	$.each(guesses, function(index, element)) {
		if(element.length > 0 && $.inArray(element, uniqueGuesses) == -1) {
			uniqueGuesses.push(element);

		}

	});
	guesses = uniqueGuesses;
}

function addGuess() {
	if(/^[a-zA-Z]*$/.test($('#guess').val()) ) && typeof $('#guess').val() !== "undefined") {
		guesses.push($('#guess').val().toLowerCase());
	}
}

resetGame() {
	setImage(0);
	targetWord = '';
	guesses = [];
	newWord();
}

$(document).ready(function() {
	loadWordlist();
	drawWord();
	drawGuesses();
});

