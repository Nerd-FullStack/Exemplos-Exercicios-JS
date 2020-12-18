let idadetxt = document.querySelector("input.idade")
let idade

let bancoidades = document.querySelector("p.banco-idades")

let maiortxt = document.querySelector("p.maior")
let menortxt = document.querySelector("p.menor")
let mediatxt = document.querySelector("p.media")

let maior = 0
let menor = 2000000000000
let media = 0

let cont = 0
function add(){
    if(cont==0){
        bancoidades.innerHTML=" "
        maiortxt.innerHTML=" "
        menortxt.innerHTML=" "
        mediatxt.innerHTML=" "
        maior = 0
        menor = 2000000000
        media = 0
    }
    idade = Number(idadetxt.value)
    idadetxt.value=" "
    idadetxt.focus()
    if(idade==0){
        alert("idade tem que ser maior que 0")
    }else{
        bancoidades.innerHTML+=`${idade}, `

        if(idade>maior){
            maior = idade
        }
        if(idade<menor){
            menor = idade
        }
        cont++
        media = media + idade
    }
    
}
function analisar(){
    maiortxt.innerHTML=`Maior: ${maior}`
    menortxt.innerHTML=`Menor: ${menor}`
    mediatxt.innerHTML=`Média: ${media/cont}` 

    cont=0
}
