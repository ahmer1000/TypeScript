import inquirer from "inquirer";

const keyInp:{
firstDigit:number,
secondDigit:number,
operator:string} =await inquirer.prompt([
    {
        type:"number",
        name:"firstDigit",
        message:"kindly enter Number"
    },
    
    {
        type:"number",
        name:"secondDigit",
        message:"kindly enter Number 2" 

    },
    {

        type:"list",
        name:"operator",
        choices:["Add(+)","subtract(-)","Multiplication(*)","Division(/)"],
        message:"kindly enter Mathametical Operation",

    } ])

    if(keyInp.operator.charAt(keyInp.operator.length-2)=="+")
            {
    console.log(keyInp.firstDigit+keyInp.secondDigit);}

    if(keyInp.operator.charAt(keyInp.operator.length-2)=="-")
    {
console.log(keyInp.firstDigit+keyInp.secondDigit);}

if(keyInp.operator.charAt(keyInp.operator.length-2)=="*")
{
console.log(keyInp.firstDigit+keyInp.secondDigit);}

if(keyInp.operator.charAt(keyInp.operator.length-2)=="/")
{
console.log(keyInp.firstDigit+keyInp.secondDigit);}