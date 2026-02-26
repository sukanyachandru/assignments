/* Two types of data types in JavaScript
1. Primitive data types
2. Non-primitive data types
*/  

// Primitive data types //
//1. number: used to represent numeric values with or without decimal points
let age: number = 30;
let price = 19.99;
console.log(age); // Output: 30
console.log(price); // Output: 19.99
console.log(typeof age); // Output: "number"
console.log(typeof price); // Output: "number"


//2. string: used to represent text or a sequence of characters
let name:string = "John";
let message:string = 'Hello, World!';     
console.log(name); // Output: "John"
console.log(message); // Output: "Hello, World!" 
console.log(typeof name); // Output: "string"
console.log(typeof message); // Output: "string"    


//3. boolean: used to represent a logical value that can be either true or false
let isStudent:boolean = true;
let isEmployed:boolean = false; 
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof isEmployed); // Output: "boolean"

//4. null: used to represent the intentional absence of any object value
let emptyValue:null = null;
console.log(typeof emptyValue); // Output: "object" (this is a quirk in JavaScript) 

// 5. undefined: used to represent a variable that has been declared but has not been assigned a value
let uninitializedValue:undefined;
console.log(typeof uninitializedValue); // Output: "undefined"

// Non-primitive data types //
//1. Object: used to represent a collection of key-value pairs
interface empDetails {
    empName: string;
    empid: number;
    havingVisa: boolean;
    address: {
        city: string;
        zipCode: number;
        addressLine: string | number;
        country: string;
    }   
}

let empinfo: empDetails= {
    empName: "sukanya",
    empid: 1002,
    havingVisa: false,
    address: {
        city:"Bangalore",
        zipCode:560001,
        addressLine:" No3 HighGround",
        country:"India"
    }
}
console.log(empinfo);
console.log(empinfo.address.country);

//2. Array: used to represent a list of values
let fruits: (string | number) []= ["apple", 200, "banana", 300,  "grapes",400];
console.log(fruits);

//3. Map: used to represent a collection of key-value pairs where keys can be of any type
let myMap: Map<string, number> = new Map();
myMap.set("apple", 200);
myMap.set("banana", 50);    
myMap.set("grapes", 200);
console.log(myMap);
console.log(myMap.get("banana")); // Output: 200

//4. Set: used to represent a collection of unique values
let mySet: Set<string> = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("grapes");
mySet.add("apple");
console.log(mySet); // Output: Set { 'apple', 'banana', 'grapes' }

//5. Tuple: used to represent an ordered list of values of different types
let person: [string, number, boolean] = ["John", 30, true];
console.log(person); // Output: [ 'John', 30, true ]    


//6. function: used to represent a reusable block of code that performs a specific task
function launchTheApplication(BrowserName: string, URL:string):void{
    console.log("Launch the App " + BrowserName + " and URL " +URL); 
}

launchTheApplication("chrome", "www.google.com");

//7. any: used to represent a value of any type, allowing for flexibility but sacrificing type safety
let randomValue: any;
randomValue = 44;
console.log(randomValue); // Output: 44
randomValue = "Hello";
console.log(randomValue); // Output: "Hello"  
                                                                                                                                                                                                                                                                          


