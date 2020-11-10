    //creamos variable global para que se pueda usar desde cualquier parte del script
    var minute = 0;

    for ( var i = 9; i <= 20; i++){
        // comprobamos las horas
        // como solo queremos que llegue hasta las 21 horas, lo dejamos en hasta 20
        if(i == 9){
            document.write (i + ":" + minute + "<br>");
        }

        for (var j = 1; j <= 22; j++) {

            //ahora vamos a comprobar los minutos
            if (minute < 55) {
                minute = minute + 5;
                document.write(i + ":" + minute + "<br>");
            }
        }
        // comprobamos los minutos
        if ( minute > 50) {
            minute = 0;
            document.write((i + 1 ) + ":" + minute + "<br>");
        }
    }
        
    
