function contar(){
    var ini = window.document.getElementById("iinicio")
    var fim = window.document.getElementById("ifim")
    var passo = window.document.getElementById("ipasso")
    
    if(ini.lenght == 0 || fim.lenght == 0 || passo.lenght == 0 ){
        window.alert(`Impossível Contar`)
    }

}
