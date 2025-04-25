function calculate() {
    
    let operand1 = document.getElementById("operand1").value;
    let operand2 = document.getElementById("operand2").value;
    let operator = document.getElementById("operator").value;

    
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("result").innerText = "Lūdzu, ievadiet derīgus skaitļus.";
        return;
    }

    let result;
    
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 === 0) {
                document.getElementById("result").innerText = "Dalīšana ar nulli nav atļauta!";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            document.getElementById("result").innerText = "Nederīgs operators. Lūdzu, izvēlieties (+, -, *, /).";
            return;
    }
   
    document.getElementById("result").innerText = `Rezultāts: ${result}`;
}