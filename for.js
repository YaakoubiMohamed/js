
let tab = [14,9,36,15,90,221]; // tab.length = 6 
// afficher les elments paires du tableau   tab

// mauvaise pratique pour afficher les elements du tableau
// console.log(tab[0]);
// console.log(tab[1]);
// console.log(tab[2]);
// console.log(tab[3]);
// console.log(tab[4]);
// console.log(tab[5]);

// bonne pratique pour afficher les elements du tableau
for(let i=0; i<tab.length; i++){
    // console.log(tab[i]);
}


// 1 - calculer la somme des mombres de 1 à 10 en utilisant la boucle for

let somme = 0;
for (let i = 1; i <= 10; i++) {
  somme += i;
}
// console.log(somme);

// 2-  afficher les nombre paires entre 1 et 15
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
// 3-  arr = [12,5, 18, 23,27]  afficher les elements du tableau divisile par 3

let arr = [12,5, 18, 23,27];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    // console.log(arr[i]);
  }
}

// 4- determiner si la variable ch est une chaîne de caractère palindrome ou non 
// ch="radar" mot palindrome
// ch="bonjour" mot non palindrome 

// ch ="radar"; 
ch = "bonjour"


/// part1 = "ra"
// part2 = "ar"



function estPalindrome(chaine) {
    // Vérifier si la chaîne de caractères est un palindrome
    let l  = chaine.length / 2; //2 
    for (let i = 0; i < l; i++) {
        if (chaine[i] !== chaine[chaine.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// test estPalindrome 
// ch= "radar"
// i =0 ||chaine[0] = r || chaine[4] = r || l=2
// i= 1 || chaine[1] = a || chaine[3] = a
// i= 2 2 < 2

console.log(estPalindrome(ch)); // true

