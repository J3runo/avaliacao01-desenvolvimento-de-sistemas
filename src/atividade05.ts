import leia from "readline-sync"

export default function atividade05() {

  class jogador{
    Nome:string
    Gols:number
    PassesCertos:number
    PassesErrados:number
    Pontuacao:number

    constructor(nome:string,gols:number,passesCertos:number,passesErrados:number){
      this.Nome = nome,
      this.Gols = gols,
      this.PassesCertos = passesCertos,
      this.PassesErrados = passesErrados,
      this.Pontuacao = 0
    }

    
      calcularPontuacao(){
       this.Pontuacao = (this.Gols * 50) + (this.PassesCertos * 10) + (this.PassesErrados * -5)
      }

      classificacao() {
        if (this.Pontuacao < 50) {
          return "Péssima partida";
        } else if (this.Pontuacao > 50 && this.Pontuacao < 100) {
          return "Partida ruim";
        } else if (this.Pontuacao > 100 && this.Pontuacao < 150) {
          return "Fez o básico";
        } else if (this.Pontuacao > 150 && this.Pontuacao < 200) {
          return "Foi bem na partida";
        } else {
          return "Jogou demais";
        }
      }
  }


  let vetorJogadores:jogador[] = []
  let qtd = leia.questionInt("INFORME QUANTOS JOGADOR QUER CADASTRAR: ")

  for(var i = 0; i<qtd; i++){
    let nome = leia.question("INFORME O NOME DO JOGADOR: ")
    let qtdGols = leia.questionInt("INFORME A QUANTIDADE DE GOLS: ")
    let passesCertos = leia.questionInt("INFORME A QUANTIDADE DE PASSES CERTOS: ")
    let passesErrados = leia.questionInt("INFORME A QUANTIDADE DE PASSES ERRADOS: ")
    console.log("------------------------------")

    let JOGADOR = new jogador(nome,qtdGols,passesCertos,passesErrados)
    JOGADOR.calcularPontuacao()
    vetorJogadores.push(JOGADOR)
  }

  let melhorJogador;
  let melhorPontuacao = 0;

  
  for (let jogador of vetorJogadores) {
    if (jogador.Pontuacao > melhorPontuacao) {
      melhorPontuacao = jogador.Pontuacao;
      melhorJogador = jogador;
    }
    console.log(`Jogador: ${jogador.Nome}`);
    console.log(`Pontuação: ${jogador.Pontuacao}`);
    console.log(`Classificação: ${jogador.classificacao()}`);

  }

 
  if (melhorJogador) {
    console.log(`O jogador com a melhor pontuação foi: ${melhorJogador.Nome} com ${melhorJogador.Pontuacao} pontos.`);
  
}

}




