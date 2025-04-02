import fs from 'fs';
import readline from 'readline';
import 'dotenv/config';
import { sumar } from './math.js';

// =====================
// EJERCICIO 1: Configuración de dotenv
// =====================
console.log('_ Configuraciones de la base de datos _');
console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_PASS: ${process.env.DB_PASS}`);

console.log('////////////////////////////////////////')

// =====================
// EJERCICIO 2: Uso de import/export
// =====================

console.log(`La suma de 5 y 3 da como resultado: ${sumar(5, 3)}`);

// =====================
// EJERCICIO 3: Pedir datos al usuario
// =====================

console.log('////////////////////////////////////////')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('_ ¿Cuál es tu nombre? ', (nombre) => {
  console.log(`¡Hola, ${nombre}!`);
  
  rl.question('_ Dime tu edad ', (edad) => {
    const añoNacimiento = new Date().getFullYear() - parseInt(edad);
    console.log(`_ Naciste en el año ${añoNacimiento}.`);

    rl.question('_ ¿Cuál es tu correo electrónico? ', (correo) => {
      // =====================
      // EJERCICIO 4: Guardar y leer datos en un archivo
      // =====================
      const datos = `Nombre: ${nombre}\nEdad: ${edad}\nCorreo: ${correo}`;
      fs.writeFileSync('datos_usuario.txt', datos);
      console.log('Datos guardados en datos_usuario.txt');

      // Leer y mostrar los datos guardados
      const contenido = fs.readFileSync('datos_usuario.txt', 'utf-8');
      console.log('\nContenido del archivo:');
      console.log(contenido);

      rl.close();
    });
  });
});
