const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// Test case 1: even length array
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

// Test case 2: odd length array
assertArraysEqual(middle([1, 2, 3]), 2);

// Test case 3: single element array
assertArraysEqual(middle([1]), 1);

