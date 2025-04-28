function hora(){
var agora =  new Date()
var hora= agora.getHours()
var h=document.getElementById('h')
var ft = document.getElementById('imgs')
h.innerHTML=` Agora sao:${hora}`

if(hora <= 12){
    ft.style.backgroundImage = "url('img/manha1.jpg')"
    document.body.style.backgroundColor = '#e2cd9f'
}else if ( hora <= 18){
    ft.style.backgroundImage= "url('img/tarde.jpg')"
    document.body.style.backgroundColor ='#b9846f'
}else{
    ft.style.backgroundImage= "url('img/noite.jpg')"
    document.body.style.backgroundColor ='#515154'
}
}