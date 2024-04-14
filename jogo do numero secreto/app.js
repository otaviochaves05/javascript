//JOGO DO NUMERO SECRETO
alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto) {
        break;        
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        } 
        tentativas++;
    }  
}

let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens voce acertou o numero secreto ${numeroSecreto} com ${contador} ${palavraTentativa}`);


//if(contador>1){
//    alert(`Parabens voce acertou o numero secreto ${numeroSecreto} com ${contador} tentativas`);
//} else {
//    alert(`Parabens voce acertou o numero secreto ${numeroSecreto} com ${contador} tentativa`);
//}





/*
----------------------------------------------------
Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.


let numero;
numero = prompt('Digite um numero');
let contador = numero;
while(contador>=0){
    console.log(`${contador}`);
    contador--;
}


-------------------------------------------------
Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.


let numero;
numero = prompt('Digite um numero');
let contador = 0;
while(contador<=numero){
    console.log(`${contador}`);
    contador++;
}
*/