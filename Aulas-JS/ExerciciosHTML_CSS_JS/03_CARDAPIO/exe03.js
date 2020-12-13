let p1 = document.querySelector("input#p1")
let p2 = document.querySelector("input#p2")
let p3 = document.querySelector("input#p3")
let p4 = document.querySelector("input#p4")
let p5 = document.querySelector("input#p5")

let pedido01 = Number(p1.value) * 5
let pedido02 = Number(p2.value) * 3
let pedido03 = Number(p3.value) * 4
let pedido04 = Number(p4.value) * 3
let pedido05 = Number(p5.value) * 3

function vrau(){
    window.location.reload(false)
}
let valorconta = pedido01+pedido02+pedido03+pedido04+pedido05
let conta = document.querySelector("p.valor-conta")

let contacredito = document.querySelector("span.valor-conta")
let valorcontacredito = valorconta + (valorconta*0.1)

conta.innerHTML = `valor total: R$${valorconta.toFixed(2)}`


contacredito.innerHTML =`R$${valorcontacredito.toFixed(2)}`


let tipopag = document.getElementsByName("pagamento")

let notafiscal = document.getElementById("valor-fiscal")

let impressaonota = document.querySelector("section.nota-fiscal")

function finalizar(){
    impressaonota.style.display = "inline-block"
    
    if(tipopag[0].checked){
    notafiscal.innerHTML = `valor total: ${valorconta.toFixed(2)}`
    }else{
    notafiscal.innerHTML = `valor total: ${valorcontacredito.toFixed(2)}`
    }

}


