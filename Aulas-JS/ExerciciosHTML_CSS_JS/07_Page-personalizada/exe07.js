grito = document.querySelector("audio.grito")
menusenha = document.querySelector("div.senha-adm")
painel = document.querySelector("div.painel") 
head = document.querySelector("header.head")
function modoadm(){

    menusenha.style.display="inline-block"
} 
   

function cor1(){
    head.style.backgroundColor="peru"

}
function cor2(){
    head.style.backgroundColor="teal"

}
function cor3(){
    head.style.backgroundColor="indianred"

}
function sair(){
    painel.style.display="none"
    grito.style.display="none"
   
}

//Senha ADM
function confirmar(){
    senhatxt = document.querySelector("input.senha")
    senha = Number(senhatxt.value)

    if(senha==1234){
        painel.style.display="inline-block"
        menusenha.style.display="none"
    }else{
        alert("Senha incorreta")
    }

}


//FIM Senha ADM


//imagens marmotas---

fundo = document.querySelector("section.fundo-imagem")
function img1(){
    fundo.style.backgroundImage="url(/img/marmota.jpg)"
}

function img2(){
    fundo.style.backgroundImage="url(/img/marmota2.jpg)"
}

function img3(){
    fundo.style.backgroundImage="url(/img/marmota3.jpg)"
    grito.style.display="inline-block"
}
// FIm da imagem marmotas


//cor titulo e texto
titulo = document.querySelector("h1.titulo")
texto = document.querySelector("p.texto")

function cortitulo1(){
    titulo.style.color=" rgb(158, 217, 233)"
}
function cortitulo2(){
    titulo.style.color="rgb(248, 182, 159)"
}
function cortitulo3(){
    titulo.style.color="rgb(189, 238, 195)"
}


function cortxt1(){
    texto.style.color="rgb(60, 66, 71)"
}
function cortxt2(){
    texto.style.color="rgb(92, 88, 34)"
}
function cortxt3(){
    texto.style.color="rgb(62, 80, 62)"
}

//FIM cor titulo e texto
