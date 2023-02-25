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

let sum = 0;
let ageAverage = 0;
for(i=0; i<ages.length; i++){ //loop is so long as i is less than the amount of numbers in the array (9 since I pushed 25 to the array), run the loop.
sum += ages[i]; //adding all the values within the array
ageAverage = sum/ages.length; //creating variable to console the sum of the arrays divided by the total array (255/9)

}
console.log(ageAverage); //28.33 repeating


// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let nameLength = names.map(function(element){ //using map to create new array that returns the character length of each name.
    return element.length;
 });

let nameSum =0;
for (i=0; i < nameLength.length; i++){ //for loop with variable lengths assigned to print out length of each element
nameSum+= nameLength[i]; //adding all the values within the new array
nameAverage = nameSum/nameLength.length; //new variable to find average
}
console.log(nameAverage);


// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

for (i=0; i<names.length; i++){ //loop to pull all the names from the array
}
console.log(names.join(' ')); //use the join method and add a space inside the parenthesis to print the names together with spaces 


//3.	How do you access the last element of any array? - answered in the log and comments. whichever is easiest for you to review as. 
// Accessing the last element of an array requires you to call your array and add .length-1

console.log(`3.	How do you access the last element of any array?`);
console.log(`Accessing the last element of an array requires you to call your array and add .length-1. example - console.log(yourarray[yourarray.length-1];`);


// 4.	How do you access the first element of any array?
//      Accessing the first element requires you to call your array at index zero. example - yourArray[0]

console.log(`How do you access the first element of any array?`);
console.log(`Accessing the first element requires you to call your array at index zero. example - console.log(yourArray[0]);`);


// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let newNames=['Cody', 'Hillary', 'Lilly'];
let nameLengths = newNames.map(function(element){ //using map to create new array that returns the character length of each name.
    return element.length; //returns the character length of each element
 });
 console.log(nameLengths);


//  6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let newNameSum=0
for (i=0; i < nameLengths.length; i++){ //for loop with variable lengths assigned to print out length of each element
newNameSum+= nameLengths[i]; //adding all the values within the new array
}
console.log(newNameSum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)

function multiWord(word, n){
    let combinedWord = ''; //empty string to return loop result to
    for(let i=0; i<n; i++){ // creating a loop for so long as our i variable is less than the number from the given parameter, concatenate the given word.
        combinedWord+=word;
    }
    return combinedWord;
};
console.log(multiWord('Marsha',3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;//used template literal to call the parameters and add space without using concatenation. 
}

console.log(fullName('Cody', 'Xoumanivong'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function returnSum(array){
    sum=0;
    for(i=0; i<array.length; i++){ //loop created to iterate through the numbers to add them together for the sum
        sum+=array[i];
    }
    if (sum > 100){//if statement inside function to determine greater or less than 100, and what boolean flag to log.  
        return true;
    }return false;


}
console.log(returnSum([50,50,0])); //will return false;
console.log(returnSum([50,50,50])); // will return true; 
console.log(returnSum([50,25,26])); // will return false since it's 101; 

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numberArray = (array) => { //created a loop to go through an array of given numbers and add them together
    let sum=0; 
    for(i=0; i<array.length; i++){
        sum +=array[i];
    }
    return sum/array.length; // returns the average 
}
console.log(`The average of this array is: `+ numberArray([5,3,4,2,1]));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let twoArrays = (array1,array2) => { // created two loops to iterate through each array to sum the numbers
    
    let sum1 = 0;
    let sum2 = 0;
    for (i=0; i<array1.length; i++){
        sum1+=array1[i];
    }
        let array1Average = sum1/array1.length;
        console.log(`array1 average is ` + array1Average); //wanted to log the result to compare numbers within console to make sure the boolean if statement held up. 

    for (x=0; x<array2.length; x++){
        sum2+=array2[x];
        
    }
        let array2Average = sum2/array2.length;
        console.log(`array2 average is ` + array2Average);

    if(array1Average>array2Average){
        return (`array 1 is larger:` + true);
    } else if (array1Average === array2Average){
        return (`The arrays are equal`);
    }    
        return (`array 1 is larger than array 2:` + false);
};

    console.log(twoArrays([4, 5, 6],[7, 8, 9]));// returns array 1 is larger than array 2: false
    console.log(twoArrays([50, 74, 68],[12, 17, 24])); //returns array 1 is larger than array 2: true
    console.log(twoArrays([1,2,3],[1,2,3])); // returns The arrays are equal

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    let willBuyDrink = (isHotOutside, moneyInPocket) => {
        
        if (isHotOutside && moneyInPocket > 10.50){
            return true + ` It's hot. Time for a cool drink and I have enough!`; 
            isHotOutside = true;
        }
            return false + ` I don't have enough for a cool drink, or it's not hot enough`;
    };

    console.log(willBuyDrink(true , 10)); //hot outside, but not enough money. Will return false
    console.log(willBuyDrink(false , 12));// not hot outside, but have enough money. Will return false;
    console.log(willBuyDrink(true , 15)); // hot outside and have enough money. Will return true;

// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

//i'm always forgetting how many days are in a certain month. Why not make a function that will tell me? 

let daysOfTheMonth = (month) => { //switch loop to group the months into how many days. 
    daysRes= ''; // I was getting an undefined when I used console.log inside the switch statement. I did some research and decided to declare an empty string variable and assign it values inside the switch cases.
    switch (month){
        
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            daysRes = (`There are 30 days.`);
            break;
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            daysRes = (`There are 31 days.`);
            break;
        case 'February':
            daysRes = (`There are 28 days`);
            break;

            default:
                daysRes = (`That's not a real month!`);
    } 
        return daysRes;
};

console.log(daysOfTheMonth('December')); //Returns 28 days 
// console.log(daysOfTheMonth('September'));//returns 30 days
// console.log(daysOfTheMonth('April'));//returns 30 days
// console.log(daysOfTheMonth('Month'));//returns default

