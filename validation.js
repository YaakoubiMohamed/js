// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form fields
  const nom = document.querySelector('#nom');
  const prenom = document.querySelector('#prenom');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const dob = new Date(document.querySelector('#date_nais').value);
  const adresse = document.querySelector('#adresse');

  // Validate the fields
  let isValid = true;
  if (nom.value.trim() === '') {
    nom.nextElementSibling.innerHTML = 'Please enter your name';
    isValid = false;
  } else {
    nom.nextElementSibling.innerHTML = '';
  }
  if (prenom.value.trim() === '') {
    prenom.nextElementSibling.innerHTML = 'Please enter your last name';
    isValid = false;
  } else {
    prenom.nextElementSibling.innerHTML = '';
  }
  if (email.value.trim() === '') {
    email.nextElementSibling.innerHTML = 'Please enter your email';
    isValid = false;
  } else {
    email.nextElementSibling.innerHTML = '';
  }
  if (password.value.trim() === '') {
    password.nextElementSibling.innerHTML = 'Please enter your password';
    isValid = false;
  } else {
    password.nextElementSibling.innerHTML = '';
  }
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  if (ageInYears < 18) {
    dob.nextElementSibling.innerHTML = 'You must be at least 18 years old';
    isValid = false;
  } else {
    dob.nextElementSibling.innerHTML = '';
  }
  if (adresse.value.trim() === '') {
    adresse.nextElementSibling.innerHTML = 'Please enter your address';
    isValid = false;
  } else {
    adresse.nextElementSibling.innerHTML = '';
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});