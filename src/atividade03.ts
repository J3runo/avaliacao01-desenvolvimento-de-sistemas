import leia from "readline-sync"


export default function atividade03() {

  
  let opcao = leia.keyInSelect(["PEDRA","PAPEL","TESOURA"])+1

  let pc =  Math.trunc(Math.random() * 3) + 1;

  if(opcao === 1 && pc === 3 || opcao === 3 && pc === 2 || opcao === 2 && pc === 1){
    console.log(" VOCE VENCEU")
  }else if(opcao === 1 && pc === 1 || opcao === 2 && pc === 2 || opcao === 3 && pc === 3){
    console.log("EMPATOU")
  }else{
    console.log("PERDEU!!!")
  }
  
  console.log("sorteio pc: " + pc)
}