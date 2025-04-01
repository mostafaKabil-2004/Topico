const Username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const userMessage = document.querySelector(".userMessage");
const emailMessage = document.querySelector(".emailMessage");
const passwordMessage = document.querySelector(".passwordMessage");
const confirmPasswordMessage = document.querySelector(
  ".confirmPasswordMessage"
);
const formBtn = document.querySelector(".form-btn");

// check if all input are correct to undisabled the register input

const activeReg = () => {
  if (!Username.classList.contains("activeInput") &&
      !email.classList.contains("activeInput") &&
      !password.classList.contains("activeInput") &&
      !ConfirmPassword.classList.contains("activeInput")) {
    formBtn.removeAttribute("disabled"); // تفعيل الزر
  } else {
    formBtn.setAttribute("disabled", ""); // تعطيل الزر
  }
};



// check User Name Input
Username.addEventListener("keyup", (eo) => {
  userMessage.style.display = "block";
    Username.classList.add("activeInput");
  if (Username.value.length < 3) {
    userMessage.style.display = "block";
    Username.classList.add("activeInput");
  } else {
    userMessage.style.display = "none";
    Username.classList.remove("activeInput");
  }

  activeReg()
});

// check Email Input

email.addEventListener("keyup", (eo) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(email.value)) {
    emailMessage.style.display = "none";
    email.classList.remove("activeInput");
  } else {
    emailMessage.style.display = "block";
    email.classList.add("activeInput");
  }

  activeReg()
});

// check password input

password.addEventListener("keyup", (eo) => {
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPassword.test(password.value)) {
    passwordMessage.style.display = "none";
    password.classList.remove("activeInput");
  } else {
    passwordMessage.style.display = "block";
    password.classList.add("activeInput");
  }

  activeReg()
});

// check confirm password input

ConfirmPassword.addEventListener("keyup", (eo) => {
  if (ConfirmPassword.value === password.value) {
    confirmPasswordMessage.style.display = "none";
    ConfirmPassword.classList.remove("activeInput");
  } else {
    confirmPasswordMessage.style.display = "block";
    ConfirmPassword.classList.add("activeInput");
  }

  activeReg()
});

// aaaaaA1#
