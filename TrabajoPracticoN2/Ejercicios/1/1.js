/*
    _____________________________________________________ Ejercicio 1 _____________________________________________________

    Escribir en el archivo un mensaje de inicio cada vez que el programa se ejecuta, con la fecha y hora actual en el formato:

    [YYYY-MM-DD HH:MM:SS] - Inicio del programa
    Simular la ejecución de una tarea que tarda 5 segundos. Mientras la tarea se ejecuta, escribir en log.txt:

    [YYYY-MM-DD HH:MM:SS] - Ejecutando tarea...
    Cuando la tarea finaliza, escribir en log.txt:

    [YYYY-MM-DD HH:MM:SS] - Tarea completada

*/

const fs = require('fs'); // Módulo para manipulación de archivos
const path = require('path'); // Módulo para manejo de rutas de archivos
const { getCurrentTime } = require('../utils/Funcion'); // Función que obtiene la fecha y hora actual en formato [YYYY-MM-DD HH:MM:SS]

/**
 * Función para escribir en el archivo log
 * @param {string} message - Mensaje que se registrará en el log
 */
function writeLog(message) {
    // Formato del mensaje con la fecha y hora actual
    const logMessage = `[${getCurrentTime()}] - ${message}\n`;

    // Ruta donde se almacenará el log.txt en el mismo directorio del script
    const logFilePath = `${path.dirname(__filename)}/log.txt`;

    // Escribe el mensaje en el archivo log, agregándolo sin sobrescribir el contenido anterior
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
}

// Se registra el inicio del programa en el log y en la consola
writeLog('Inicio del Programa');
console.log('Inicio del Programa');

// Simulación de una tarea que toma tiempo para ejecutarse
writeLog('Ejecutando Tarea, espere...');
console.log('Ejecutando Tarea, espere...');

// Simulación de un proceso que dura 5 segundos antes de completar
setTimeout(() => {
    writeLog('Tarea Completada con Éxito'); // Se registra finalización en el log
    console.log('Tarea Completada con Éxito'); // Se muestra por consola
}, 5000);
