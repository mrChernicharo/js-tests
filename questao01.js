const main = () => {
  const namesArray = [];
  const palindromesArray = [];
  let totalPalindromes = 0;

  for (let i = 0; i <= 10000; i++) {
    const num = randomIntFromInterval(3, 5);
    const word = createRandomWord(num);
    if (checkPalindrom(word)) {
      totalPalindromes += 1;
      palindromesArray.push(word);
    }
    namesArray.push(word);
  }
  // Code here
  document.writeln(
    "Voilá! 10000 random generated words between 3 and 5 letters long: "
  );
  namesArray.map((n) => document.write(n + ", "));

  document.writeln(
    `Of which ${totalPalindromes} are palindromes, Here are they: \n`
  );
  palindromesArray.map((p) => document.write(p + ", "));
};

main();

function createRandomWord(length) {
  let consonants = "bcdfghjlmnpqrstv";
  let vowels = "aeiou";
  const rand = function (limit) {
    return Math.floor(Math.random() * limit);
  };
  let i;
  let word = "";
  length = parseInt(length, 10);
  consonants = consonants.split("");
  vowels = vowels.split("");
  for (i = 0; i < length / 2; i++) {
    let randConsonant = consonants[rand(consonants.length)];
    let randVowel = vowels[rand(vowels.length)];
    word += i === 0 ? randConsonant.toLowerCase() : randConsonant;
    word += i * 2 < length - 1 ? randVowel : "";
  }
  return word;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkPalindrom(str) {
  return str === str.split("").reverse().join("");
}
