function tPVL() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.querySelector(".eye-icon i");


  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }

}
function tPVS(){
  var signupPasswordInput = document.getElementById("signup-password");
  var eyeIconS = document.getElementById("eye-s");
  if (signupPasswordInput.type === "password") {
    signupPasswordInput.type = "text";
    eyeIconS.classList.remove("fa-eye");
    eyeIconS.classList.add("fa-eye-slash");
  } else {
    signupPasswordInput.type = "password";
    eyeIconS.classList.remove("fa-eye-slash");
    eyeIconS.classList.add("fa-eye");
  }
}
function tPVR(){
  var rePasswordInput = document.getElementById("re-password");
  var eyeIconR = document.getElementById("eye-r");
  if (rePasswordInput.type === "password") {
    rePasswordInput.type = "text";
    eyeIconR.classList.remove("fa-eye");
    eyeIconR.classList.add("fa-eye-slash");
  } else {
    rePasswordInput.type = "password";
    eyeIconR.classList.remove("fa-eye-slash");
    eyeIconR.classList.add("fa-eye");
  }
}
// LOGIN OPTION

document.addEventListener('DOMContentLoaded', function() {
  var hostButton = document.getElementById('host-login');
  var invButton = document.getElementById('inv-login');
  var userButton = document.getElementById('user-login');

  // Check if the buttons were found
  if (hostButton && invButton && userButton) {
      // Add event listeners to each button
      hostButton.addEventListener('click', function() {
          hostButton.classList.add('button-active');
          invButton.classList.remove('button-active');
          userButton.classList.remove('button-active');
      });

      invButton.addEventListener('click', function() {
          hostButton.classList.remove('button-active');
          invButton.classList.add('button-active');
          userButton.classList.remove('button-active');
      });

      userButton.addEventListener('click', function() {
          hostButton.classList.remove('button-active');
          invButton.classList.remove('button-active');
          userButton.classList.add('button-active');
      });
  }
});




// NUMBER 
function validateMobile(input) {
  // Remove any non-numeric characters
  input.value = input.value.replace(/\D/g, '');

  // Limit the input to 10 characters
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }

  // Check if input contains 'e', if so, remove it
  if (input.value.includes('e')) {
    input.value = input.value.replace('e', '');
  }
}



// ANIMATION 2
document.addEventListener('DOMContentLoaded', function() {
  var flipCard = document.querySelector('.flip-card-inner');

  function toSignup() {
      flipCard.style.transform = 'rotateY(180deg)';
  }

  function toLogin() {
      flipCard.style.transform = 'none'; // Revert back to front face
  }

  // Attach event handlers to HTML elements
  document.getElementById('loginTosignup').addEventListener('click', toSignup);
  document.getElementById('signupTologin').addEventListener('click', toLogin);
});


// LOADER
const forgotPass = document.getElementById('forgotPass');
forgotPass.addEventListener("click", function() {
  const loader = document.getElementById('loader');

  loader.style.display = 'block'; // Show the loader on page load

  // After 2 seconds, hide the loader with smooth fade-out
  setTimeout(function () {
      loader.style.opacity = '0';
          loader.style.display = 'none';
          window.location.href = 'shivam_forgot_pass.html';
  }, 1200);
});