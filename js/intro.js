// Variable global
var a = "Buenos días";
document.write("<h1>Hola a todos!</h1>" + a);
document.write(`<h1>Hola a todos, ${a}</h1>`);
// Variables Locales
{
    let b = "Mi variable local";
    console.log(b);
}
//alert("Bienvenidos a JS");
let hora = prompt("Digite hora")

// Condicionales
if (hora > 0 && hora < 12) {
    alert("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches")
}