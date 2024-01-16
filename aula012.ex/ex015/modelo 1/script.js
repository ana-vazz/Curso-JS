function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("iano") 
    var res= document.getElementById("res")
    if (fano.value.length == 0 ||fano.value > ano) {
        window.alert("[ERRO] Por favor verifique os seus dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        res.innerHTML =`Idade Calculada: ${idade}`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            género ="Homem"
            if(idade >=0 && idade <12){
                img.src = "imagens/bebe-menino.jpg"
            }else if(idade <21){
                img.src = "imagens/menino.jpg"
            } else if ( idade < 50){
                img.src = "imagens/homem.jpg"
            } else {
                img.src = "imagens/idoso.jpg"
            }

        } else { 
            género ="Mulher"
            if(idade >=0 && idade <12){
                img.src = "imagens/bebe-menina.jpg"
            }else if(idade <21){
                img.src = "imagens/menina.jpg"
            } else if ( idade < 50){
                img.src = "imagens/mulher.jpg"
            } else {
                img.src = "imagens/idosa.jpg"
            }

        }
        res.style.textAlign ="center"
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
    }

}