let opcoes = document.querySelector("div.opcao")
let opdeposito = document.querySelector("div.depositar")
let opsaldo = document.querySelector("div.consultar-saldo")
let opsacar = document.querySelector("div.sacar")
let recibo = document.querySelector("div.recibo")


let txtvalordep = document.querySelector("input.dep") 
txtvalorsaque = document.querySelector("input.saq")

recibo.style.display="none"
//Começo Depósito----------------
function deposito(){

    opcoes.style.display = "none"
    opdeposito.style.display="inline-block"


    msgdep = document.querySelector("p.testesaldo")
    msgsaque = document.querySelector("p.msgsaque")

    msgdep.innerHTML=" "
    msgsaque.innerHTML=" "

    txtvalordep.value = " "
    txtvalordep.focus()
}

saldo = 0

function fdep(){ 
    
valordep = Number(txtvalordep.value)
if(valordep == 0){
    msgdep.innerHTML="Digite um valor antes de clicar em 'Depositar'"
}else{
saldo = saldo + valordep

msgdep.innerHTML=`Depósito de R$${valordep.toFixed(2)} realizado com sucesso <br> saldo atual: R$${saldo.toFixed(2)}`

txtvalordep.value = " "
txtvalordep.focus()
}


}
function voltardep(){
    opcoes.style.display = "inline-block"
    opdeposito.style.display="none"
    testesaldo.innerHTML=" "
}
//Finalização depósito------------------

//Começo Saque---------------------
function fsaq(){
    
    valorsaque = Number(txtvalorsaque.value)
if(valorsaque == 0){
    msgsaque.innerHTML="Digite um valor antes de clicar em 'Sacar'"
}else{

    if(saldo==0 || valorsaque>saldo){
        msgsaque.innerHTML="Saldo insuficiente para efetuar o saque."
    }else{
        saldo = saldo-valorsaque
        msgsaque.innerHTML= `Saque de R$${valorsaque.toFixed(2)} realizado com sucesso.<br>Saldo atual:${saldo}` 
        
        //animação dinheiro
        boca = document.querySelector("div.boca")
        tampa = document.querySelector("div.tampa")
        dinheiro1 = document.querySelector("img.dinheiro1")
        dinheiro2 = document.querySelector("img.dinheiro2")
        dinheiro3 = document.querySelector("img.dinheiro3")
        
        boca.style.backgroundColor = "lightgray"
        tampa.style.display="inline-block"
        dinheiro1.style.display="inline-block"
        dinheiro2.style.display="inline-block"
        dinheiro3.style.display="inline-block"
    }

}
    txtvalorsaque.value = " "
    txtvalorsaque.focus()

}

function saque(){
    opcoes.style.display="none"
    opdeposito.style.display="none"
    opsaldo.style.display="none"
    opsacar.style.display="inline-block"
}

function voltarsaque(){
    opcoes.style.display="inline-block"
    opsacar.style.display="none"
    msgsaque.innerHTML=" "

        boca.style.backgroundColor = "rgb(90, 87, 87)"
        tampa.style.display="none"
        dinheiro1.style.display="none"
        dinheiro2.style.display="none"
        dinheiro3.style.display="none"
}

//Finalização Saque--------------------


//Começo Saldo---------------------
function consultarsaldo(){
    opcoes.style.display = "none"
    opdeposito.style.display="none"
    opsaldo.style.display="inline-block"

    let msgsaldo = document.querySelector("p.seusaldo")

    msgsaldo.innerHTML=`seu saldo atual é: R$${saldo.toFixed(2)}`
}
function voltarsaldo(){
    opcoes.style.display = "inline-block"
    opdeposito.style.display="none"
    opsaldo.style.display="none"
    recibo.style.display="none"
}

function imprimir(){
    recibo.style.display="inline-block"
    let agora = new Date
    let dia = agora.getDate()
    let mes = agora.getMonth()+1
    let ano = agora.getFullYear()
    
    let esconderconsulta = document.querySelector("div.esconder-consulta")
    esconderconsulta.style.display="none"

    let recibodata = document.querySelector("p.data")
    recibodata.innerHTML =`Data: ${dia}/${mes}/${ano}`

    let msgultimodep = document.querySelector("p.ultimodep")
    msgultimodep.innerHTML=`Último depósito: R$${valordep.toFixed(2)} `

    let seusaldo = document.querySelector("p.saldoatual")
    seusaldo.innerHTML=`Saldo atual: R$${saldo.toFixed(2)}`

    let msgultimosaq = document.querySelector("p.ultimosaq")
    msgultimosaq.innerHTML = `Último saque: R$${valorsaque.toFixed(2)}`
 
}
//Finalização Saldo-----------------
