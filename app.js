#! /usr/bin/env node 
import inquirer from "inquirer";
// userData
let myBalance = 10000;
let myPin = 55667;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number",
    }
]);
// Choices
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select any Operation what do you want",
            type: "list",
            choices: ["withDraw", "Check Balance", "Fast Cash"]
        }
    ]);
    // WithDraw
    if (operationAns.operation === "withDraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry!you don't have enough balance to withDraw this amount");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    // Check Balance
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    // Fast Cash
    else if (operationAns.operation === "Fast Cash") {
        let fastCashOperator = await inquirer.prompt([
            {
                name: "Cashlist",
                type: "list",
                message: "Select the cash do you want to withdraw",
                choices: [500, 1000, 2000, 5000]
            }
        ]);
        myBalance -= fastCashOperator.Cashlist;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    //When user entered wrong pin hai
}
else {
    console.log("Incorrect Pin Code");
}
