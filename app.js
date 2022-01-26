//Asking the questions
let num1 = Number(prompt("Please enter your first number"));
if (isNaN(num1)) {
    result = "Please enter a numerical value for the first question!";
} else {
    let num2 = Number(prompt("Please enter your second number"));
    if (isNaN(num2)) {
        result = "Please enter a numerical value for the second question!";
    } else {
        let op = prompt("Please Choose an Operator (*, +, -, /)");
        if (op === "*") {
            let answer = num1*num2;
            document.body.innerHTML="Your answer is: "+answer;
        } else if(op==="+"){
            let answer = num1+num2;
            document.body.innerHTML="Your answer is: "+answer;
        } else if(op==="-"){
            let answer = num1-num2;
            document.body.innerHTML="Your answer is: "+answer;
        } else if(op==="/"){
            let answer = num1/num2;
            document.body.innerHTML="Your answer is: "+answer;
        } else {
            result = "Please enter one of the following operators!";
        }
            }
}

document.body.innerHTML=result;


















