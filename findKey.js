const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }  else {
      console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const findKey = function(object, callback) {
    for (let key in object) {
      if (callback(object[key]) === true) {
        return key;
      }
    }
    return undefined;
  };
  

  const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  assertEqual(findKey(data, x => x.stars === 2), "noma");
  assertEqual(findKey(data, x => x.stars === 3), "Akaleri");
  assertEqual(findKey(data, x => x.stars === 4), undefined);
  assertEqual(findKey(data, x => x.stars === 2), "Ora")
  assertEqual(findKey({}, x => x), undefined);
  assertEqual(findKey({ a: 1, b: 2, c: 3 }, x => x === 2), "b");