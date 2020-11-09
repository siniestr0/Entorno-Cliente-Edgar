var nota = prompt("¿Qué nota has sacado?");
    
if (nota == 10 ) {

    document.write("Has sacado un sobresaliente");

}else if (nota == 8 || nota == 7) {
    
    document.write("Has sacado un notable");

}else if (nota == 6 || nota == 5){

    document.write("Has aprobado");

}else if (nota < 5){

    document.write("Has suspendido");

}