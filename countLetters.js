const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }  else {
      console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const countLetters = function(sentence) {
  let letterCount = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i].toLowerCase();
    if (letter >= 'a' && letter <= 'z') {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};
