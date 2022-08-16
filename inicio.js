var inicio = window.document.getElementById("fundo")

inicio.addEventListener("click", receba)

function receba() {

    inicio.style.opacity = "0%"
    setTimeout(function oi() {inicio.style.display = "none"}, 3000)

}

