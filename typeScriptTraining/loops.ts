// loop statements = for, while, do-while

//For Loop= will be executed when the number of iterations is known. It is used to execute a block of code repeatedly for a specified number of times. The syntax of a for loop is as follows:
//syntax = initialization, condition, increment/decrement 

let empName:string = "Sukanya";
for (let i:number = 1; i <= 5; i++) {
    console.log(i + " " + empName);
}

//While Loop= will be executed when the number of iterations is not known. It is used to execute a block of code repeatedly until a specified condition is true. The syntax of a while loop is as follows:
//syntax = condition    
let num:number = 1;
while (num > 0) {
    let isPrint:boolean = false; // assume this value is coming from some logic or user input

    if (isPrint || num === 10){
        break; // Terminate the loop if isPrint is true or num is 0
    }
        console.log(num);
        num++;
    }
    
