var resposta = window.document.getElementById("resposta")
var botao = window.document.getElementById("botao")
var terminal = window.document.getElementById("txterminal")

var escolha1 = window.document.getElementById("oquehouve")
var escolha2 = window.document.getElementById("oquefazer")
var escolha3 = window.document.getElementById("ondeestou")

var teste = window.document.getElementById("resultado")

escolha1.addEventListener("click", pescolha)
escolha2.addEventListener("click", sescolha)
escolha3.addEventListener("click", tescolha)

botao.addEventListener("click", verificar)

var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;

var speed = 50;

var txt1 = 'Não sei. Sou apenas um site, mas pelo acesso ao banco de dados, ocorreu um ataque a toda internet. Poucos dados foram salvos. Eles atacaram por meios desconhecidos até o momento, mas pelo o que parece, não foi apenas um virus ou acesso a contas Administradoras, foi algo bem pior...';

var txt2 = 'Você pode dar comandos no terminal e tentar acessar os dados restantes, talvez tenha algo que possa usar para descobrir mais a respeito do que houve'

var txt3 = 'Você está em uma casa isolada, longe da cidade, o ano é de 2045 pelo o que parece você não lembra de estar nesta casa antes'


function digitação1() {

    teste.style.display = "block"

    if (i1 < txt1.length) {
        teste.innerHTML += txt1.charAt(i1);
        i1++;
        setTimeout(digitação1, speed);
    }

}

function digitação2() {

    teste.style.display = "block"
    
    if (i2 < txt2.length) {
        teste.innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(digitação2, speed);
    }


}

function digitação3() {

    teste.style.display = "block"

    if (i3 < txt3.length) {
       teste.innerHTML += txt3.charAt(i3);
       i3++;
       setTimeout(digitação3, speed);
    }

}

function digitação4() {



   /* if (i4 < txt4) {
       txt4.innerHTML += txt4.charAt(i4);
       i4++;
       setTimeout(digitação4, speed);
    }
    */
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
    }

}

