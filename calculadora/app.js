let op = parseInt(prompt('Qual operação deseja realizar?\n Adição = 1\n Subtracao = 2\n Multiplicacao = 3\n Divisao = 4\n'));
let result;
let number1;
let number2;

if (op >= 1 && op <= 4) {
    switch (op) {
        case 1:
            add();
            break;
        case 2:
            subtract();
            break;
        case 3:
            multiply();
            break;
        case 4:
            divide();
            break;
    }
} else {
    alert('Opção inválida!');
}

function add() {
    number1 = parseFloat(prompt('Numero 1:'));
    number2 = parseFloat(prompt('Numero 2:'));
    if (isNaN(number1) || isNaN(number2)){
        alert('Apenas números serão aceitos!');
    } else {
        result = number1 + number2;
        alert(`Resultado: ${result}`);
    }

}
function subtract() {
    number1 = parseFloat(prompt('Numero 1:'));
    number2 = parseFloat(prompt('Numero 2:'));
    if (isNaN(number1) || isNaN(number2)){
        alert('Apenas números serão aceitos!');
    } else {
        result = number1 - number2;
        alert(`Resultado: ${result}`);
    }
}
function multiply() {
    number1 = parseFloat(prompt('Numero 1:'));
    number2 = parseFloat(prompt('Numero 2:'));
    if (isNaN(number1) || isNaN(number2)){
        alert('Apenas números serão aceitos!');
    } else {
        result = number1 * number2;
        alert(`Resultado: ${result}`);
    }
}
function divide() {
    number1 = parseFloat(prompt('Numero 1:'));
    number2 = parseFloat(prompt('Numero 2:'));
    if (isNaN(number1) || isNaN(number2)){
        alert('Apenas números serão aceitos!');
    } else {
        result = number1 / number2;
        alert(`Resultado: ${result}`);
    }
}
