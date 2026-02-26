// conditional statement
// if else statement
let age: number = 20;
if(age >= 18){
    console.log("You're eligible to vote");
}else{
    console.log("you're not eligible to vote");
}

//if else if statement
let marks:number = 85;
if(marks >= 85){
    console.log("Grade A, you passed with distriction");
}else if(marks>=60){
    console.log("Grade B, you passed with first class");
}else if (marks>=30){
    console.log("Grade C, your failed but you can try again");
}

// switch statement
let env: string = "prod";
switch(env){
    case "dev":
        console.log("development environment");
        break;          
    case "test":
        console.log("testing environment");
        break;  
    case "staging":
        console.log("staging environment");
        break;
    case "prod":
        console.log("production environment");
        break;
}