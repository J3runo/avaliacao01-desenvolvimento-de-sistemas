import leia from "readline-sync"
export default function atividade02() {
  

let idade = leia.questionInt("INFORME A IDADE: ")

if(idade < 12 ){
  console.log("CRIANÇA!!!")
}else if(idade >= 12 && idade <=17){
  console.log("ADOLECENTE!!!")
}else if(idade >17 && idade <60){
  console.log("ADULTO!!!")
}else if(idade >= 60){
  console.log("IDOSO!!!")
}


}