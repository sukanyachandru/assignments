/* Two types of data types in JavaScript
1. Primitive data types
2. Non-primitive data types
*/  

// Primitive data types //
//1. number: used to represent numeric values with or without decimal points
let age = 30;
let price = 19.99;
console.log(typeof age); // Output: "number"
console.log(typeof price); // Output: "number"


//2. string: used to represent text or a sequence of characters
let name = "John";
let message = 'Hello, World!';      
console.log(typeof name); // Output: "string"
console.log(typeof message); // Output: "string"    


//3. boolean: used to represent a logical value that can be either true or false
let isStudent = true;
let isEmployed = false; 
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof isEmployed); // Output: "boolean"

//4. null: used to represent the intentional absence of any object value
let emptyValue = null;   
console.log(typeof emptyValue); // Output: "object" (this is a quirk in JavaScript, null is considered an object)

//5. undefined: used to represent a variable that has been declared but has not been assigned a value
let uninitializedVariable;
console.log(typeof uninitializedVariable); // Output: "undefined"

// Difference between the null and undefined data types
/* Undefined - searching for a house but not confirmed.
null -house finialized but not yet moved in.
*/

// Non-primitive data types //
//1. Object: used to represent a collection of key-value pairs
let empDetails = {
    name: "John",
    age: 30,
    isEmployed: true,        
    address :{  
        city: "New York",
        state: "NY",
        country: "USA"
    }
}
console.log(empDetails);
console.log(empDetails.name); // Accessing the name property of the empDetails object
console.log(empDetails.address.city); // Accessing the city property of the address object within empDetails    

//2. Array: used to represent an ordered collection of values
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", 100, false, "banana", 50,true, "orange", 40, false];
console.log(numbers);
console.log(fruits[0]); // Accessing the first element of the fruits array    

//3. map: used to represent a collection of key-value pairs where the keys can be of any data type
let mapEmpDetails = new Map();
mapEmpDetails.set("name", "sukanya");
mapEmpDetails.set("age", 30);
mapEmpDetails.set("HavingVisa", true);
mapEmpDetails.set("address", {
    city: "Bangalore",
    ZipCode: "560001",
    addressLine: "No3 HighGround",
    country: "India"
})

console.log(mapEmpDetails.get("name")); // Output: "sukanya"
console.log(mapEmpDetails.get("address").city); // Output: "Bangalore"

//4.set: used to represent a collection of unique values
let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
// uniqueNumbers.add(30); // Adding a duplicate value to the set, it will not be added as sets only store unique values
uniqueNumbers.delete(20); // Removing the value 2 from the set
console.log(uniqueNumbers); // Output: Set(6) { 1,3 } due to the delete method, the value 2 is removed from the set and only 1 and 3 remain.

//6. Date: used to represent a specific point in time
let currentDate = new Date();
console.log(currentDate); // Output: current date and time in the default format\
console.log(currentDate.getDate()); // Output: current day of the month (1-31)
console.log(currentDate.getMonth() + 1); // Output: current month (0-11, so we add 1 to get the correct month number)
console.log(currentDate.getFullYear()); // Output: current year (4 digits)  
console.log(currentDate.getHours());    // Output: current hour (0-23)
console.log(currentDate.getMinutes());  // Output: current minute (0-59)
console.log(currentDate.getSeconds());  // Output: current second (0-59)
console.log(currentDate.getMilliseconds());


//7. Function: used to represent a reusable block of code that performs a specific task
function launchtheapplication(BrowserName, URL){
    console.log("launch the application: " + BrowserName);
    console.log("Launch the URL: " + URL);
}
// calling the function
launchtheapplication("edge", "www.google.com");



