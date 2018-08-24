soma = (a,b) => {
   return a + b;
}

sub = (a,b) => {
    return a - b;
}

div = (a,b) => {
    return b !== 0 ? a / b : 'Divisao por 0';
}

console.log(soma(2,2));
console.log(sub(5,2));
console.log(div(10,0));