
let a = parseFloat(prompt("Enter variable a: "));
let b = parseFloat(prompt("Enter variable b: "));
//console.log(typeof(a)); // izvada mainīgā a t
//console.log(typeof(b));
let result;
let operators = prompt("Enter operator: ");

while(turpināt)
{
    let a = parseFloat(document.getElementById("a_var"));
    let b = parseFloat(document.getElementById("a_var"));
    let operators = prompt("Enter operator: ");

}
    switch(operators)

{
    case"+":
        result = a + b;
    break;

    case"-":
        result = a - b;
    break;

    case"*":
        result = a * b;
    break;

    case"/":
    if ( b !=0)
        result = a / b;

    break;

    case"%":
        result = a % b;
    break;

    case"!":
         result = 1
        for(let i = 1; 1 < a ; i ++)
        {
             //result = result * 1;
             result *= i;
        }
    break;

    default:
        console.log("Error: invalid operator")
}
console.log("Result: ", result);
let user = prompt("Turpināt ? (Y/N)") ;
if (user == "N")
{
    turpinat = false;
}
