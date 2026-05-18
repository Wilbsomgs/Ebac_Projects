
class Estacionamento {
  constructor(valorInserido) {
    this.valor = parseInt(valorInserido);
    this.tempoDisponivel = "";
    this.troco = 0.0;
    this.valorMinimo = 1.0;
  }

  validarValor() {
    return this.valor >= this.valorMinimo;
  }

  processarPagamento() {
    if (!this.validarValor) {
      return "Valor insuficiente";
    }

    if (this.valor >= 1.0 && this.valor < 1.75) {
      this.tempoDisponivel = "30 minutos";
      this.troco = this.valor - 1.0;
    } else if (this.valor >= 1.75 && this.valor < 3.0) {
      this.tempoDisponivel = "60 minutos";
      this.troco = this.valor - 1.75;
    } else {
      this.tempoDisponivel = "120 minutos (tempo máximo)";
      this.troco = this.valor - 3.0;
    }
    return this.gerarRecibo();
  }
  gerarRecibo() {
    return `Tempo ${this.tempoDisponivel} | Troco R$ ${this.troco.toFixed(2)}`;
  }
}

function Calcular() {
  const valorInseridoIn = parseInt(document.getElementById("tempoGasto").value);

  const meuTicket = new Estacionamento(valorInseridoIn);
  console.log(meuTicket.processarPagamento());
}
