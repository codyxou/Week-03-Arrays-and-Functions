//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 1a.	
// Programmatically subtract the value of the first element in the array from the value in the last element of the array 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let agesMatch = (ages[ages.length-1]) - ages[0]; //creating a new variable that contains the match so I can easily print to the console the new variable
console.log(agesMatch); //93 - 3 = 90 

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push(25); //adding 25 using push which will add to the end of the array. new match should be 25 - 3 = 22
let newAge = ages[ages.length-1] - ages[0];
console.log(newAge);

// 1c.	Use a loop to iterate through the array and calculate the average age. 