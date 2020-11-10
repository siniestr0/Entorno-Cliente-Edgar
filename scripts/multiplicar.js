var numero = prompt("Introduce número para la tabla");

document.write("Tabla de multiplicar del " + numero + "<br>");


for (i = 1; i <= 10; i++) {

    document.write("<li>");
    document.write(numero + "x" + i + "=" + numero * i + "<br>");
    document.write("</li>");
    

}

