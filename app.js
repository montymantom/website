wordDef = document.getElementById("word");
const wordObj = {};
let word = wordObj.input;

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "INSERT KEY",
		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
	},
};

function checkEnter(event) {
	if (event.keyCode == 13) {
		let word = document.getElementById("name-input").value;
		wordObj.input = word;
        console.log(wordObj.input);
        getWord(wordObj.input);
	}
}

function getWord(word) {
	let api = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;

	fetch(api, options)
		.then(function (response) {
			let data = response.json();
			return data;
		})
		.then(function (data) {
			let test1 = data.definitions[0].definition;
			return test1;
		})
		.then(function (test1) {
			wordObj.def = test1;
		})
		.then(function () {
			changeHTML();
		})
		.catch(function (err) {
			console.error(err);
		});
}

function changeHTML() {
	wordDef.innerHTML = `${wordObj.input}: ${wordObj.def}`;
    document.getElementById("word").style.backgroundColor = "#498f61";
}

