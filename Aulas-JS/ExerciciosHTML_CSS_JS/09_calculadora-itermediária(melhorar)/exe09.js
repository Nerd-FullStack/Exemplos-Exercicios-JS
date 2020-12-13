numerotxt = document.querySelector("input.numero")
resul = document.querySelector("p.resultado")
numeroaux = 0

function somar(){
    numero = Number(numerotxt.value)

    numerotxt.value = " "
    numerotxt.focus() 
    numeroaux += numero

    resul.innerHTML = numeroaux
}

function subtrair(){
    numero = Number(numerotxt.value)
    numerotxt.value=" "
    numerotxt.focus()

    numeroaux -= numero

    resul.innerHTML=numeroaux
}
function multiplicar(){
    numero = Number(numerotxt.value)
    numerotxt.value=" "
    numerotxt.focus()

    numeroaux *= numero
    resul.innerHTML=numeroaux

}

function dividir(){
    numero = Number(numerotxt.value)
    numerotxt.value=" "
    numerotxt.focus()

    numeroaux /= numero

    resul.innerHTML=numeroaux
}

function limpar(){

    resul.innerHTML = "..."
    numeroaux = 0

    numerotxt.value=" "
    numerotxt.focus()
}



