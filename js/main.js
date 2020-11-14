// <!--       Cambiar colores        -->
var color12 = 1;
function invertir() {
var ao = document.getElementById("ao")
var au = document.getElementById("au")
var ae = document.getElementById("ae")
var seis = document.getElementById("seis");
var intro = document.getElementById("intro");
var introq = document.getElementById("introq");
var introw = document.getElementById("introw");
var introe = document.getElementById("introe");
var intror = document.getElementById("intror");
var introt = document.getElementById("introt");
var introy = document.getElementById("introy");
var introi = document.getElementById("introi");
var introo = document.getElementById("introo");
var introp = document.getElementById("introp");
var introa = document.getElementById("introa");
var resultado = document.getElementById("resultado");
if (color12 == 1){
ao.style.color="#ffffff";
au.style.color="#ffffff";
ae.style.color="#ffffff";
intro.style.color="#ffffff";
introq.style.color="#ffffff";
introw.style.color="#ffffff";
introe.style.color="#ffffff";
intror.style.color="#ffffff";
introppp.style.color="#ffffff";
introt.style.color="#ffffff";
introy.style.color="#ffffff";
introi.style.color="#ffffff";
introo.style.color="#ffffff";
introp.style.color="#ffffff";
introa.style.color="#ffffff";
resultado.style.border="#ffffff";
document.body.style.backgroundColor="black";}else{
ao.style.color="black"
au.style.color="black";
ae.style.color="black";
intro.style.color="black";
introq.style.color="black";
introw.style.color="black";
introe.style.color="black";
intror.style.color="black";
introppp.style.color="black";
introt.style.color="black";
introy.style.color="black";
introi.style.color="black";
introo.style.color="black";
introp.style.color="black";
introa.style.color="black";
resultado.style.border="black";
document.body.style.backgroundColor="#ffffff";
color12 = 0;}
color12++;
};
//<!--        Sumar          -->
function sumar(){
var numero = document.getElementById("num1").value;
var otronumero = document.getElementById("num2").value;
var suma = parseInt(numero) + parseInt(otronumero);
alert ("la suma es " +suma);
};
//<!--        Multiplicar          -->
function multi(){
var multiyo = document.getElementById("multiyo").value;
var multiel = document.getElementById("multiel").value;
var leyo = multiyo * multiel;
alert ("la multiplicacion es " +leyo);
};
//<!--        Restar          -->
function restar(){
  var a = document.getElementById("Leyomenosuno").value;
  var b = document.getElementById("Leyomenosdos").value;
  var restacionado = a - b;
  alert("La resta es " +restacionado );
};
//<!--        Dividir          -->
function divino(){
  var c = document.getElementById("efe").value;
  var d = document.getElementById("F").value;
  var dividi = c / d;
  alert("La divicion es " +dividi);
};
function regla(){
  var g = document.getElementById("estox").value;
  var ha = document.getElementById("poresto").value;
  var j = document.getElementById("divesto").value;
  var gxha = g * ha;
  var gxhadj = gxha / j;
  alert("El resultado es " +gxhadj);
}
