// Operators/*******************
// Arithmetic Operators (+,-,*,/,%,++,--)
/********************/  
let a: number;
let b: number;
a=20;
b=10;
console.log("additional arithmetic Operator a + b = " +(a+b));  //30
console.log("subtraction arithmetic Operator a - b = " +(a-b)); //10
console.log("multiplication arithmetic Operator a * b = " +(a*b)); // 10*20=200
console.log("division arithmetic Operator a / b = " +(a/b)); // 20/10=2
console.log("modulus arithmetic Operator a % b = " +(a%b)); //  2*10=20 the result is 0
console.log("increment arithmetic Operator a++ = " +a++); // 20 the result is 21
console.log("decrement arithmetic Operator b-- = " +b--); // 10 the result is 9

// Assignment Operators (=,+=,-=,*=,/=,%=)
console.log("********************");
let c:number, d:number;
c=10;
d=20;
console.log(c=+d); //20
console.log(c+=d); // 10+20=30
console.log(c-=d); // 30-20=10                        
console.log(c*=d); // 10*20=200
console.log(c/=d); // 200/20=10
console.log(c%=d); // 10%20=10  

// Comparison Operators (==,===,!=,!==,>,<,>=,<=)
console.log("********************");  
// == vs ===    
// == operator compares only the value and ignores the type, operator is known as loose equality operator.
// === operator compares both value and type, operator is also known as strict equality operator,                          
let e:number, f:number; 
e=100;
f=100;
console.log(e==f); // true because == operator only compares the value and ignores the type
console.log(e===f); // false because === operator compares both value and type

// Logical Operators (&&, ||, !)
console.log("********************");  
let g:number, h:number;
g=20;
h=30;

console.log((g<=h) && (g==h)) ; // false because both g and h are not true
console.log((g>=h) ||(g==h)); // true because at least one of g or h is true
console.log(!g); // false because g is true and ! operator negates the value of g
console.log(!h); // true because h is false and ! operator negates the value of h   

/*true or false (|| OR)
true and false (&& and)*/ 

// Ternary Operator (condition ? expr1 : expr2)
console.log("********************");  
let i:number, j:number;
i=10;
j=20;
let maxResults = (i>j)? i:j;
console.log("maxResults = " +maxResults); // 20 because i is not greater than j so the result is j

// example of ternary operator
let age:number =18;
let canvote = (age>=18)? "yes can vote": "no can not vote"; 
console.log("canvote = " +canvote); // yes can vote because age is greater than or equal to 18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  