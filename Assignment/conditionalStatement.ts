function evaluateLoan(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number): void{

// Display initial message
    console.log("Loan Evaluation Result for: " + customerName);
    // Step 1: Check credit score
    if (creditScore > 750){
        console.log("Approved the loan with excellent credit scrore");
        // If credit score is between 650 and 750, further checks are needed
        // Step 2: Check income, employed and debt to income ratio if the credit score is less than 650
    } else if ( creditScore >=650 && creditScore <=750){
        if (income >=50000){
            console.log("approved the loan, the employee has more than 50000 income");
        } else {
                console.log("rejected the loan, the income is less than 50000")
        }
        if (isEmployed){
            console.log("approved the loan, the employee is employeed");
        } else {
            console.log("rejected the loan, the employee is not employeed")
        }
        if (debtToIncomeRatio <= 0.4){
                console.log("approved the loan, the debt to income ratio is less than 0.4");
        } else {
                console.log("rejected the loan, the debt to income ratio is greater than or equal to 0.4");
        }}}


    evaluateLoan(
    "John Doe",
    720,
    40000,
    false,
    0.3
    );