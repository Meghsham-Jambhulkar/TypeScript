//procedure oriented programming(pop)
function addition(no1:number , no2:number)
{
    var ans : number = 0
    ans = no1+no2
    return ans
}
function substraction(no1:number , no2:number)
{
    var ans : number = 0
    ans = no1-no2
    return ans
}
var value1:number=10
var value2:number=11

var ret : number =  0
ret = addition(value1,value2)
console.log("Addition is : "+ret)

ret = substraction(value1,value2)
console.log("Subtraction is : "+ret)


