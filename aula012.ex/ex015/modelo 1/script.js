function verificar() {
    console.log("A função foi chamada")
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("iano")
    var res = document.querySelector("div#res")
    var containerImagem = document.getElementById("containerImagem")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Por favor verifique os seus dados e tente novamente!")

    } else {
        var fsex = document.getElementsByName("sex")

        var idade = ano - Number(fano.value)

        res.innerHTML = `Idade Calculada: ${idade}`

        var genero = ""

        const imagemExiste = document.getElementById("foto") 

        if (!imagemExiste) {
            var img = document.createElement("img")
            img.setAttribute("id", "foto")

        } else{
            var img = docoment.getElementById("foto")
        }



        console.log("Idade calculada", fsex, idade, genero, img)

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                img.src = "bebe-menino.jpg"
            } else if (idade < 21) {
                img.src = "menino.jpg"
            } else if (idade < 50) {
                img.src = "homem.jpg"
            } else {
                img.src = "idoso.jpg"
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 12) {
                img.src = "bebe-menina.jpg"
            } else if (idade < 21) {
                img.src ="menina.jpg"
            } else if (idade < 50) {
                img.src = "mulher.jpg"
            } else {
                img.src = "idosa.jpg"
            }

        }
        res.style.textAlign = "center"

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        if(!imagemExiste){
        containerImagem.appendChild(img)

        }

        

    }

}