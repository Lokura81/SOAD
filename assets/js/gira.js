function entradas() {
     let entrad =document.formu.tipoentrada.checked;
    let nom=document.formu.nombre.value;
    let patronNom=/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;            
let mail=document.formu.correo.value;
    let patronMail=/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/ ;
    let telf=document.formu.telefono.value;
    let patronTelf=/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
 let entrada=document.formu.cantidad.value;
 let patronEntrada=/\d/; 
 let targeta=document.formu.numtarjeta.value;
 let patronTargeta=/^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
let fechaFin=document.formu.fechaexpiracion.value;
let patronFechaFin=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
let codigo=document.formu.codigoseguridad.value;
let patronCodigo=/\d/; 
if (patronNom.test(nom)==false){
    document.getElementById('nc').innerHTML='*';
    document.getElementById('nc').style.color='red';
   
}
if (patronMail.test(mail)==false){
    document.getElementById('ce').innerHTML='*';
    document.getElementById('ce').style.color='red';
    
}
if (patronTelf.test(telf)==false){
    document.getElementById('t').innerHTML='*';
    document.getElementById('t').style.color='red';
    
}
if(document.formu.tipoentrada[0].checked ==false &&document.formu.tipoentrada[1].checked ==false &&document.formu.tipoentrada[2].checked ==false&&document.formu.tipoentrada[3].checked ==false &&document.formu.tipoentrada[4].checked ==false &&document.formu.tipoentrada[5].checked ==false){
document.getElementById('selec').innerHTML="Seleccione un asiento";
document.getElementById('selec').style.color='red';
}  


if (patronEntrada.test(entrada)==false){
    document.getElementById('e').innerHTML='*';
    document.getElementById('e').style.color='red';
   
}
if (patronTargeta.test(targeta)==false){
        document.getElementById('tc').innerHTML='*';
        document.getElementById('tc').style.color='red';
       
}
if (patronFechaFin.test(fechaFin)==false){
    document.getElementById('fe').innerHTML='*';
    document.getElementById('fe').style.color='red';
    
}
if (patronCodigo.test(codigo)==false){
    document.getElementById('co').innerHTML='*';
    document.getElementById('co').style.color='red';
   
}
else {
    alert("Su solicitud se esta tramitando.");
}
}