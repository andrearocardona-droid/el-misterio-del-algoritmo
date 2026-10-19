/* ACTIVIDAD DEL PROFE FERNANDO: EL MISTERIO DEL ALGORITMO
Desafío 1: Condicionales Simples
Crear un algoritmo que determine si un año es bisiesto.
Desafío 2: Ciclos y Arreglos
Crear un algoritmo que encuentre el número más grande en una lista de 10 números.
Desafío 3: Combinación de Estructuras
Crear un juego donde la computadora elige un número y el usuario tiene 5 intentos para adivinarlo. El programa debe mostrar pistas como “El número es más alto” o “El número es más bajo”. */

// DESAFIO 1: DETERMINAR SI UN AÑO ES BISIESTO

function verificarAnioBisiesto() {
    const entrada = prompt("DESAFIO 1\nIngresa un año que consideres bisiesto:");

    // Si el usuario llega a cancelar se terminara el ejercicio //
    if (entrada === null) {
        return;
    }

    const anio = Number(entrada);

    // Revisamos que el año sea un numero entero positivo.
    if (!Number.isInteger(anio) || anio <= 0) {
        alert("Ingresa un año valido que consideres bisiesto. (Si no sabes cuales son, te recomiendo buscarlo en Google)");
        return verificarAnioBisiesto();
    }

    // Un año es bisiesto si se divide entre 400,
    // o si se divide entre 4 pero no entre 100.
    if (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)) {
        alert("El año " + anio + " es bisiesto.");
    } else {
        alert("El año " + anio + " no es bisiesto.");
    }
}




// Desafío 2: Ciclos y Arreglos- Crear un algoritmo que encuentre el número más grande en una lista de 10 números.*//

function encontrarNumeroMayor() {
    const numeros = [];

    // Pedimos diez numeros y los guardamos en una lista.
    for (let i = 0; i < 10; i++) {
        const entrada = prompt(
            "DESAFIO 2\nIngresa un numero del " + (i + 1) + " de 10:"
        );

        if (entrada === null) {
            return;
        }

        const numero = entrada.trim() === "" ? NaN : Number(entrada);

        // Si el dato no es un numero, volvemos a comenzar.
        if (!Number.isFinite(numero)) {
            alert("Dato no valido. Comencemos de nuevo.");
            return encontrarNumeroMayor();
        }

        numeros.push(numero);
    }

    // Consideramos el primer numero como el mayor inicialmente en este caso sera el 0 //
    let mayor = numeros[0];

    // Comparamos los otros numeros para encontrar el mayor.
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    alert(
        "Los numeros ingresados fueron: " + numeros.join(", ") +
        "\nEl numero mas grande es: " + mayor
    );
}


// DESAFIO 3: Crear un juego donde la computadora elige un número y el usuario tiene 5 intentos para adivinarlo. El programa debe mostrar pistas como “El número es más alto” o “El número es más bajo //

function juegoAdivinanza() {
    // La computadora elige un numero del 1 al 100.
    const secreto = Math.floor(Math.random() * 100) + 1;
    let adivinado = false;

    // la persona tiene cinco intentos para adivinar //
    for (let intento = 1; intento <= 5; intento++) {
        const entrada = prompt(
            "DESAFIO 3: ADIVINANZA\n" +
            "Adivina un numero del 1 al 100.\n" +
            "Intento " + intento + " de 5:"
        );

        if (entrada === null) {
            return;
        }

        const numero = entrada.trim() === "" ? NaN : Number(entrada);

        // Validamos que sea un numero entero entre 1 y 100.
        if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
            alert("Ingresa un numero entero del 1 al 100.");
            intento--;
            continue;
        }

        // Comparamos el numero ingresado con el secreto.
        if (numero === secreto) {
            alert("¡Felicidades! Adivinaste el numero.");
            adivinado = true;
            break;
        } else if (numero < secreto) {
            alert("Pista: el numero secreto es mas alto.");
        } else {
            alert("Pista: el numero secreto es mas bajo.");
        }
    }

    // Si no adivina, mostramos el numero secreto.
    if (!adivinado) {
        alert(
            "Se acabaron los cinco intentos. " +
            "El numero secreto era: " + secreto
        );
    }
}


// EJECUCION PRINCIPAL DEL TALLER

function iniciarTaller() {
    alert("¡Bienvenido a El Misterio del Algoritmo de Kodigo!");

    verificarAnioBisiesto();
    encontrarNumeroMayor();
    juegoAdivinanza();

    alert("¡Gracias por participar en El Misterio del Algoritmo de Kodigo!");
}