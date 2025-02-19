
import leia from "readline-sync"

export default function atividade01() {

  let nota = leia.questionFloat("INFORME UMA NOTA EM 0 E 100: ")

  if(nota >=90 && nota <=100){
    console.log(`Sua nota foi "A"`)
  }else if(nota >=80 && nota <=89){
    console.log(`Sua nota foi "B"`)
  }else if(nota >=70 && nota <=79){
    console.log(`Sua nota foi "C"`)
  }else if(nota >=60 && nota <=69){
    console.log(`Sua nota foi "D"`)
  }else{
    console.log(`Sua nota foi "F"`)
  }

}