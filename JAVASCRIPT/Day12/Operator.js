//1.Addition Operator
console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2%3)
console.log(2/3)
//2.Assignment Operator
 var x=1;
 var y=x+1;
 var y=x-1;
 var y=x*1;
 var y=x%1;
 var y=x/1;
   x+=1
  x*=1
  x/=1
  x%=1
  console.log(x)
 //3.Comparison Operator
 console.log(2===2)
 console.log(2!==3)
 //4.Logical Operator
 var iswarm = true;
 var isRainy = false;
console.log(iswarm&&isRainy)
console.log(iswarm||isRainy)
//5.Bitwise Operator
console.log(0&1)
console.log(0|1)
console.log(5&3)
console.log(5|3)
//6.Unary Operator
var a=5;
var b=++a
var b=a++
var b=--a
var b=a--
console.log(b)
//7.typeof operator
 console.log(typeof null)
 console.log(typeof [])
 console.log(typeof {})
 console.log(typeof x)
 console.log(typeof "Shravani")
 //Control Flow:
 //2).Conditional Flow:
   var trafficLight = "Red";
    var trafficLight = "Green";
   var trafficLight = "Yellow";
   if(trafficLight == "Green"){
    console.log("Light is Green: Move")
   }
   //else{
    //console.log("please stop")
   //}
   else if(trafficLight == "Yellow") 
   {
    console.log("Light is Yellow: Move")
   }
   //Conditional Statement:
   console.log((trafficLight == "Yellow")?"Light is Yellow: Move":"Please Stop")

