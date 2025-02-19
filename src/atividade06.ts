import leia from "readline-sync"

export default function atividade06() {

class Produtos{
  nome:string
  preco:number

  constructor(Nome:string, Preco:number){
    this.nome = Nome
    this.preco = Preco
  }



} 

let vetorProdutos: Produtos[] = []
let qtd = leia.questionInt("QUANTIDADE DE PRODUTOS A SER CADASTRADO: ")



for(let i = 0; i<qtd; i++){
  let nome = leia.question("INFORME O NOME:")
  let preco = leia.questionFloat("INFORME O PRECO:")
  console.log("-------------------------------")

  let produto = new Produtos(nome,preco)
  vetorProdutos.push(produto)
}


console.log("Produtos cadastrados:");
  for (let i = 0; i < vetorProdutos.length; i++) {
    console.log(`${vetorProdutos[i].nome} : R$ ${vetorProdutos[i].preco}`);
  }

 
  let total = 0;
  for (let i = 0; i < vetorProdutos.length; i++) {
    total += vetorProdutos[i].preco;
  }

  let media = total / vetorProdutos.length;

 
  console.log(`VALOR TOTAL R$ ${total}`);
  console.log(`VALOR MEDIO R$ ${media}`);
}















