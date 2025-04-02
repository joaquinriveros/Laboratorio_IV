/*
    Ejercicio 2
    Desarrollar un programa en Node.js que realice las siguientes operaciones utilizando el módulo `fs`:

    1. Crear un archivo llamado `datos.txt` y escribir en él el siguiente contenido:
    ```
    Nombre: [Tu Nombre]
    Edad: [Tu Edad]
    Carrera: [Tu Carrera]
    ```
    
    2. Leer el archivo `datos.txt` e imprimir su contenido en la consola.

    3. Agregar al final del archivo la fecha y hora actuales en el siguiente formato:
    ```
    Fecha de modificación: [YYYY-MM-DD HH:MM:SS]
    ```

    4. Renombrar el archivo `datos.txt` a `informacion.txt`.

    5. Eliminar el archivo `informacion.txt` tras 10 segundos de haber sido renombrado.

*/

const fs = require('fs');
const path = require('path'); // Libreria para manejar rutas de archivos (Opcional)
const { getCurrentTime } = require('../utils/Funcion');

// Función para escribir en el archivo
function writeLog(name, age, career) {
    const logMessage = `'''\nNombre: [${name}]\nEdad: [${age}]\nCarrera: [${career}]\nFecha de modificación: [${getCurrentTime()}]\n'''`;
    fs.writeFileSync(`${path.dirname(__filename)}/datos.txt`, logMessage, 'utf8');
    console.log('Archivo datos.txt creado');
}

// Función para mostrar el contenido del archivo
function readLog() {
    const data = fs.readFileSync(`${path.dirname(__filename)}/datos.txt`, 'utf8');
    console.log(data);
}

// Función para renombrar el archivo y eliminarlo
function renameandDeleteFile() {
    // Renombrar el archivo
    fs.renameSync(`${path.dirname(__filename)}/datos.txt`, `${path.dirname(__filename)}/informacion.txt`);
    console.log('Archivo renombrado a informacion.txt');
    setTimeout(() => {
        // Eliminar el archivo tras 10 segundos
        fs.unlinkSync(`${path.dirname(__filename)}/informacion.txt`);
        console.log('Archivo informacion.txt eliminado');
    }, 10000);
}

// Ejecutar las funciones
writeLog('Joaquín', 22, 'Programación');
readLog();
renameandDeleteFile();