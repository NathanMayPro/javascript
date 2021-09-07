const target = document.getElementById("target");
let array = ["garçon chaussure", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800 - letterIndex * 200);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 150);
};
loop();

let string2 = "Java script est un langage orienté objet";
console.log(typeof string2);

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];
let newArray = [...array3, ...array4];
newArray.forEach((language) => console.log(language));
