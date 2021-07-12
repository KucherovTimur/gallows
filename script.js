import {ruswords} from './words.js';

let check = document.querySelector('#check');
let newGame = document.querySelector('#newGame');
let userInput = document.querySelector('#userInput');
let cypher = document.querySelector('#cypher');
let imgNumber = 0;
let img = document.querySelector('img');
let used = document.querySelector('p');
let letters = '';
let words = ruswords;
let OneOrTwo = document.getElementById('OneOrTwo');
let single = true;
let forTwo = document.getElementById('forTwo');
let forOne = document.getElementById('forOne');
let gameName = document.getElementById('gameName');
let modal = document.getElementById('modal');
let friend = document.getElementById('friend');
let friendInput = document.getElementById('friendInput');
let friendButton = document.getElementById('friendButton')
console.log(words);
let secret = words[Math.floor(Math.random()*words.length)];
cypher.innerHTML = '*'.repeat(secret.length);
function NewGame(){
	imgNumber = 0;
	img.src = 'hangman' + imgNumber + '.png';
	cypher.innerHTML = '*'.repeat(secret.length);
	userInput.value = '';
	userInput.select();
	check.disabled = false;
	used.innerHTML = 'Буквы';
	letters = '';
}

forOne.onclick = function(event){
	event.preventDefault();
	single = true;
	gameName.innerHTML = 'Виселица: Одиночная';
	modal.style.display = 'none';
	secret = words[Math.floor(Math.random()*words.length)]
	NewGame();
}
forTwo.onclick = function(event){
	event.preventDefault();
	single = false;
	gameName.innerHTML = 'Виселица: На двоих';
	modal.style.display = 'none';
	friend.style.display = 'block';
}
friendButton.onclick = function(event){
	event.preventDefault();
	friend.style.display = 'none';
	secret = friendInput.value || words[Math.floor(Math.random()*words.length)];
	console.log(secret);
	NewGame();
}

OneOrTwo.onclick = function(event){
	event.preventDefault();
	modal.style.display = 'block';
}

check.onclick = function(event){
	event.preventDefault();
	let letter = userInput.value[0] || 'й';
	userInput.select();
	if (secret.includes(letter)) {
		let newWord = '';
		for (let i = 0; i < secret.length; i++) {
			if (secret[i] == letter){
				newWord = newWord + letter;
			}
			else {
				newWord = newWord + cypher.innerHTML[i];
			}
		}
		console.log(newWord);
		cypher.innerHTML = newWord; 
		// if (cypher.innerHTML == secret){
			// cypher.innerHTML = 'Победа!';
		// }
		if (!cypher.innerHTML.includes('*')) {
			cypher.innerHTML = 'Победа!';
			check.disabled = true;
		}
	}
	else{
		if (!letters.includes(letter)) {
		imgNumber++;
		img.src = 'hangman' + imgNumber + '.png';}
		if (imgNumber == 6) {
			cypher.innerHTML = 'Поражение: ' + secret;
			check.disabled = true;
		}
	}
	if (!letters.includes(letter) && letters.length <40) {
		if (letters.length == 0) {
			letters = letters + letter;
		}
		else {
			letters = letters + ', ' + letter;
		}
		used.innerHTML = 'Буквы: ' + letters;
	}
}




newGame.onclick = function(event){
	event.preventDefault();
	secret = words[Math.floor(Math.random()*words.length)];
	NewGame();
}
// let a = 0;
// while(a<10){
// 	console.log(a);
// 	a = a + 1;
// }
// let array = ['animals', 'plants', 'mushroom'];
// console.log(array);
// console.log(array[1]);
// array.push('humans')
// console.log(array)
// let word = 'enemy';
// 	let result = '';
// for (let i = 0; i < word.length; i = i + 1){
// 	console.log(word[i]);
// 	let symbol = 'e';
// 	if (word.indexOf(word[i]) != -1) {
// 		result = result + symbol;
// 	}
// 	else {
// 		result = result + '*';
// 	}
// 	if (word[i]=='e') {
// 		console.log('yes');

// 	}
// 	else {
// 		console.log('no');
// 	}
// }
// console.log(result);
