varva
function main():void
{
    var no: number = 12
    var bret: boolean;

bret = CheckEven(no)
if(bret == true)
{
    console.log("It is even")
}
else
{
    console.log("it is odd")
}
function CheckEven(value: number ):boolean
{
    if ((value% 2)==0)
    {
        return true
    }
    else 
    {
        return false
    }
}
}
main();
