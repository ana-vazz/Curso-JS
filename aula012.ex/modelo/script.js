function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("im") 
var agora = new Date()
var hora = agora.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12) {   
    img.src = "imagens/manhã.jpg"
} else if (hora >= 12 && hora < 18 ) { 
    img.src = "imagens/tarde.jpg"
    document.body.style.backgroud = "rgb(126, 159, 43)"
} else{
    img.src = "imagens/noite.jpg"
    document.body.style.background = "#515154"              
}
}
