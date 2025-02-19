import leia from "readline-sync"


export default function atividade04() {  

    let numeroSorteado = Math.trunc(Math.random() * 100) 
    let numeroUsuario;

    while(numeroUsuario !== numeroSorteado){
      numeroUsuario = leia.questionInt("INFORME UM NUMERO: ")
      if(numeroUsuario < numeroSorteado){
        console.log("MAIS ALTO")
      }else if(numeroUsuario > numeroSorteado){
        console.log("MAIS BAIXO")
      }
    }
    console.log("--------------------------------------")
    console.log(`ACERTOU O NUMERO ERA ${numeroSorteado}`)
 


}