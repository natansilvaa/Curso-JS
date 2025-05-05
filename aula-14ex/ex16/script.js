function contar() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("pas").value
    var res = document.getElementById("res")

    // Conversão para números
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
        res.innerHTML += "inposivel contar"
        
        
    } else {
        res.innerHTML = "Contando: <br>"
        if (passo <= 0){
            alert('passo invalido! Considero o passo 1')
            passo = 1
        }
        if (inicio < fim) {
            // Contagem crescente
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            // Contagem regressiva
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += "🏁"
    }
}