function pertenceFibonacci(n) {
  let a = 0,
    b = 1;
  while (b <= n) {
    if (b === n) {
      return true;
    }
    [a, b] = [b, a + b];
  }
  return false;
}

let numero = 21;
if (pertenceFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
