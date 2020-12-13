function contar(){
    
let txtinicio = document.querySelector("input.inicio")
let txtfim = document.querySelector("input.fim")
let txtpulo = document.querySelector("input.pulo")

let inicio = Number(txtinicio.value)
let fim = Number(txtfim.value)
let pulo = Number(txtpulo.value)

let msg = document.querySelector("p.msg")

let resultado = document.querySelector("div.resultado")

resultado.innerHTML = " "
if(inicio == 0 || fim == 0 || pulo == 0){
    msg.innerHTML = ("Informações inválidas...")
}else if(inicio < fim){

for(let cont = inicio; cont <= fim; cont=cont+pulo){
                 //esse += ai é pra concatenar com o que ele ja tem
    resultado.innerHTML +=(` ${cont} \u{27A1}`)  //pra aparecer os numeros em sequencia, senao, aparece so o ultimo numero
    msg.innerHTML="Contando..."
}resultado.innerHTML += `\u{1F6A9}` //emoji



}else if(inicio > fim){
    for(cont = inicio; cont>=fim; cont=cont-pulo){
    resultado.innerHTML +=(` ${cont} \u{27A1} `)
    msg.innerHTML=`Contando...`
}resultado.innerHTML += `\u{1F6A9}` //emoji

}

}//contar




