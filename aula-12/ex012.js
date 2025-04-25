var agr= new Date()
var hora= agr.getHours()

console.log(`agora sao ${hora} horas`)
if( hora < 6){
    console.log('boa madrugada!')
}else if ( hora < 12){
    console.log('bom dia!')
}else if(hora < 18 ) {
    console.log('boa tarde!')
}else{
    console.log('boa noite!!! <3')
} 
