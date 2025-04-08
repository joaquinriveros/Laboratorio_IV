const fs = require('fs/promises');
const readline = require('readline');
const yargs = require('yargs');

// Configuración de yargs para obtener el nombre del archivo
const argv = yargs.option('file', {
    alias: 'f',
    type: 'string',
    default: 'productos.json',
    describe: 'Nombre del archivo JSON donde se van a guardar los productos'
}).argv;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que le pregunta al usuario
const pregunta = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
};

async function main() {
    try {
        // Se solicita lo datos al usuario
        const nombre = await pregunta('_ Ingrese el nombre del producto: ');
        const precio = parseFloat(await pregunta('_ Ingrese el precio del producto: '));
        const cantidad = parseInt(await pregunta('_ Ingrese la cantidad del producto: '), 10);

        // Validamos los datos
        if (isNaN(precio) || isNaN(cantidad)) {
            console.error('Error: el precio y la cantidad deben ser valores numéricos.');
            rl.close();
            return;
        }

        // Creamos objeto producto
        const producto = { nombre, precio, cantidad };

        let productos = [];
        
        // Si el archivo existe intenta leerlo
        try {
            const data = await fs.readFile(argv.file, 'utf-8');
            productos = JSON.parse(data);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('Error al leer el archivo:', error);
                rl.close();
                return;
            }
        }

        // Agregamos nuevo producto
        productos.push(producto);

        // Guardamos en el archivo
        await fs.writeFile(argv.file, JSON.stringify(productos, null, 2));
        console.log('Producto guardado correctamente.');

        // Se lee y luego muestra el contenido del archivo
        const nuevoContenido = await fs.readFile(argv.file, 'utf-8');
        console.log('Contenido actualizado del archivo:', nuevoContenido);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
}

main();
