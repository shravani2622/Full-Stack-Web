//1.While loop
var x=1;
while(x<5){
   console.log(x)
    x++;
}
var wheel = "start";
var count = 0;
while(wheel == "start"){
    console.log("wheel has stared")
    count++;
    if(count == 5){
        wheel ="stop";
        console.log("wheel is stoped")
    }
}
//2.dowhile loop
var x=1;
do {
   console.log(x)
    x++;
 } while (x<5);
 //3.For loop
 //printing Even Numbers 0-50
   for(var x=0;x<50;x++){
    if(x%2==0){
        console.log(x)
    }
   }
//4.Nested for loop
for(var i =0;i<10;i++){
   console.log(i, "Loop")
    for(var j=0;j<2;j++){
        console.log(j, "Nested Loop")
    }
}
//Printing 0-50 prime numbers
for(var x=0;x<50;x++){
   var count=0;
   if(x>2){
   for(var y=2;y<x;y++){
    if(x%y==0){
        count++;
    }
   }
   if(count==0){
    console.log(x)
  }
}
}
 