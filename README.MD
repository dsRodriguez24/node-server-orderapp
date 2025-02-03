# API de Ordenes - Node.js

Esta API de órdenes está construida con **Node.js** y utiliza **TypeORM** con **PostgreSQL** como base de datos.

## Requisitos

- Node.js (v16 o superior)
- PostgreSQL

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/dsRodriguez24/node-server-orderapp.git
    cd node-server-orderapp
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura la base de datos:

    - Asegúrate de tener PostgreSQL instalado y en ejecución.
    - Crea una base de datos para la API.

4. Configura las variables de entorno:

    Modifica las variables de entorno del archivo `.env`:

    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=<tu_usuario_de_postgresql>
    DB_PASSWORD=<tu_contraseña_de_postgresql>
    DB_NAME=<nombre_de_tu_base_de_datos>
    ```

    Asegúrate de reemplazar `<tu_usuario_de_postgresql>`, `<tu_contraseña_de_postgresql>` y `<nombre_de_tu_base_de_datos>` con los valores adecuados.

5. Inicia el servidor:

    ```bash
    npm run dev
    ```

La API debería estar corriendo en `http://localhost:8080`.

## Base de datos

Esta API está conectada a una base de datos PostgreSQL utilizando **TypeORM**. Asegúrate de que la base de datos y las tablas estén configuradas correctamente antes de iniciar la API.

## Tecnología utilizada

- Node.js
- TypeORM
- PostgreSQL
- Express.js