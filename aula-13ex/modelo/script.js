
function enviar(){ 
    var idade = document.getElementById('idade').value
    var imgs = document.getElementById('imgs')
    var sex = document.getElementById('sex')
    var res = document.getElementById('res')
    idade = Number(idade)

    if(idade <=10 && sex == "masculino"){ 
        res.innerHTML=`criança de ${idade} anos do sexo ${sex}`
    }else if(idade <=10 && sex == "feminino"){
        res.innerHTML=`criança de ${idade} anos do sexo ${sex}`
    }
 }