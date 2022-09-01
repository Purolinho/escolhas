var resposta = window.document.getElementById("resposta")
var botao = window.document.getElementById("botao")
var terminal = window.document.getElementById("txterminal")
var senha = window.document.getElementById("senha")
var arrastar = window.document.getElementById("arrastar")
var banker = window.document.getElementById("banker")
var inventario= window.document.getElementById("inventario")
var imagemdoinventario = window.document.getElementById("imagemdoinventario")
var itemdoinventario1 = window.document.getElementById("itemdoinventario1")
var infoitem1 = window.document.getElementById("infoitem1")

var escolha1 = window.document.getElementById("oquehouve")
var escolha2 = window.document.getElementById("oquefazer")
var escolha3 = window.document.getElementById("ondeestou")

var teste = window.document.getElementById("resultado")

escolha1.addEventListener("click", pescolha)
escolha2.addEventListener("click", sescolha)
escolha3.addEventListener("click", tescolha)

botao.addEventListener("click", verificar)
senha.addEventListener("keyup", password)
pendrive.addEventListener("click", pegarpendrive)
imagemdoinventario.addEventListener("click", fechareabririnventario)
itemdoinventario1.addEventListener("click", informações1)


let contadordainfo1 = 0
let contadordoinventario = 0
var itens = []

var senhadocofre = Math.floor(Math.random(0)*100000)

var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var i6 = 0;

var speed = 50;

var txt1 = "Não sei. Sou  apenas um site, mas pelo acesso ao banco de dados, ocorreu um ataque a toda internet. Poucos dados foram salvos. Eles atacaram por meios desconhecidos até o momento, mas pelo o que parece, não foi apenas um virus ou acesso a contas Administradoras, foi algo bem pior...";

var txt2 = 'Você pode dar comandos no terminal e tentar acessar os dados restantes, talvez tenha algo que possa usar para descobrir mais a respeito do que houve'

var txt3 = 'Você está em uma casa isolada, longe da cidade, o ano é de 2045 pelo o que parece você não lembra de estar nesta casa antes'

var txt4 = "Erro_404 * Erro_404 * Banco de dados * Erro_404 * Arquivos"

var txt5 = "Usuarios: Jonh, Daniel, Merlinz, Carlos * Senhas: " + senhadocofre

var txt6 = "Um pendrive com backup, provavelmente tem informações uteis"

function digitação1() {

    teste.style.display = "block"   

    if(txt1.charAt(i1) == "*"){
        teste.innerHTML += "<br>"
        }else {
            if (i1 < txt1.length) {
                teste.innerHTML += txt1.charAt(i1)
            }
        }
        i1++
        setTimeout(digitação1, speed);
}

function digitação2() {

    teste.style.display = "block"
    
    if(txt2.charAt(i2) == "*"){
        teste.innerHTML += "<br>"
        }else {
            if (i2 < txt2.length) {
                teste.innerHTML += txt2.charAt(i2)
            }
        }
        i2++
        setTimeout(digitação2, speed);
}

function digitação3() {

    teste.style.display = "block"

    if(txt3.charAt(i3) == "*"){
        teste.innerHTML += "<br>"
        }else {
            if (i3 < txt3.length) {
                teste.innerHTML += txt3.charAt(i3)
            }
        }
        i3++
        setTimeout(digitação3, speed);
}

function digitação4() {

    if(txt4.charAt(i4) == "*"){
        terminal.innerHTML += "<br>"
        }else {
            if (i4 < txt4.length) {
                terminal.innerHTML += txt4.charAt(i4)
            }
        }
        i4++
        setTimeout(digitação4, speed);
}

function digitação5() {

    if(txt5.charAt(i5) == "*"){
        terminal.innerHTML += "<br>"
        }else {
            if (i5 < txt5.length) {
                terminal.innerHTML += txt5.charAt(i5)
            }
        }
        i5++
        setTimeout(digitação5, speed);
}

function digitação6() {

    if(txt6.charAt(i6) == "*"){
        infoitem1.innerHTML += "<br>"
        }else {
            if (i6 < txt6.length) {
                infoitem1.innerHTML += txt6.charAt(i6)
            }
        }
        i6++
        setTimeout(digitação6, speed);
}



function pescolha() {

    teste.innerHTML = ""

    setTimeout(digitação1(),2000)
    escolha1.style.transition = "1.3s"
    escolha1.style.opacity = "0%"
    setTimeout(function tempo1() {
        escolha1.style.display = "hidden"
        escolha1.style.cursor = "default"
    },1500)

    escolha1.removeEventListener('click', pescolha);
    
}


function sescolha() {

    teste.innerHTML = ""
    setInterval(digitação2(), 2000)
    escolha2.style.transition = "1.3s"
    escolha2.style.opacity = "0%"
    setInterval(function tempo2() {
        escolha2.style.display = "hidden"
        escolha2.style.cursor = "default"
    },1500)

    escolha2.removeEventListener('click', sescolha);

}

function tescolha() {

    teste.innerHTML = ""
    setInterval(digitação3(), 2000)
    escolha3.style.transition = "1.3s"
    escolha3.style.opacity = "0%"
    setInterval(function tempo3() {
        escolha3.style.display = "hidden"
        escolha3.style.cursor = "default"
    },1500)

    escolha3.removeEventListener('click', tescolha);

}


function verificar() {

    terminal.innerHTML = ""
    if(resposta.value == "/help") {
        digitação4()
        i4 = 0
    }
    else if(resposta.value == "/banco de dados") {
        digitação5()
    }
    else if(resposta.value == "arquivos") {
        terminal.innerHTML = "arquivos nao encontrados"
    } 
    else if(resposta.value == "/") {
        digitação4()
        i4 = 0
    }
    else {
    terminal.innerHTML= "O comando dado nao e valido"
   }
    
}

function password() {

    if(senha.value == 1) {
        banker.style.display = "none"
    }
}

function pegarpendrive() {
    itens.push("pendrive")
    window.document.getElementById("itemdoinventario1").style.display = "block"
    window.document.getElementById("itemdoinventario1").style.cursor = "pointer"
    window.document.getElementById("papel").style.display = "none"
}

function fechareabririnventario() {
    if(++contadordoinventario % 2 == 0) {
        inventario.style.left = "0%"
    } else {   
        inventario.style.left = "-31.6%"
    }
}

function informações1() {
    i6 = 0
    infoitem1.innerHTML = ""
    if(contadordainfo1 % 2 == 0) {
        infoitem1.style.display = "block"
        infoitem1.style.opacity = "100%"
        digitação6()
        contadordainfo1++
    } else {
        infoitem1.style.display = "none"
        infoitem1.opacity = "0%"
        contadordainfo1++
    }
}
