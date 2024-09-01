let signupForm = document.getElementById("signupForm");

function signUp(event) {
  event.preventDefault();
  let username = document.getElementById("signupUsername").value;
  let password = document.getElementById("signupPassword").value;
  let password2 = document.getElementById("signupPassword2").value;
  // Retrieve users from localstorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // Check if user already exist
  let userExist = users.some((user) => user.username === username);
  if (userExist) {
    alert("Username already taken, Choose another username");
  } else if (username === "" || password === "" || password2 === "") {
    alert("input are mandatory");
  } else if (isNaN(password) == false || isNaN(password2) == false) {
    alert("Password should comprises of alphanumeric characters");
  } else if (password.length < 7) {
    alert("Password cannot be less than 7");
  } else if (password !== password2) {
    alert("Password mismatch, try again");
    // password.focus();??
  } else {
    // Create new user
    users.push({ username: username, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signupForm").reset();
  }
}
function loginForm(event) {
  event.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);

  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;
  let findUser = users.find(
    (user) => user.username === username && user.password === password
  );
  console.log(findUser);

  if (findUser) {
    alert(`Login successful, welcome ${findUser.username}`);
    document.getElementById("loginForm").reset();
  } else {
    alert("Invalid Username or Password");
    document.getElementById("loginPassword").focus()
  }
}

function showPass(e) {
  e.target.innerHTML = "Show";
  let input = e.target.previousElementSibling;
  // if (input.type === "password") {
  //   input.type = "text";
  //   e.target.innerText = "hide";
  // } else {
  //   input.type = "password";
  //   e.target.innerText = "show";
  // }
  input.type === "password" ? (input.type = "text") : (input.type = "password");
  input.type === "password" ? (e.target.innerHTML = "Show") : (e.target.innerHTML = "Hide");
}
