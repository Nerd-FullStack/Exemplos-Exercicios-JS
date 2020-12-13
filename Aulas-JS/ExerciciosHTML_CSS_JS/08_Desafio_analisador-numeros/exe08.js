
tabela = document.querySelector("select.selecao")

resultado = document.querySelector("section.resultado")
total = document.querySelector("p.totalN")
maior = document.querySelector("p.maiorN")
menor = document.querySelector("p.menorN")
soma = document.querySelector("p.somaN")
media = document.querySelector("p.mediaN")


vetor = []
maiornum = 0
menornum = 101
somanum = 0
medianum = 0
function adicionar(){
numerotxt = document.querySelector("input.numero")
numero = Number(numerotxt.value)

numerotxt.value = " " //vai limpar o input
numerotxt.focus()     //quando clicar em adicionar, o foco volta pra o input

if(numero>100 || numero<1){
    alert("Digite um número de 1 a 100")
}else{
    posicao = vetor.indexOf(numero)

    if(posicao != -1){
        alert("Você já digitou esse número")
    }else{
            resultado.style.display="none"
            opcao = document.createElement("option")
            opcao.innerHTML = `Número ${numero} adicionado`
            tabela.appendChild(opcao)
            
            vetor.push(numero)

            somanum = somanum+numero
            medianum = somanum/vetor.length
            if(numero>maiornum){
                maiornum = numero
            }

            if(numero<menornum){
                menornum = numero
            }

        }
  
}


}

function finalizar(){
    if(numero == 0 || numero > 100){
        resultado.style.display="none"
    }else{
        resultado.style.display="inline-block"

        total.innerHTML=`Total de números: ${vetor.length}`
        maior.innerHTML=`Maior número: ${maiornum}`
        menor.innerHTML=`Menor número: ${menornum}`
        soma.innerHTML=`Soma dos números: ${somanum}`
        media.innerHTML=`Media dos números: ${medianum.toFixed(2)}`

    }
    
}
