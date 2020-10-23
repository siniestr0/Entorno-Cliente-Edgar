var operacion1 = (10 == 10);
var operacion2 = (10 === 10);
var operacion3 = (10 === 10.0);
var operacion4 = ("Laura" == "laura");
var operacion5 = ("Laura" > "laura");
var operacion6 = ("Laura" < "laura");
var operacion7 = ("123" == 123);
var operacion8 = (parseInt("123") === 123);

//10 == 10 true
alert ("La operación 10 == 10 es " + (operacion1));

//10 === 10 true ESTRICTAMENTE IGUAL mismo valor y mismo tipo
alert ("La operación 10 === 10 " + (operacion2));

//10 === 10.0 true ESTRICTAMENTE IGUAL mismo valor y mismo tipo
alert ("La operación 10 === 10.0 " + (operacion3));

//Laura == laura false
alert ("La comparativa entre Laura y laura es " + (operacion4));

//Laura > laura false
alert ("Laura mayor que laura " + (operacion5));

//Laura < laura true
alert ("Laura menor que laura " + (operacion6));

//"123" == 123 true
alert ("La operación '123' == 123 " + (operacion7));

//parseInt("123") === 123 ESTRICTAMENTE IGUAL, ya que ambos numeros son integer y mismo valor
alert ("La operación de parseInt('123') === 123 " + (operacion8));