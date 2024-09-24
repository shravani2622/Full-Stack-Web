//Task 1: Check if a Number is Positive, Negative, or Zero
var num = -2;
if(num>0){
    console.log("Positive")
}
else if(num==0){
   console.log("Zero")
}
else{
    console.log("Negative")
}

//Task 2: Determine Age Group
 
var age = 25;
if(age <=(13-17)){
    console.log("Tenage")
}
else if(age >=(13-17)){
    console.log("Young")
}
else{
   console.log("Children")
}

//Task 3: Check if a Year is a Leap Year
  var year =2020;
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0 ){
      console.log(year,":is a Leap Year");
  }
  else{
      console.log(year,":is NOT a Leap Year");
  }



//Task 4: Check if a Character is a Vowel or Consonant
  var vowels = ['a','e','i','o','u'];
  if(charecter = vowels){
    console.log("given Character is vowel")
  }
  else{
    console.log("given Character is Consonent")
  }

