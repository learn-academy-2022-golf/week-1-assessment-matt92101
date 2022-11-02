// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.


// --------------------1) What will this log?  

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:
      // cohort.length counts the numbers of characters including the space found in const cohort "LEARN 2022". Total of 10 characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The number four inside the brackets indicates the index position beginning with 0 within the const greeting. The index position returns the 4th indexed position starting with 0. h=0 e=1 l=2 l=3 o=4


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: There are four text strings in const language. Javascript is indexed position 0, Rubis is indexed position 1, Python is indexed position 2 C++ is indexed position 3
//                          const index is assigned to position 1. Console.log is calling to find the text string in position 1: Javascript is in position 0, Ruby is in position 1.

// --------------------4) What will this log?

//const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: 
// Recieved error:
// TypeError: weekendDays.toUpperCase is not a function
// at Object.<anonymous> 
// Change brackets ["saturday", "sunday"] to parenthesis ("saturday", "sunday")
const weekendDays = ("saturday", "sunday")
console.log(weekendDays.toUpperCase())

// Recieved returned value of all Caps SUNDAY only. Not sure why both Saturday and Sunday were not capitalized.


// --------------------5) What will this log?

//const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: 

// Did not return a value. After evaluating the problemn the words "typeof" should be removed from console.log(typeof dataTypes.length)

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(dataTypes.length)

// Corrected code returned the correct answer of 4