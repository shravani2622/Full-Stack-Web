//1.Traditional Function:
//ex1:
/*function addfunction(num1,num2){
    console.log(num1+num2)
}
addfunction(5,6)
addfunction(8,7)
addfunction(8,9)*/
//ex2:
/*function juicemixer(fruitA){
    console.log("juice of",fruitA)
}
juicemixer("apple")
juicemixer("mango")*/
//2.Anonamious function:
/*var juicemixer = function(fruitA){
    console.log(fruitA,"juice")
}
juicemixer("graphs")*/
/*var juicemixer = function(fruitA){
    console.log(fruitA,"juice")
    //return fruitA,"juice";=>return can not accept the function
}
juicemixer("graphs")*/
//3.self invoked function:
/*(function(){
    console.log("hema")
} ())*/
//4.functions include conditions:
/*function palindrom(string) {
    var stringreverse = string.split("").reverse().join("")
    if (stringreverse == string) {
        console.log("This is palindrom", string)
    }
    else {
        console.log("This is not a palindrom", string)
    }
}
palindrom("madam")*/
//5.functions include loops:
function fabinnaci(V){
    var a=0;
    var b=1;
    var sum=0;
    for(var i=0;i<V;i++){
        sum= a+b;
        a=b;
        b=sum;
        console.log(b)
  }

}
fabinnaci(50)





