let arr = [ 24, 6 ,9, 25, 7,80];

arr.push(3); // ajouter element a la fin du tableau
console.log("push",arr); // push [ 24, 6, 9, 25, 7, 80, 3]

arr.unshift(1); // ajouter element au debut du tableau
console.log("unshift",arr); //unshift [ 1, 24,  6, 9, 25,  7, 80, 3]

arr.pop(); // supprimer le dernier element du tableau
console.log("pop",arr); //pop [ 1, 24,  6, 9, 25,  7, 80]

arr.shift(); // supprimer le premier element du tableau
console.log("shift",arr); //shift [ 24, 6, 9, 25, 7, 80 ]

let color = ["red","blue","green", "yellow", "black", "white" ,'pink'];
console.log("slice",color.slice(2,5)); // retourner copie du tableau slice [ 'green', 'yellow', 'black' ]
console.log("slice",arr.slice(1,3)); // retourner copie du tableau slice [ 6, 9 ]
let tab = [ 24, 6 ,9, 25, 7,80];

console.log("splice",tab.splice(0,3)); // retourner les elements supprimes splice [ 24, 6, 9 ]
console.log("splice",tab); // splice [ 25, 7, 80 ]