/*
    Ejercicio 4
    Desarrollar un programa en Node.js que:
    1.	Reciba como argumento el nombre de un archivo de texto.
    2.	Lea el contenido del archivo y cuente cuántas veces aparece una palabra específica (también pasada como argumento).
    3.	Imprima en consola el número de apariciones de la palabra.
    Ejemplo de uso:
    node contadorPalabras.js archivo.txt palabras


    archivo.txt
    Hola mundo, este es un ejemplo de conteo de palabras en un archivo.
    Este archivo contiene palabras repetidas. Palabras, palabras y más palabras.


    Salida esperada (si la palabra aparece 3 veces en el archivo):
    La palabra "palabras" aparece 5 veces en el archivo "archivo.txt".

*/

const fs = require('fs');
const path = require('path'); // Libreria para manejar rutas de archivos (Opcional)

// Función para contar las apariciones de una palabra en un archivo
function countWordInFile(fileName, word) {
    const data = fs.readFileSync(`${path.dirname(__filename)}/${fileName}`, 'utf8');
    // match(): devuelve un array con todas las apariciones encontradas. Si no encuentra ninguna, devuelve null.
    const wordCount = data.match(new RegExp(word, 'gi')).length; 
    console.log(`La palabra: "${word}", aparece ${wordCount} veces en el archivo "${fileName}".`);
}

// Ejecución de la función
countWordInFile('archivo.txt', 'día');