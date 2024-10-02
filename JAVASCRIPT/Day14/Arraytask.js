//Task 1 :Find  Maximum Element
var numbers = [23,45,67,12,89,34];
var max = Math.max(...numbers)
console.log(max)
//Task 2: Reverse Array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse())
//Task 3 : Find Unique Elements
var numbers = [1, 2, 3, 1, 2, 4, 5, 4, 6];
var newArray = [1,2,3,4,5,6];
console.log(newArray)
//Task 4 :Flatten a Multidimensional Array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
 ]
 FlattenArray = matrix.flat();
 console.log(FlattenArray);
 
 //Task 5: Find the Average of Array Elements
var  numbers = [1, 2, 3, 4, 5];
var avaragenumber = 0;
for( var  i =  0; i<numbers.length; i++){
    avaragenumber += numbers[i] / numbers.length;
    }
console.log(avaragenumber)
//Task 6: Find All Pairs of Elements with a Given Sum
var array = [1, 2, 3, 4, 5, 6, 7];
var matrix =[]
for(i=0;i<array.length;i++){
    for (j=i+1;j<array.length;j++) {
   if(array[i]+array[j] == 8)
        //console.log([array[i],array[j]])
        matrix.push([array[i],array[j]]);
       }

}
console.log(matrix)



