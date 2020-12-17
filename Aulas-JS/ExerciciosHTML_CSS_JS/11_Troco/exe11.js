money200 = document.querySelector("p.nota200")
money100 = document.querySelector("p.nota100")
money50 = document.querySelector("p.nota50")
money20 = document.querySelector("p.nota20")
money10 = document.querySelector("p.nota10")
money5 = document.querySelector("p.nota5")
money2 = document.querySelector("p.nota2")
money1 = document.querySelector("p.moeda1")

q200 = document.querySelector("span.q200")
q100 = document.querySelector("span.q100")
q50 = document.querySelector("span.q50")
q20 = document.querySelector("span.q20")
q10 = document.querySelector("span.q10")
q5 = document.querySelector("span.q5")
q2 = document.querySelector("span.q2")
q1 = document.querySelector("span.q1")

nota200= 0
nota100= 0
nota50= 0
nota20= 0
nota10= 0
nota5= 0
nota2= 0
moeda1= 0
numtxt = document.querySelector("input.num")

function vrau(){
num = Number(numtxt.value)
money200.style.display = "none", money100.style.display = "none", money50.style.display = "none"
money20.style.display = "none", money10.style.display = "none", money5.style.display = "none"
money2.style.display = "none", money1.style.display = "none"
for(let a=0; num>0; a++){
    if(num>=200){
        num = num - 200 
        nota200++
    }else if(num<200 & num>=100){
        num = num - 100
        nota100++
    }else if(num<100 & num>=50){
        num = num - 50
        nota50++
    }else if(num<50 & num >=20){
        num = num - 20
        nota20++
    }else if(num<20 & num>=10){
        num = num - 10
        nota10++
    }else if(num<10 & num>=5){
        num = num - 5
        nota5++
    }else if(num<5 & num>=2){
        num = num - 2
        nota2++
    }else if(num == 1){
        num = num - 1
        moeda1++
    }

}

if(nota200 >= 1){
    money200.style.display="inline-block"
    q200.innerHTML=nota200
}
if(nota100 >= 1){
    money100.style.display="inline-block"
    q100.innerHTML=nota100
}
if(nota50 >= 1){
    money50.style.display="inline-block"
    q50.innerHTML=nota50
}
if(nota20 >= 1){
    money20.style.display="inline-block"
    q20.innerHTML=nota20
}
if(nota10 >= 1){
    money10.style.display="inline-block"
    q10.innerHTML=nota10
}
if(nota5 >= 1){
    money5.style.display="inline-block"
    q5.innerHTML=nota5
}
if(nota2 >= 1){
    money2.style.display="inline-block"
    q2.innerHTML=nota2
}
if(moeda1 >= 1){
    money1.style.display="inline-block"
    q1.innerHTML=moeda1
}
nota200= 0
nota100= 0
nota50= 0
nota20= 0
nota10= 0
nota5= 0
nota2= 0
moeda1= 0


numtxt.value = " "
numtxt.focus()
}







