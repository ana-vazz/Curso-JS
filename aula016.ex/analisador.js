let num = document.getElementById("inumero")
let lista = document.getElementById("flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n, 1){
    if (1, indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
   
}

function adicionar(){
    
    if( isNumero(num.value) && !inLista(num.value, valores) ){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = " "
    } else{
        alert("O número que tentou adicionar é inválido ou já se encontra adicionado.")
    }
    num.value = ""
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert("Adicione Valores antes de finalizar!")
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores [pos]
        }
        media = soma/ total
        res.innerHTML = " "
        res.innerHTML += `Ao todo, temos ${total} números.`
        res.innerHTML += `O maior valor informado foi ${maior}.`
        res.innerHTML += `O menor valor informado foi ${menor}.`
        res.innerHTML += `A soma de todos os valores é ${soma}.`
        res.innerHTML += `A média dos valores é ${media}.`
    }
}

