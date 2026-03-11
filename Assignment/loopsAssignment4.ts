const trans: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let debitTotal : number = 0;
let creditTotal : number = 0;
let creditTotalAmt: number =0;
let DebitTotalAmt: number = 0;
let suspeciousAmt : number =0;

for (const amount of trans){
    if (amount > 0){
        creditTotal++;
        creditTotalAmt += amount;
        if (amount >10000){
            console.log(`Suspicious credit transaction with Amount: ${amount}`);
            suspeciousAmt++;
        }   
    }
    else {
        if (amount < -10000){
            debitTotal++;
            DebitTotalAmt -=amount;
            console.log(`Suspicious debit transaction with Amount: ${amount}`);
            suspeciousAmt++;
        }
    }
}

const finalBal: number = creditTotalAmt - DebitTotalAmt;
console.log("----- Transaction Summary -----");     
console.log("Total number of credit transactions:", creditTotal);
console.log("Total number of debit transactions:", debitTotal);     
console.log("Total amount credited:", creditTotalAmt);  
console.log("Total amount debited:", DebitTotalAmt);
console.log("Final remaining amount in the account:", finalBal);
console.log("Total number of suspicious transactions:", suspeciousAmt);


export{};
