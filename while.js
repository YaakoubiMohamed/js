// while(condition){ tanque condition vrai
//     code a executer
//}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//determiner si la variable ch est une chaîne de caractère palindrome ou non 
 ch="radar" //mot palindrome
// ch="bonjour" mot non palindrome 
function estPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }  

  console.log(estPalindrome(ch)); 