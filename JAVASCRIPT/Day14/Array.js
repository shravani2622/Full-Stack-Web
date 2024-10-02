//1.Array Declarstion and Intilization
var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
//2.Accessing:
console.log(jewelleryBox[3])
//3.Adding and Removing:
jewelleryBox.push("watch")
jewelleryBox.push("Bangles")
console.log(jewelleryBox)
jewelleryBox.pop()
jewelleryBox.pop()
console.log(jewelleryBox)
jewelleryBox.unshift("watch")
jewelleryBox.unshift("watch","bangles")
jewelleryBox.shift()
jewelleryBox.shift()
console.log(jewelleryBox)
 var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
 var newArray = jewelleryBox.slice(1,2)
 var newArray = jewelleryBox.slice(0,3)
 console.log(newArray)
 jewelleryBox.splice(index,count,",")
 console.log(jewelleryBox.splice(3,1))
 jewelleryBox.splice(2,3,"watch")
 jewelleryBox.splice(5,2,"watch","chain")
 console.log(jewelleryBox)
 //4.Finding and Combing
var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
 console.log(jewelleryBox.indexOf("Necklace"))
 console.log(jewelleryBox.indexOf("Rings"))
 console.log(jewelleryBox.join("jwl"))
 console.log(jewelleryBox)
 var string = "JAVASCRIPT";
 console.log(string.split("").reverse().join(""))
var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
  var smallbox = ["pen","Book"]
 var Bigbox = jewelleryBox.concat(smallbox)
 console.log(Bigbox)
 var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
 console.log(jewelleryBox.length)
 //5.Array include Looping
 var jewelleryBox = ["Rings","Necklace","Earrings","Bracelets"]
 for(var i=0;i<jewelleryBox.length;i++)
    {
        if(jewelleryBox[i].length>5){
            console.log(jewelleryBox[i])
        }
    }
   //printing Even Numbers
   var num =[1,2,3,4,5,6,7,8];
   for(var i=0;i<num.length;i++){
   // console.log(num[i])
    if(num[i]%2==0){
        console.log(num[i])
    }
   }



 
 


