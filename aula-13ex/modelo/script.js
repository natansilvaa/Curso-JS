
var agora =  new Date()
var hora= agora.getHours()
var min = agora.getMinutes()
var h=document.getElementById('h')
var ft = document.getElementById('imgs')
h.innerHTML=` Agora sao:${hora}`

if(hora < 12){
    ft.style.backgroundImage = "url('img/manha1.jpg')"
}else if ( hora < 18){
    ft.style.backgroundImage= "url('img/tarde.jpg')"
}else{
    ft.style.backgroundImage= "url('img/noite.jpg')"
}