function calculateIMC() {
			var weight = document.getElementById("weight").value;
			var height = document.getElementById("height").value;
			var result = document.getElementById("result");

			if (weight === "" || height === "") {
				result.innerHTML = "Veuillez remplir tous les champs.";
				return;
			}
				// isNaN is not a number retour true/false
			if (isNaN(weight) || isNaN(height)) {
				result.innerHTML = "Veuillez entrer des nombres valides.";
				return;
			}

			var imc = weight / (height / 100 * height / 100); //imc = poids/hauteur^2
			imc = imc.toFixed(2); // 2 chiffres apres la virgule

			if (imc < 18.5) {
				result.innerHTML = "Votre IMC est de " + imc + ". Vous êtes en sous-poids.";
			} else if (imc >= 18.5 && imc < 25) {
				result.innerHTML = "Votre IMC est de " + imc + ". Vous êtes en poids normal.";
			} else if (imc >= 25 && imc < 30) {
				result.innerHTML = "Votre IMC est de " + imc + ". Vous êtes en surpoids.";
			} else {
				result.innerHTML = "Votre IMC est de " + imc + ". Vous êtes en obésité.";
			}
		}