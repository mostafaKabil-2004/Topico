const email = document.getElementById("email");
const password = document.getElementById("password");
const emailMessage = document.querySelector(".emailMessage");
const passwordMessage = document.querySelector(".passwordMessage");

const formBtn = document.querySelector(".form-btn");

// check if all input are correct to undisabled the register input

const activeReg = () => {
  if (  !email.classList.contains("activeInput") &&
  !password.classList.contains("activeInput")){

    formBtn.removeAttribute("disabled"); // تفعيل الزر
  }
    
 else {
    formBtn.setAttribute("disabled", ""); // تعطيل الزر
  }
};





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





// aaaaaA1#
