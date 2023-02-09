const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }  else {
      console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const findKeyByValue = function(obj, value) {
    for (const key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
    return undefined;
  }
  
  // Test assertions
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "Breaking Bad"
  };
  

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined);
  