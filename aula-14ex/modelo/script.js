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
        alert('Preencha os campos corretamente e use um passo maior que zero!')
    } else {
        res.innerHTML = "Contando: <br>"

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