class Personne {
    constructor(prénom, nom, âge) {
      this.prénom = prénom;
      this.nom = nom;
      this.âge = âge;
    }
    
    displayDetails() {
      console.log(`Prénom: ${this.prénom}`);
      console.log(`Nom: ${this.nom}`);
      console.log(`Âge: ${this.âge}`);
    }
  }
  
  const personne1 = new Personne('John', 'Doe', 30);
  personne1.displayDetails();
  console.log(personne1);
