function contar(){
    var ini = window.document.getElementById("iinicio")
    var fim = window.document.getElementById("ifim")
    var passo = window.document.getElementById("ipasso")
    var res = window.document.getElementById("res")
    
    if(ini.value.length == 0 || fim.value.lenght == 0){
        window.alert(`[ERRO] Faltam Dados`)
    } else{
        res.innerHTML = `Contando <br`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1")
            p=1
        }
        if (i < f){
        for(var c = i; c<= f ; c += p){
            res.innerHTML += `${c} ✋` 
        }    
        
        } else{
            for(let c=i; c >= f; c-=p){
                res.innerHTML +=  `${c} ✋` 
            }
            
        }
        res.innerHTML += `${c} 🏳️`
    }
    console.log("A função foi chamada")

}
