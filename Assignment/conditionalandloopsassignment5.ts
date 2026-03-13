const employeeDetails: Map<string,number[]> = new Map();
employeeDetails.set("Alice Johnson",[75000, 5.1, 4.2])
employeeDetails.set("Bob Smith",[68000, 3.2, 3.8])
employeeDetails.set("Carol Davis",[82000, 7.1, 4.5])
employeeDetails.set("David Brown",[90000, 10.2, 2.5])
employeeDetails.set("Eva Green",[60000, 2.4, 3.5])

const hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee and store in hikePercentage
for (const key of employeeDetails.keys()) {
  const data = employeeDetails.get(key)!;
  const baseSalary = data[0]!;
  const yearOfExperience = data[1]!;
  const yearEndRating = data[2]!;

const hikePercentage = calculateHike(baseSalary, yearOfExperience, yearEndRating);
  hikeMap.set(key, hikePercentage);
}

console.log("Hike Percentages for Employees:");
console.log(hikeMap);

function calculateHike(baseSalary:number, experience: number, performanceRating: number): number{
let variablepay =0;
let bonus = 0;
let reward = 0;

if (performanceRating >=4){
    variablepay =15;
    bonus = 1500;
}
else if (performanceRating >=3){
    variablepay = 10;
    bonus= 1200;
}
else {
    variablepay = 3;
    bonus = 300;
}

if (experience > 5){
    reward = 5000;
}
const totalHike = (baseSalary * variablepay / 100) + bonus + reward;
return (totalHike / baseSalary)* 100;
}

export{};