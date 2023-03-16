let nombre, edad, nombreUsuario, edadMinima; // Declaración de variables


//Definimos las variables declaradas
edadMinima = 18;   
nombre = prompt("Ingrese su nombre");
/*
El método prompt permite ingresar datos a través de la ventana 
de alerta.
----- NOTA!! ----
Los datos que entran en prompt siempre serán de tipo string(Cadena de caracteres)
recuerda utilizar el método "parseInt" para cambiar el tipo:
- parseInt(); - cambia de tipo a entero
-----------------
*/

edad = prompt("Ingrese su edad"); 
nombreUsuario = prompt("Ingrese su usuario");

// alert(), genera un recuadro de alerta para el usuario
/*
----- NOTA!! ----
Recuerda que es diferente a comfirm(), ya que el método comfirm(), si realiza una
acción dependiendo la elección 
-----------------
*/
alert(nombre + " tiene " + edad + ' ' + "y su usuario es " + nombreUsuario);



//Los if son él fuljo de control más básico que me permiten condicionar mi código.

if ( edad > edadMinima){
    alert("Puedes ingresar")
    document.write(`${nombre} tiene ${edad} y su usuario es ${nombreUsuario}`);
}
//En caso de ser falso podemos hacer una segunda validación con else if ()
else if ( edad === edadMinima){
    alert("Puedes ingresar, pero deberias hacer tu tarea")
}
//¿y si ninguna es verdadero? Bueno usamos else, para notificar al usuario de que algo sucedió
else{
    alert("Eres menor de edad")
}