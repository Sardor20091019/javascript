const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const userList = document.getElementById("userList");
const crudSection = document.getElementById("crudSection");

let users = [];

function showRegister() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  crudSection.style.display = "none";
}

// CREATE
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const exists = users.some((u) => u.username === username);
  if (exists) {
    alert("That username already exists!");
    return;
  }

  users.push({ username, email, password });
  alert("Registration successful!");
  showLogin();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    alert(`Welcome back, ${username}!`);
    showCRUD();
  } else {
    alert("Invalid username or password");
  }
});

function showCRUD() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  crudSection.style.display = "block";
  displayUsers();
}

function displayUsers() {
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.username}</strong> — ${user.email}
      <button onclick="editUser(${index})">Edit</button>
      <button onclick="deleteUser(${index})">Delete</button>
    `;
    userList.appendChild(li);
  });
}

function editUser(index) {
  const newEmail = prompt("Enter new email:", users[index].email);
  if (newEmail) {
    users[index].email = newEmail;
    displayUsers();
  }
}

function deleteUser(index) {
  if (confirm(`Delete ${users[index].username}?`)) {
    users.splice(index, 1);
    displayUsers();
  }
}
