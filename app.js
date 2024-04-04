const $tiempo=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    diaSemana=f.getDay();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    //let timeString= f.toLocaleTimeString();
    let timeString = f.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    $tiempo.innerHTML=timeString;

}
setInterval(() =>{
    Relojdigital()
},1000);