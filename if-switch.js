
// let x=5;

// if(x % 2 == 0){
//     // console.log("x est pair");
// }
// else{
//     // console.log("x est impair");
// }

moyen = 21;

// if(moyen < 10){
//     console.log("redoublant");
// }
// else if(moyen < 14){
//     console.log("assez bien");
// }
// else if(moyen < 20){
//     console.log("très bien")
// }
// else{
//     console.log("erreur");
// }


/*
  moyen < 10 afficher redoublant
  10 < moyen < 14 afficher assez bien
  14 < moyen < 18 afficher très bien
  moyen > 18 afficher très bien
*/


mois ="11";

// if(mois == 1){
//     console.log("Janvier");
// }
// else if(mois == 2){
//     console.log("Février");
// }
// else if(mois == 3){
//     console.log("Mars");
// }
// else if(mois == 4){
//     console.log("Avril");
// }
// else if(mois == 5){
//     console.log("Mai");
// }
// else if(mois == 6){
//     console.log("Juin");
// }
// else if(mois == 7){
//     console.log("Juillet");
// }
// else if(mois == 8){
//     console.log("Août");
// }
// else{
//     console.log("erreur");
// }

// 1 != "1"


switch(mois){
    case "1":
        console.log("Janvier");
        break;
    case "2":
        console.log("Février");
        break;
    case "3":
        console.log("Mars");
        break;
    case "4":
        console.log("Avril");
        break;
    case "5":
        console.log("Mai");
        break;
    case "6":
        console.log("Juin");
        break;
    case "7":
        console.log("Juillet");
        break;
    case "8":
        console.log("Août");
        break;
    default:
        console.log("erreur");
        break;
}                





/// calcule ppcm
a = 5;
b= 3;

let min = 0;
let max = 0;

if(a > b){
     min = b;
     max = a;
}

else{
     min = a;
     max = b;    
}

let temp = max;

while(temp % min != 0){    
    temp  = temp + max
}

console.log("le ppcm de " + a + " et " + b + " est :" + temp);


if(a>b){
    let x =5;
    console.log(x);
}

/*
a=5; b=3;
max=5; min=3; temp = 5
temp = 5 + 5    = 10
temp = 10 + 5 = 15
*/







