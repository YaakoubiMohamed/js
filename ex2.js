let arr = [15,3,18,17,40];
arr.sort((a,b) => { // trie par ordre croissant
    return a - b
});
console.log(arr);
arr.reverse(); // inverse l'ordre de l'array
console.log(arr);
let sum = 0; // initialize somme à 0
for(let i =0; i < arr.length; i++){
    sum += arr[i]; // sum = sum + arr[i]
}

console.log(sum);