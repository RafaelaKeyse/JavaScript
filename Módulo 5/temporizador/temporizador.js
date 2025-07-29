function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return null; // data já passou
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

  return { dias, horas, minutos, segundos };
}

function atualizarTemporizador(dataFutura) {
  const tempoRestante = calcularTempoRestante(dataFutura);

  if (!tempoRestante) {
    console.log("O tempo acabou!");
    clearInterval(intervalId);
    return;
  }

  console.log(`Faltam ${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos e ${tempoRestante.segundos} segundos.`);
}

// Defina a data futura aqui (exemplo: 31 de dezembro de 2025 às 23:59:59)
const dataFutura = new Date(2025, 11, 31, 23, 59, 59);

const intervalId = setInterval(() => atualizarTemporizador(dataFutura), 1000);
