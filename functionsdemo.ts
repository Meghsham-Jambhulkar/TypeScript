function func()
{
    console.log("inside function")
}
func() // function call

function gun (no:number)
{
    console.log("Inside Gun : "+no)

}
gun(11)
function sun (no:number):number
{   
    var i : number = no //Local Variable created inside function and used inside function
    i++
    return i
}
var ret : number = 0
var a : number = 10
ret = sun(a)
console.log("return value is :"+ret)