// Get form elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const switchSignupBtn = document.getElementById("switch-signup-btn");
const switchLoginBtn = document.getElementById("switch-login-btn");
const googleLoginBtn = document.getElementById("google-login-btn");

// Switch to login form
switchLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

// Switch to signup form
switchSignupBtn.addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Handle login form submit
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  // TODO: Implement login functionality
});

// Handle signup form submit
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  // TODO: Implement signup functionality
});

// Handle Google login button click
googleLoginBtn.addEventListener("click", () => {
  // TODO: Implement Google login functionality
});
