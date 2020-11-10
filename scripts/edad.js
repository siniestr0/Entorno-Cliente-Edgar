    var edad = prompt("¿Cuántos años tienes?");
    
    if (edad > 60 ) {
    
        document.write("Soy un Jubilado");
    
    }else if (edad >= 27 & edad <=60) {
        
        document.write("Soy un Adulto");
    
    }else if (edad >= 13 & edad <=26){
    
        document.write("Soy un Joven");
    
    }else if (edad >= 0 & edad <=12){
    
        document.write("Soy un Niño");
    
    }else {
    
        document.write("El número no es válido.");
    }