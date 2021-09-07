const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "$^*ù&~\"#'[]-|è`_\\";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let password = "";
  let data = [];
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);
  //data = data.join("");
  if (data.length == 0) {
    alert("Veuillez selectionner au moins un critère");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "copié !!";
  setTimeout(() => {
    generateButton.textContent = "Générer votre mot de passe";
  }, 1000);
}

generateButton.addEventListener("click", generatePassword);
