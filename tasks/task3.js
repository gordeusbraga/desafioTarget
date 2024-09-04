//executado com nodejs

const faturamentoMensal = [
  { dia: 1, faturamento: 100 },
  { dia: 2, faturamento: 200 },
  { dia: 3, faturamento: 300 },
  { dia: 4, faturamento: 420 },
  { dia: 5, faturamento: 500 },
  { dia: 6, faturamento: 0 },
  { dia: 7, faturamento: 0 },
  { dia: 8, faturamento: 800 },
  { dia: 9, faturamento: 950 },
  { dia: 10, faturamento: 1000 },
  { dia: 11, faturamento: 1190 },
  { dia: 12, faturamento: 1200 },
  { dia: 13, faturamento: 0 },
  { dia: 14, faturamento: 0 },
  { dia: 15, faturamento: 1500 },
];

function calculaFaturamento() {
  let menorValor = Number.MAX_VALUE;
  let maiorValor = Number.MIN_VALUE;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  faturamentoMensal.forEach((faturamento) => {
    if (faturamento.faturamento > maiorValor) {
      maiorValor = faturamento.faturamento;
    }

    if (faturamento.faturamento > 0) {
      if (faturamento.faturamento < menorValor) {
        menorValor = faturamento.faturamento;
      }
      somaFaturamento += faturamento.faturamento;
      diasComFaturamento++;
    }
  });

  const mediaFaturamento = somaFaturamento / diasComFaturamento;

  const diasAcimaDaMedia = faturamentoMensal.filter(
    (item) => item.faturamento > mediaFaturamento
  ).length;

  return { menorValor, maiorValor, diasAcimaDaMedia };
}

const resultado = calculaFaturamento();
console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(
  `Número de dias com faturamento superior à média mensal: ${resultado.diasAcimaDaMedia}`
);
