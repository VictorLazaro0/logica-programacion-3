
function  Factorial() {
    //  Recupero el valor que se agrega en el input en mi formulario
    const valorTexto = document.getElementById('num').value;
    // Convierto mi valorText de mi formuraio a un constatnte numero
    const numero = Number(valorTexto); 
    //valido  si el valor ingresado  es realmente un número y que sea numeros positivos 
    if (!isNaN(numero) && valorTexto !== "" && Number.isInteger(numero) && numero >= 0) {
        //creo mi ciclo for para hacer la operacion de calcular el factorial del numero que se ingrese
        let factorial = 1;
          for(let i = 1; i <= numero ; i++)
          {
            factorial *= i;
          }
        // Muestro  el número recuperado en el <span> de mi html , el numero que se engresa ene l input
        document.getElementById('numero').innerHTML = numero;
        //Muestro en el html el resultado de mi operacion de calculo del factorial 
        document.getElementById('resultado').innerText = factorial;
    } else {
        //Ai no  es un numero valido muestro el mensaje de error 
        document.getElementById('resultado').innerText = "Ingresa un  numero valido y  que sea Positivo .!!!! Gracias!!!!";
    }
}