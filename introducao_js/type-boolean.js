const value1 = true;
const value2 = false;

if (value1) {
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}
//Saída: É verdadeiro

if (!value1) {
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}
//Saída: É falso

//Trusty/Falsy -> variáveis vazias ou com valor 0, se submeter a um teste lógico, ficam boolean.

const value3 = '';

if (value3) {
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}
//Saída: É falso

//operador ternário
(Logica) ? (entao) : (senao);

const resultado = (value3) ? 'É verdadeiro' : 'É falso';
console.log(resultado);
//Saída: É falso    
