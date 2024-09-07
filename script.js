// 1) Sequência de Fibonacci
let btnFibo = document.querySelector('#btnFibo')
let resultFibo = document.querySelector('#resultFibo')
let inpNumberFibo = document.querySelector('#inpNumberFibo')

btnFibo.addEventListener('click', () => {
    let numInicio = 0
    let numProx = 1
    for (let i = 0; i < inpNumberFibo.value; i++) {
        let cont = numInicio + numProx
        numInicio = numProx
        numProx = cont
        console.log(numProx)
        if (numProx == Number(inpNumberFibo.value)) {
            resultFibo.innerHTML = `O número ${inpNumberFibo.value} tem na sequencia`
            return
        } else {
            resultFibo.innerHTML = `O número ${inpNumberFibo.value} NÃO tem na sequencia`
        }
    }    
})

// =================================================================== 
// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

let capturarString = document.querySelector('#capturarString')
let btnString = document.querySelector('#btnString')
let resultContadorString = document.querySelector('#resultContadorString')

btnString.addEventListener('click',()=>{
    let strLower = capturarString.value.toLowerCase()
    let contador = 0;
    for(let i = 0; i < strLower.length; i++){
        if(strLower[i] == 'a'){
            contador++
        }
    }
    resultContadorString.innerHTML = `O numero de letras A no seu texto são: ${contador}`
})

// =================================================================== 
// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let indice = 12;
let soma = 0;
let k = 1;
while(k < indice) {
    k++
    soma = soma + k
}
console.log(soma)

// Resultado = 77

// =================================================================== 

// 4) Descubra a lógica e complete o próximo elemento:

/*
a) 1, 3, 5, 7, ___

É formada por numeros impares consecutivos
Resposta: 9

=============
b) 2, 4, 8, 16, 32, 64, ____

Cada número é o dobro do anterior.
Resposta: 128

=============
c) 0, 1, 4, 9, 16, 25, 36, ____

A sequência são os quadrados perfeitos de números inteiros
Resposta: 49

=============
d) 4, 16, 36, 64, ____

Quadrados de números pares: 2², 4², 6², 8², ...
Resposta: 100

=============
e) 1, 1, 2, 3, 5, 8, ____

A sequência segue a lógica de Fibonacci que foi feita anteriormente, onde cada número é a soma dos dois anteriores.
Resposta: 13

=============
f) 2, 10, 12, 16, 17, 18, 19, ____

A sequência alterna entre adicionar 8 e 1.
Resposta: 27
*/

// ===================================================================

/*
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

Na segunda sala, ligamos o interruptor 1 por 15 minutos, desligamos, e em seguida ligamos o interruptor 2 e vamos até a primeira sala. A lâmpada que estiver acesa corresponde ao interruptor 2, a que estiver quente ao interruptor 1, e a lâmpada que resta só pode ser do interruptor 3.

*/

