'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let result = str.split(" ")
    let middle = 0;

    if (result.length % 2 == 0) {
        middle = result.length / 2
    } else {
        middle = Math.round((result.length / 2)+1)
    }

    // for (let i = 0; i < str.length; i++) {

    // }
    return result[middle].length

    // write your code here
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {

    let arr1 = str1.split('')
    let arr2 = str2.split('')
    
    arr1.sort()
    arr2.sort()

    let result = true;

    for (let i = 0; i < arr1.length; i++) {

        if(arr1[i]==arr2[i]){
            continue
        } else {
            result= false;
        }
        
    }

    return result
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    
    let result = 0

    if(arr.includes(int)){
        result = arr.indexOf(int)
    } else {
        let newArr =arr;
        newArr.push(int)
        newArr.sort()
        result = arr.indexOf(int)
    }
    // write your code here
    return result;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };