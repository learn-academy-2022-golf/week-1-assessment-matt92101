// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
 
// Create a function that determines whether a number is below, above, or at the boiling point of 212 degrees
// Input: Any number
//  If statement needed:
//      If given number is less than 212 degrees, return text string "Below boiling point"
//      If given number is greater than 212 degrees, return text string "Above boiling point"
//      If given number is equal to 212 degrees, return text string "At boiling point"
// Output: Below boiling point, above boiling point, at boiling point



//const temp1 = 42
// Expected output: "42 is below boiling point"

//const temp2 = 350
// Expected output: "350 is above boiling point"

//const temp3 = 212
// Expected output: "212 is at boiling point"


const boilingTemp = () => {
    const temp1 = 42
    const temp2 = 350
    const temp3 = 212
    if (temp1 > 212) {
        return (temp1 + "is above boiling point")}
    else if (temp1 < 212) {
        return (temp1 + "is below boiling point")}
    else if (temp1 === 212) {
        return (temp1 + "is at boiling point")}

    if (temp2 > 212) {
        return (temp2 + "is above boiling point")}
    else if (temp2 < 212) {
        return (temp2 + "is below boiling point")}
    else if (temp2 === 212) {
        return (temp2 + "is at boiling point")}

    if (temp3 > 212) {
        return (temp3 + "is above boiling point")}
    else if (temp3 < 212) {
        return (temp3 + "is below boiling point")}
    else if (temp3 === 212) {
        return (temp3 + "is at boiling point")}
    
        console.log(boilingTemp(42))
        console.log(boilingTemp(350))
        console.log(boilingTemp(212))
        }

    // No results returned - Not sure why??


      
   

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

// Create code that combines two arrays
// input: two test variables const padres1984WorldSeriesRuns and const padres1998WorldSeriesRuns 
// Use the .length method and combine the two test variables using the + sign
// output: returns the length of the two variables

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
// Actual output: 9

console.log (padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// Create code to reverse letters in a string
// Input: const currentCohort
// Need to create perform three actions in sequential order
// 1. Need to split the text string into individual characters
// 2. Need to reverse the order of the characters
// 3. Need to join all the character in the reversed order     
// Output: "Golf 2022 will be reversed"

//const currentCohort = "Golf 2022"

const currentCohort = "Golf 2022"
const splitString = (currentCohort.split(""))
const reverseString = (splitString.reverse())
const joinArray = (reverseString.join(""))
console.log (joinArray)

// Expected output: "2202 floG"
// Actual output "2202 floG"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

// Create code to index a value from an array
// Input: givenValue1 and givenValue2 
//  Use .lastIndexOf method of each given value
// Output: last index of the given values

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log (myNumbers.lastIndexOf(42))
// Expected output: 7
// Actual output: 7

const givenValue2 = 10
console.log (myNumbers.lastIndexOf(10))

// Expected output: 8
// Actual output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

// Create code that sorts numbers from largest to smallest in an array
// Input: test variables sanDiegoSummerTemperatures and sanDiegoWinterTemperatures
//   Use .sort method for each test variable to get smallest to largest
//   Use .reverse method for each test variable to reverse the order to largest to smallest


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
sanDiegoSummerTemperatures.sort((a, b) => a - b)
sanDiegoSummerTemperatures.reverse ()
console.log (sanDiegoSummerTemperatures)

// Expected output: [82, 80, 79, 77, 76, 73, 72]
// Actual output: [82, 80, 79, 77, 76, 73, 72]


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort((a, b) => a - b)
sanDiegoWinterTemperatures.reverse ()
console.log (sanDiegoWinterTemperatures)

// Expected output: [68, 67, 66, 66, 62, 59, 59]
// Actual output: [68, 67, 66, 66, 62, 59, 59]