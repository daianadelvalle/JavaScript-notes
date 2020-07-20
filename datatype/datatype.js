//Bienvenidas al maravillos mundo de JavaScript

/*Tipos de datos primitivos

-Antes de empezar debes familiarizarte con la palabra resevada "var". En este punto puede que estes pensando: "Más despacio
cerebrito! ¿Qué es una palabra reservada? (◐‿◑).

-Una palabra reservada es una palabra que, en lenguajes de programación se guarda para ser utilizada en funcionalidades especificas
y por eso no podremos utilizarla como nombre de variables por ejemplo; ya que el lenguaje la tiene encanutada para cositas mucho 
muy importantes.

Por ejemplo en Java no podremos nombrar variables como "private" o "public" ya que estas estan reservadas para los
modificadores de accesibilidad. (ﾉ^_^)ﾉ

Bien, "var" la usaremos para decirle a JavaScript que estamos definiendo una variable. Por ahora....*/


//NUMBERS

//tanto números enteros, decimales y números negativos se consideran de tipo NUMBER. ¿Por qué? No hay porqué.

var numeroEntero = 1;
var numeroDecimal = 1.5;
var numeroNegativo = -1;

//El método 'console.log()' es un método global de Js por lo que no necesitamos instanciarlo. Nos va a permitir imprimir por consola.
//typeof : nos va a indicar cuál es el tipo de dato exacto de una variable (Esto con Java no pasa!)
console.log(typeof numeroEntero);
console.log(typeof numeroDecimal);
console.log(typeof numeroNegativo);

//STRINGS o CADENAS DE TEXTO

var laMasHermosa = 'Dai'; //por convención se recomienda usar comillas simples en JS.
var estoEsUnaCadenaConDobleComillas = "Cadena";
console.log(typeof (laMasHermosa, estoEsUnaCadenaConDobleComillas));
//En este enlace podemos ver las propiedades  métodos que tienen los strings en JS y que podemos hacer con ellos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String

// BOOLEAN : Verdadero o falso

var verdadero = true;
var falso = false;

/*Además de los famosos true and false en JS tenemos valores que en ciertos contextos como un 'if' se pueden evaluar como booleanos
 por lo que tienden a verdadero o tienden a falso - KHE*/


//estos tipos seran considerados TRUE
var cadena = 'cadenita';
var cadenaS = "CADENITAS";
var entero = 1;
var negativo = -1;
var decimal = 1.5;

//estos tipos seran considerados FALSE

var zero = 0;
var vacioComoMiCorazon = '';
var vacioComoElCorazonDeEl = "";
var nulo = null;
var indefinide = undefined;

// NULL y UNDEFINED

/* ¿Qué tienen en común? 
-Ambos indican la ausencia de valor de una variable.

-¿En qué se diferencian?
Undefined lo asigna JavaScipt cuando no inicializamos la variable, por ejemplo:
 */

 var indefinida; //cree la variable 'indefinida' pero no le di un valor con el = ...

 //Null se especifica para indicar que la variable está vacia: lo hacemos nosotros no el JS:

 var vacioComoMiCorazon = null; 

 // Para tener en cuenta: 

 /*
 JavaScript es debilmente tipado: no tenemos que decirle que un número es un número y que una cadena es una cadena como por ejemplo
 con Java, él se da cuenta solito. Piola!, esto a veces da como resultado que hace cualquiera: no tan piola! */

 //Continuara... (づ￣ ³￣)づ 





