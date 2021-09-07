let pseudo, email, password, confirmPass;
const inputs = document.querySelectorAll(
  "input[type='text']",
  "input[type = 'password']"
);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]+$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractère spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};
const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errorDisplay("email", "Le mail n'est pas valide");
  } else {
    errorDisplay("email", "", true);
  }
};

const progressBar = document.getElementById("progress-bar");

const passwordChecker = (value) => {
  console.log(value);
  if (
    !value.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,50})$/
    )
  ) {
    errorDisplay(
      "password",
      "Un minimum de 8 caractères, une majuscule, un chiffre et un caractère spéciale"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressBlue");
    password = value;
  } else {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressGreen");
    password = value;
  }
  if (confirmPass) confirmChecker(password);
};
const confirmChecker = (value) => {
  if (value != password) {
    errorDisplay("confirm", "Les mots de passe ne sont pas identiques");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    //console.log(data);
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
