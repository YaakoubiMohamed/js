/** OBJECT **/
// syntaxe d'objet 
// var nomobject = {
    // key: valeur
// }
// var objet1 = {};
// console.log(objet1);
// objet1.nom = "Yakoubi";
// objet1.prenom = "sami";
// objet1.age = 30;
// console.log(objet1);

// var tab = [1,2,3,4,5];
// console.log(tab[1]);

var personne = {
    nom: "Yakoubi",
    prenom: "sami",
    age: 30,
    adresse: "tunis",

    fullname(){
        return this.nom + " " + this.prenom
    },

    Cv(){
         return "Hello my name is " + this.nom + " " + this.prenom+". my age is " + this.age+". my address is " + this.adresse
    }
}

// &nbps;
// console.log(personne.prenom); // sami
// console.log(personne["prenom"]); // sami
// console.log(personne.fullname()); // sami Yakoubi
// console.log(personne.fullname()); // without return the result will be undefined
// console.log(personne.Cv()); // Hello my name is sami sami. my age is 30. my address is tunis



var cars = [
    {
        marque: "mercedes",
        model: "benz",
        couleur: "rouge",
        annee: 2000,
        vitesse: 300,
    },
    {
        marque: "renault",
        model: "clio",
        couleur: "bleu",
        annee: 2010,
        vitesse: 100,
    },
    {
        marque: "ford",
        model: "fiesta",
        couleur: "jaune",
        annee: 2005,
        vitesse: 200,
    },
    {
        marque: "toyota",
        model: "corolla",
        couleur: "vert",
        annee: 2008,
        vitesse: 280,
    },
]

function vitesseMax(cars){
    var maxv=cars[0].vitesse;
    for (let i=1;i<cars.length;i++){
        if(cars[i].vitesse > maxv){
            maxv = cars[i].vitesse
        }
    }
     console.log(maxv)
    return maxv
}

// console.log(vitesseMax(cars));

for(let i=0; i<cars.length; i++){
    if(cars[i].vitesse > 150){
        // console.log(cars[i]);
    }
}

var newcar = cars.filter(car => car.vitesse > 150)
// console.log(newcar)


let book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1000,
    read: false,

    changebook(){
       return this.read = true
    },
    changetitle(title){
        return this.title = title
    },
    changeauthor(author){
        return this.author = author
    }
}
console.log(book.read);
console.log(book.changebook());
console.log(book.read);
book.pages = 500;
console.log(book.pages);
book.title = "prison break";
console.log(book.title);
console.log(book.changetitle("mission impossible"));
book.changeauthor("yakoubi");
console.log(book);

let book2 = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1000,
    read: false,
}
let details = {
    price: 100,
    year: 2022
}
let obj = Object.assign(details,book2);
console.log(obj); // return combinaion of book2 and details
var values = Object.values(book2);
console.log("values",values);// return [ 'The Lord of the Rings', 'J.R.R. Tolkien', 1000, false ]
var keys = Object.keys(book2);
console.log("keys",keys); // return [ 'title', 'author', 'pages', 'read' ]
var entries = Object.entries(book2);
console.log("entries",entries); // return [ [ 'title', 'The Lord of the Rings' ], [ 'author', 'J.R.R. Tolkien' ], [ 'pages', 1000 ], [ 'read', false ] ]

/**
 * = affectation 
 * == comparaison de valeur
 * === comparaison de valeur et de type
 * 
 */

// var a=5;
// var b='5';
// if(a==b){
//     console.log("a is equal to b");
// }else{
//     console.log("a is not equal to b");
// }



// if(a===b){
//     console.log("a is equal to b");
// }else{
//     console.log("a is not equal to b");
// }