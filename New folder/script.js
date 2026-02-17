// ===== Welcome Message =====
window.onload = function () {
  alert("Welcome to Kids Bloom Public School Website");
};

// ===== Image Slider =====
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let index = 0;
let slider = document.getElementById("slider");

function changeImage() {
  slider.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeImage, 3000);

// ===== Contact Form Validation =====
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
function signup() {
    let name = document.getElementById("suName").value;
    let email = document.getElementById("suEmail").value;
    let password = document.getElementById("suPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful!");
    window.location.href = "login.html";
}

function login() {
    let email = document.getElementById("liEmail").value;
    let password = document.getElementById("liPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
    } else {
        alert("Invalid Email or Password");
    }
}
