const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function showRegister() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    username: document.getElementById("registerUsername").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
  };
  localStorage.setItem(user.username, JSON.stringify(user));
  alert("Registration successful!");
  showLogin();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    alert(`Welcome back, ${username}!`);
  } else {
    alert("Invalid username or password");
  }
});
