//Task 1: Create and Access Object Properties
//Objective: Create an object representing a book and access its properties.
var book = {
    title:"Weired stuff",
    author:"Richard Tulloch",
    publishedyear:2004,
    genre:"Fantasy"
}
console.log(book.title)
console.log(book.author)
console.log(book.publishedyear)
console.log(book.genre)
console.log(book["title"])
console.log(book["author"])
console.log(book["publishedyear"])
console.log(book["genre"])
//Task 2: Modify and Delete Object Properties
//Objective: Modify and delete properties of an existing object.
 var car = {
    make: "BMW",
    model:539 ,
    year: 2021,
    color:"red"
 };
 delete car.year;
 car.color = "white";
 console.log(car)
 //Task 3: Nested Objects
//Objective: Create an object with nested objects and access their properties.
var student = {
    name:"Anusha",
    age:21,
    address:{
        street:"Kukatpally",
        city:"HYD",
        state:"Telangana"
    },
    courses:{
        fullstackwebdevelopment:"A",
        frontenddevelopment:"O",
        backenddevelopment:"B",
        javafullstack:"O"
    },
};
console.log(student.address.city)
console.log(student.address.state)
console.log(student["courses"]["javafullstack"])
//Task4:Looping Through Object Properties
//Objective: Loop through the properties of an object and print them.
var employee = {
    name:"Srinivas",
    position:"Head of deparment",
    deparment:"Computer scine and Engineering",
    salary:60000
}
for(var key in employee){
    if(employee.hasOwnProperty(key)){
        value = employee[key];
        console.log(key,value)
    }
    
}
//Task 5: Using Methods in Objects
//Objective: Add methods to an object and call them
var calculator = {
    num1:5,
    num2:10,
    add:function(){
        return this.num1+this.num2;
    },
    subtract:function(){
        return this.num1-this.num2;
    },
    multiply:function(){
        return this.num1*this.num2;
    },
    divide:function(){
        return this.num1/this.num2;
    }
};
console.log(calculator.add())
console.log(calculator.subtract())
console.log(calculator.multiply())
console.log(calculator.divide())


// TASK 6:Nested Object Iteration
//Objective: Create an object with nested objects and use nested for...in loops to print all properties and their values.
var company = {
    name:"amazon",
    location:"HYD",
    Employees :{
        srinivas:"HR",
        mahesh:"Manager",
        srinu:"Developer",
        manisha:"Teamleader"
    }
}
for(var key in company){
    if(key === 'Employees'){
    console.log("Employees:")
   for (var employee in company[key]){
console.log(employee+":"+ company[key][employee]);
}
}
else{
    console.log(key+":"+ company[key]);
}
}
//Task 7 :Calculate Average Age
//Objective: Create an object with a list of people and their ages, then use a for...in loop to calculate the average age.
var people = {
    srija:21,
    anusha:41,
    manisha:30,
    laxmi:24,
    varsha:31
};
var totalAge=0;
var count=0;

for( var person in people){
    totalAge +=people[person];
    count++;
    }
    var averageAge = totalAge/count;
    console.log("Average Age:"+averageAge)







