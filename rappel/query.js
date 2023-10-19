/** querySelector() avec les balises **/
let titres = document.querySelectorAll("h1"); // HTMLCollection|| tableau contient tous les h1
let titre = document.querySelector("h1"); // premier element de h1
// console.log(titre);
titre.style.color = "blue";
// console.log(titres);

titres.forEach((titre) => {
    titre.style.color = "red";
    titre.style.fontSize = "30px";
})

/** querySelector() avec les classes **/

let titres2 = document.querySelectorAll(".title"); // HTMLCollection|| tableau contient tous les h1
// console.log(titres2);

titres2.forEach((titre) => {
    titre.style.color = "green";
    titre.style.fontSize = "50px";
})

/** querySelector() avec les id's **/
let titres3 = document.querySelectorAll("#msg"); // HTMLCollection|| tableau contient tous les h1
// console.log(titres3);
let titre3 = document.querySelector("#msg"); // retourner le premier balise avec id "msg"

// console.log(titre3);

titres3.forEach((titre) => {
    titre.style.color = "purple";
    titre.style.fontSize = "50px";
})


/** querySelector() avec * **/

let titres4 = document.querySelectorAll("*"); // HTMLCollection|| touses les balises de la page
console.log(titres4);
let titre4 = document.querySelector("*"); // retourner le premier balise dans la page
console.log(titre4);