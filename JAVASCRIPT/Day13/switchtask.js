//TASK1:SimpleCaluclator
const prompt = require('prompt-sync')();
var num1 = parseInt(prompt('Enter First Number:'));
var num2 = parseInt(p6rompt('Enter secound Number:'));
var Operator =prompt ('Enter Operator:');
switch (Operator) {
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "%":
        console.log(num1%num2);
        break;
    default :
       console.log("nothing will be print")
       break;
    
}
