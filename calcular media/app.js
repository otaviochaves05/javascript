
let grade1 = prompt('Digite a primeira nota: ');
let grade2 = prompt('Digite a segunda nota: ');
let grade3 = prompt('Digite a terceira nota: ');
let notas = [grade1, grade2 ,grade3];
let media;

grade1 = parseFloat(grade1);
grade2 = parseFloat(grade2);
grade3 = parseFloat(grade3);


if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)){
    alert('ERRO!!!! Digite apenas numeros!');
} else {
    media = calcMedia();
    alert(`A media é ${media.toFixed(2)}`);
}


function calcMedia(){
    let total = 0;
    let cont =0;
    for (cont = 0; cont < notas.length; cont++){
        total+= parseFloat(notas[cont]);
    }
    return total/cont;
}

