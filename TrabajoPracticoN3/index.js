const yargs = require('yargs');
const fs = require('fs')

const argv = yargs
    //1 - Comando para mostrar un saludo
    .command('saludar', 'Muestra un saludo', {
        nombre: {
            describe: 'Nombre de la persona a saludar',
            demandOption: true,
            type: 'string'
        }
    })

    //2 - Comando para despedirse de una persona
    .command('despedir', 'Muestra una despedida', {
        nombre: {
            describe: 'Nombre de la persona a despedir',
            demandOption: true,
            type: 'string'
        }
    })

    //3 - Comando para sumar dos números
    .command('sumar', 'suma de dos numeros', {
        n1: {
            describe: 'Primer Numero',
            demandOption: true,
            type: 'number'
        },
        n2: {
            describe: 'Segundo Numero',
            demandOption: true,
            type: 'number'
        }
    })

    //4 - Comando para leer un archivo JSON y mostrar su contenido en la terminal
    .command('leerArchivo', 'Lee un archivo JSON y muestra su contenido', {
        archivo: {
            describe: 'Archivo JSON',
            demandOption: true,
            type: 'string'
        }
    })

    .help()
    .argv;

//1 - Verifica si el usuario quiere saludar y muestra el mensaje correspondiente
if (argv._.includes('saludar')) {
    if (argv.nombre) {
        console.log(`Hola, ${argv.nombre}!`)
    } else {
        console.log('Error: tenes que ingresar un nombre')
    }
}

//2 - Verifica si el usuario quiere despedirse y muestra el mensaje correspondiente
if (argv._.includes('despedir')) {
    if (argv.nombre) {
        console.log(`Adios, ${argv.nombre}!`)
    } else {
        console.log('Error: tenes que ingresar un nombre')
    }
}

//3 - Verifica si el usuario quiere sumar dos números y muestra el resultado
if (argv._.includes('sumar')) {
    console.log(`La suma de: ${argv.n1} + ${argv.n2}, es igual a: ${argv.n1 + argv.n2}`)
}

//4 - Verifica si el usuario quiere leer un archivo JSON y muestra su contenido
if (argv._.includes('leerArchivo')) {
    fs.readFile(argv.archivo, 'utf8', (err, data) => {

        if (err) {
            console.error('Error al leer el archivo:', err.message);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            console.log('Contenido del archivo JSON:', jsonData);
        } catch (error) {
            console.error('Error al analizar el JSON:', error.message);
        }

    });
}
