function vrau(){
    let txtnumero = document.querySelector("input.numero")
    let numero = Number(txtnumero.value)
    let tab = document.querySelector("div.resultado")

    let tab2 = document.querySelector("select.tab2")
     

    tab.innerHTML=" "
    tab2.innerHTML=" "

    if(numero == 0){
        alert("Digite um número!!")
    }else{
        for(let i=1; i<=10; i++){
            tab.innerHTML += `${numero} x ${i} = ${numero*i}   <br>`
        }

        for(let a=1; a<=10; a++){
            let item = document.createElement("option") //criar um <option/> pelo JS
            item.innerHTML = `${numero} x ${a} = ${numero*a}` //o item (option) vai receber os numeros
            tab2.appendChild(item)  //Vai adicionar novas filhas(options) com o item dentro a cada rodada do FOR
        }
    }//else
    
}//vrau   