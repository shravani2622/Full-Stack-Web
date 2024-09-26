//TASK2:Print the First 10 Multiples of 5
var num = 5;
for(var i=1;i<=10;i++){
   var res=num*i;
   console.log(num+ "*" +i+ "=" +res) ;   
 }
//TASK3:Calculate Factorial of a Number
const prompt = require('prompt-sync')();
var num = prompt("Enter positive Number:");
fact = 1
for(i=1;i<=num;i++){
  fact*=i;
  console.log( "factorial is:"+fact);
}
//TASK4:FizzBuzz

for(i=1;i<100;i++){
  if(i%3==0&&i%5==0){
    console.log("FizzBuzz");
  }
  else if(i%3==0){
    console.log("fizz");
  }
  else if(i%5==0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}


    
