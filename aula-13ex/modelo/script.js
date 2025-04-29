
function enviar(){ 
    var idade = document.getElementById('idade')
    var img = document.getElementById('imgs')
    var sex = document.getElementById('sex')
    var res = document.getElementById('res')
    if(idade <=10 && sex == masculino){ 
        res.innerHTML=(`criança de ${idade} anos do sexo ${sex}`)
    }
 }