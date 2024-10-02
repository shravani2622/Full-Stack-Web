//1.object creation:
/*var student = {
    name:"Hema",
    age:20,
    isMarried:false,
    greet:function(){}
}
console.log(student)*/
//2.constructor object:
/*var person = new Object()
person.Name = "Mahesh"
person.age = 20
person.greet= function(){}
console.log(person)*/
//3.function constructor object:
  /*function person(name,age){
    this.Name = name;
    this.Age  = age;
    this.greet = function(){
        return " My Name is "+""+ this.Name 
    }

  }
  var person = new person("Hema",22);
  //console.log(person)
  console.log(person.greet())*/
  //4.Accessing Properties:
   /*var student = {
      name:"Hema",
      age:23,
      isMarried:false,
      greet:function(){
        return "Hello Object"
      }
   }
   //console.log(student)
   //console.log(student.age)
   //console.log(student.name)
   //console.log(student.greet())
    //console.log(student["age"])
    //console.log(student["name"])
    console.log(student["greet"]())*/
    //5.extend objects:
    /*var student = {
        name:"Hema",
        age:21,
        isMarried:false,
        greet:function(){
            return "Hello Object"
        },
        address:{
            houseNumber:123,
            street:"Hyd"
        },
        contact:{
            phone:1234,
            mail:"mahi@gmail.com"
        },
    };
    //console.log(student["contact"]["phone"])
    //console.log(student.contact.phone)
    console.log(student.address.houseNumber)*/
    //6.Object includes Loop:
    /*var student= {
        name:"Hema",
        age:23,
        isMarried:false,
        greet:function(){
            return "Hello Object"
        },
        address: {
           houseNumber:123,
           street:"Hyd"
        },
        contact:{
            phone:1234567,
            mail:"mahi@gmail.com"
        },

    };
    for (var key in student){
        //console.log(key)
        //console.log(student[key])
        //console.log(typeof student[key])
        if(typeof student[key] == "function"){
            console.log(student[key]())
        }
    }*/
   //7.object Methods: 3 a)object.keys(obj) b)object.value(obj) c)object.entries(obj)
    var student = {
        name:"Hema",
        age:12,
        isMarried:false,
        greet:function(){}
    }
    //console.log(Object.keys(student));  
    //console.log(Object.values(student));
    console.log(Object.entries(student));
