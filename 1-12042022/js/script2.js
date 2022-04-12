/*
Script para o calculo das operações
matematicas:
       -Soma;
       -Subtração;
       -Multiplicação
       -Divisão
       -Resto.
Será necessario mas 2 variaveis para 
perceber os números dos usuarios
*/

var numero1
var numero2

//para obter o número digitado pelo usuario usaremos
//o comando prompt(quem um input para dados) 
numero1 = prompt("Digite um numero","0");
numero2 = prompt("Digite outro numero");

//  Converter para inteiro com parseInt//
var soma = paseInt(numero1) + paseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

alert("O resultado das operações é: \n\n "+
       "soma: " +soma+
       "\nSubtração: "+ subtrair+
       "\nMultiplicação: "+multiplicar+
       "\nDivisão: "+dividir+
       "\nResto: "+resto);