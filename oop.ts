//object oriented programming (OOP)

class arithmatic
{
    //characteristics/data
    no1:number 
    no2:number

    constructor(a:number,b:number)
    {
        this.no1=a
        this.no2=b
    }

    addition()//behaviour
    {
        var ans : number = 0 // local variable 
        ans = this.no1+this.no2
        return ans
    }
    substraction()//behavious /function
    {
        var ans : number = 0//local variable 
        ans = this.no1-this.no2
        return ans
    }
}

var obj1 = new arithmatic(10,11);


var ret : number=0

ret = obj1.addition()
console.log("Addition is : "+ret)

ret = obj1.substraction()
console.log("Subtraction is : "+ret)



// what do u want to do ?
// addition and substraction
// ans gives u behaviours or functions

// what do u require to attain that 
// gives characteristics and variables
// 2 for number and 1 for answer
