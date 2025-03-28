# Proyecto: Gestión de Productos

Este es un proyecto en Node.js que permite solicitar información de productos al usuario, guardarla en un archivo JSON y mostrar su contenido en la consola.

## Características
- Solicita datos al usuario mediante `readline`.
- Guarda los productos en un archivo JSON especificado por el usuario con `yargs`.
- Si el archivo ya existe, agrega el nuevo producto sin sobrescribir los anteriores.
- Muestra el contenido actualizado del archivo después de cada ingreso.
- Utiliza `fs/promises` para manejar archivos de manera asíncrona sin callback hell.

## Instalación
1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd mi_proyecto_examen
   ```
2. Instala las dependencias necesarias:
   ```sh
   npm install
   ```

## Uso
Ejecuta el programa con el siguiente comando:
```sh
node app.js --file productos.json
```
O con la versión corta del argumento:
```sh
node app.js -f productos.json
```

### Entrada del usuario
El programa solicitará:
1. **Nombre del producto**
2. **Precio del producto**
3. **Cantidad de unidades**

### Salida esperada
Después de ingresar los datos, el programa:
- Guardará el producto en `productos.json`.
- Mostrará en la consola el contenido actualizado del archivo.

## Archivo JSON de Salida
El archivo `productos.json` tendrá un formato como este:
```json
[
  {
    "nombre": "Laptop",
    "precio": 1200,
    "cantidad": 3
  },
  {
    "nombre": "Teclado",
    "precio": 50,
    "cantidad": 5
  }
]
```

## Tecnologías utilizadas
- Node.js
- Módulo `fs/promises` para manejo de archivos
- `readline` para entrada de usuario
- `yargs` para argumentos de línea de comandos

