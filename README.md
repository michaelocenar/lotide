# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @viacaelestis/lotide`

**Require it:**

`const _ = require('@viacaelestis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: asserts that two arrays are equal
* assertEqual: asserts two values are equal
* assertObjectsEqual: asserts two objects are equal
* countLetters: counts number of letters in a given string
* countOnly: takes an object as an argument and returns how many times a given element appears in an object 
* eqArrays: checks if two arrays are equal
* eqObjects: checks if two objects are equal 
* findKey: sees if a given key exists in an object
* findKeyByValue: finds a certain key by an input value
* head: returns first element in an array 
* letterPositions: returns the index if a letter in a given string
* map: changes the elements in an array using a callback function
* middle: returns the middle element of an array (1 element if array length is odd, 2 elements if array length is even)
* tail: returns the last element in an array 
* takeUntil: populates an array under a given condition
* without: removes specified elements from an array
