//Task1: Function to Reverse a String
function string(name) {
    var namereverse = name.split("").reverse().join("")
    console.log(namereverse)
}
string("shravani")
//Task 2: Function to Calculate Factorial
//Objective:Write a recursive function that calculates the factorial of a number
function factorial(n){
    if(n === 0){
        return 1
    }
    return n*factorial(n-1)
    
}
//console.log(factorial(5));
//console.log(factorial(6));
//console.log(factorial(10));
console.log(factorial(15));*/
// Task 3: Function to Generate Fibonacci Sequence
//Objective: Write a function that generates the first n numbers in the Fibonacci sequence.

function fibonacci(n){
   var  fib = [0,1];
   for(var i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
 }
return fib.slice(0,n);
}
//console.log(fibonacci(2));
//console.log(fibonacci(4);
//console.log(fibonacci(5);
console.log(fibonacci(15));
//4. Function to Perform Multiple String Operations
//Objective: Write a function that takes a string and returns an object containing the string's length, the string in uppercase, and the string in lowercase.
function stringoperations(text){
    console.log(text.length)
    console.log(text.toUpperCase())
    console.log(text.toLowerCase());
    }
//stringoperations("javascript is programming")
//stringoperations("Hema coding school")
//stringoperations("anusha")
stringoperations("html is programming language")*/
//5.Function to Count Vowels in a String
//Objective: Write a function that counts the number of vowels in a given string.

function countVowels(str){
    var Vowels = ["a","e","i","o","u"];
    var count=0;
    for(var letter of str.toLowerCase()){
        if(Vowels.includes(letter)){
            count++;
        }
    }
return count;
    

}
//console.log(countVowels("SHRAVANI"))
//console.log(countVowels(" I AM STUDENT"))
//console.log(countVowels("JAVASCRIPT IS PROGRAMMING LANGUAGE"))
console.log(countVowels("Shivasahithi"))*/
//6.Task:Function to Flatten a Nested Array
//Objective: Write a function that flattens a nested array into a single array.
function flattenArray(nestedArray){
    singleArray = nestedArray.flat()
    console.log(singleArray)

}
//flattenArray([1,2,3,[4,5]])
//flattenArray([1,2,[4,5,6],[6,4,5]])
//flattenArray([1,[2,3],4,5,6])
flattenArray([[1,2,3],[4,6]])

        

    

