//executado com nodejs

function pertenceSequenciaFibonacci(n) {
  let x = 0;
  let y = 1;
  let Fibonacci;
  while (x < n) {
    Fibonacci = x + y;
    x = y;
    y = Fibonacci;
  }
  if (x == n) {
    return true;
  } else {
    return false;
  }
}

let numero = 21;
let numero2 = 24;

if (pertenceSequenciaFibonacci(numero)) {
  console.log(`${numero} pertence a sequencia Fibonacci.`);
} else {
  console.log(`${numero} nao pertence a sequencia de Fibonacci.`);
}
if (pertenceSequenciaFibonacci(numero2)) {
  console.log(`${numero2} pertence a sequencia Fibonacci.`);
} else {
  console.log(`${numero2} nao pertence a sequencia de Fibonacci.`);
}
