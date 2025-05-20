// Javascript
document.addEventListener("DOMContentLoaded", function () {

document.getElementById('enviar').addEventListener('click',validar,false);
    let s=document.getElementById('servicio');
    let p=document.getElementById('pabellon');
    let c=document.getElementById('mostrar')
function validar(e){
    let s=document.getElementById('servicio');
    let p=document.getElementById('pabellon');
    let c=document.getElementById('mostrar')
    
    let regex=/[a-zA-ZñÑáéíóúÁÉÍÓÚ123456789\-\s]/; 
    let error=[];
    if(!regex.test(s.value)){
        alert('error, introduce numeros, letras y numeros');
        return false;
    }

    for(let i=0; i<pabellones.length;i++){
        if(p.value==pabellones[i]){
            return true
        }else{
            let error1=('debes introducir un pabellon valido');
            error.push(error1);
        }
    }
    if(error.length>0){
        alert(error);
        return false;
    }
    
    e.preventDefault();
    return true;
}

let ser= new Servicio(s.value,p.value,c.value);
console.log(ser.mostrarInfo());







});