function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 ||Number(fano.value) > ano){
        window.alert('[ERRO] preencha os dados novamente!')
    }else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      res.innerHTML=(`vc tem ${idade}`)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
        genero ='homen'
        if(idade >= 0 && idade < 10){
            //criança
            img.style.backgroundImage=('url','img/criança-h')
        }else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else{
            //idoso
        }
      } else if( fsex[1].checked){
        genero = 'mulher'
        if(idade >= 0 && idade < 10){
            //criança
        }else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else{
            //idoso
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${genero} com ${idade} anos`
    }
}