function analisar(){
    numerotxt = document.querySelector("input.numero")
    n = Number(numerotxt.value)
    resultado = document.querySelector("p.resultado")
    vrau = 0

    if(n<=0){
        alert("Digite um número maior que 0")
    }else if(n==1){
        resultado.innerHTML=`${n} Não é número primo`
    }else{
            for(a=n-1; a>1; a--){
                if(n%a==0){
                    vrau++
                }else{
                    vrau = vrau
                }

             }
                if(vrau==0){
                    resultado.innerHTML=`${n} É número primo`
                }else{
                    resultado.innerHTML=`${n} Não é número primo`
                }
            }
       
    

    numerotxt.value = " "
    numerotxt.focus()
}