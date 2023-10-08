//determiner si la variable ch est une chaîne de caractère palindrome ou non 
// ch="radar" mot palindrome
// ch="bonjour" mot non palindrome 

function estPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    do {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    } while (i < j);
    return true;    
  }
//   console.log(estPalindrome(ch));



  // générer un numéro aleatoire entre 1 et 10
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
  // get input from user
  let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

  // get the integer
  number = parseInt(input);

  // increase the number of guesses
  guesses++;

  // check input number with the secret number provide hint if needed
  if (number > secretNumber) {
    hint = ', and less than ' + number;
  } else if (number < secretNumber) {
    hint = ', and greater than ' + number;
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);

