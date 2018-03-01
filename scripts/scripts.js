alert("Hello World");
document.write("<h1>Hello World</h1>");

var condoms = ["today", "M", "El tino", "Profamilia", "Durex"];

for (var i = 0; i < condoms.length; i++) {
    document.writeln(condoms[i]);
}

function calcularperimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}


function calcularSemiperimetro(lado1, lado2, lado3) {
    return calcularperimetro(lado1, lado2, lado3) / 2;
}

function areaTriangulo(lado1, lado2, lado3) {
    return calcularSemiperimetro(lado1, lado2, lado3) * (calcularSemiperimetro(lado1, lado2, lado3) - lado1) *
        calcularSemiperimetro(lado1, lado2, lado3) * (calcularSemiperimetro(lado1, lado2, lado3) - lado2) *
        calcularSemiperimetro(lado1, lado2, lado3) * (calcularSemiperimetro(lado1, lado2, lado3) - lado3);
}

var markupElement=document.getElementsByTagName("p");

var classElement= document.getElementsByClassName("clasep");

var idElement= document.getElementById("parrafo");

var newElement=document.createElement("i");

newElement.textContent="I am new text":

idElement.appendChild(newElement);
