/** EX1**/
class Personne{
    constructor(prénom, nom, âge) {
      this.prénom = prénom;
      this.nom = nom;
      this.âge = âge;
    }
}

const sami = new Personne('sami','yaakoubi',31);

// console.log(sami);

/** EX2 **/

class Rectangle{
    constructor(largeur,hauteur){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    getArea(){
        return this.largeur * this.hauteur;
    }
}

const rectangle1 = new Rectangle(5,8);

// console.log(rectangle1.getArea());

/** EX3 **/

class Voiture{
    constructor(make,modele,annee){
        this.make = make;
        this.modele = modele;
        this.annee = annee;
    }

    obtenirDescription(){
        return 'Cette voiture est  '+this.make + " " + this.modele + " " + this.annee;
    }
}
const voitures = [
    new Voiture('audi','a4',2020),
    new Voiture('Ford','mustang',2020),
    new Voiture('toyota','Corolla',2020)
]

// voitures.forEach(voiture => console.log(voiture.obtenirDescription()));

/* EX4 */
// var url= 'https://formation-admin.vercel.app/users?id='+id+'&nom='+nom;
// var url =`https://formation-admin.vercel.app/users?id=${id}&nom=${nom}`
class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    drive(){
        console.log(`driving the ${this.make} ${this.model}`)
    }    

}

class Car extends Vehicle{
    constructor(make,model,numDoors){
        super(make,model);
        this.numDoors = numDoors;
    }

    drive(){
        console.log(`driving the ${this.make} ${this.model} with ${this.numDoors} doors`)
    }
}

const car1 = new Car('Ford','mustang',4);

car1.drive();

/** EX5 **/

class Shape {
    constructor(color) {
      this.color = color;
    }
    
    draw() {
      console.log(`Drawing a ${this.color} shape`);
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
    
    draw() {
      console.log(`Drawing a ${this.color} ${this.width}x${this.height} rectangle`);
    }
  }
  
  const rec1 = new Rectangle('blue', 5, 10);
  rec1.draw();

  /** EX6 **/

  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak(sound) {
      console.log(`The ${this.name} says ${sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
      this.sound = 'bark';
    }
    
    speak() {
      console.log(`The ${this.name} barks`);
    }
  }
  
  const dog1 = new Dog('Rex');
  dog1.speak();
  
  
