const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Reset error messages
  clearErrors();

  // Get form input values
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  // Validate inputs
  let isValid = true;

  if (username.length < 6) {
    displayError('usernameError', 'Username must be at least 6 characters long.');
    isValid = false;
  }

  if (!validateEmail(email)) {
    displayError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

  if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
    displayError('passwordError', 'Password must be at least 8 characters long and contain at least one capital letter and one number.');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    form.reset();
  }
});

function clearErrors() {
  document.querySelectorAll('.error').forEach(error => error.textContent = '');
}

function displayError(id, message) {
  document.getElementById(id).textContent = message;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
