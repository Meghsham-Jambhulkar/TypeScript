var ret : number =0 // global variable
//Regular Functions 

function addition1(no1:number ,no2:number):number
{
    var ans : number = 0 // local variable
    ans = no1+no2;
    return ans
}
ret = addition1(10,11);
console.log("Addition is : "+ret);

// Anonymous function (Function without name )
var addition2 =function(no1:number,no2:number):number
{
    var ans : number = 0 // local variable
    ans = no1+no2;
    return ans
}
ret = addition2(10,11);
console.log("Addition is : "+ret);

// Fat arrow or Lambda or Arrow function 
var addition3=(no1:number,no2:number):number=>
{
    var ans : number = 0 // local variable
    ans = no1+no2;
    return ans
}
ret = addition3(10,11)
console.log("Addition is : "+ret);