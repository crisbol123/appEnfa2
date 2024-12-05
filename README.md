# Página Web para Administración Médica

## Descripción

Esta es una aplicación web diseñada exclusivamente para administradores, que permite gestionar médicos y sus horarios de manera eficiente. La página incluye funcionalidades para agregar médicos, administrar sus datos y horarios, y gestionar la información del perfil del administrador.

---

## Funcionalidades

### 1. **Inicio de Sesión**
- **Descripción**: Lo administradores deben iniciar sesión utilizando su número de cédula y contraseña.
- **Restricciones**: Solo los usuarios con credenciales válidas tienen acceso.

---

### 2. **Menú Principal**
Al iniciar sesión, el administrador verá un menú con las siguientes opciones:
1. **Agregar Médico**
2. **Administrar Médicos**
3. **Perfil**
4. **Cerrar Sesión**

---

### 3. **Agregar Médico**
- **Descripción**: Página con un formulario para agregar nuevos médicos al sistema.
- **Campos del formulario**:
  - Nombre
  - Correo electrónico
  - Identificación
  - Especialidad
- **Acción**: Al completar el formulario y enviarlo, el médico se registra en la base de datos.

---

### 4. **Administrar Médicos**
- **Descripción**: Página para gestionar médicos y sus horarios.
- **Componentes**:
  1. **Botones de Especialidades**: Botones con íconos representando las distintas especialidades médicas.
     - **Funcionalidad**: Al seleccionar un botón, en un campo `select` inferior se muestran los médicos asociados a esa especialidad.
  2. **Gestión de Médicos**:
     - **Eliminar Médico**: Botón para eliminar al médico seleccionado.
  3. **Gestión de Horarios**:
     - **Campos de Fecha y Hora**: Dos campos para seleccionar una fecha y una hora.
     - **Botón "Agregar Fecha"**: Permite agregar un nuevo horario para el médico seleccionado.
     - **Select de Fechas Disponibles**: Lista desplegable con las fechas previamente agregadas para el médico.
     - **Botón "Eliminar Fecha"**: Permite eliminar una fecha seleccionada.

---

### 5. **Perfil**
- **Descripción**: Página que muestra y permite editar la información del administrador.
- **Campos**:
  - Nombre
  - Correo electrónico
  - Identificación
  - Contraseña
- **Funcionalidades**:
  - Cada campo tiene un ícono de edición que permite modificar la información.
  - **Botón "Guardar Cambios"**: Guarda los cambios realizados en los campos.
- **Seguridad**: Solo se permiten ediciones para el usuario autenticado.

---

### 6. **Cerrar Sesión**
- **Descripción**: Permite cerrar la sesión activa de manera segura y redirige al administrador a la página de inicio de sesión.

---

## Tecnologías Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Base de Datos**: MySQL (o similar para gestión de datos)
- **Control de Sesiones**: PHP Sessions para autenticar y mantener la seguridad.

---

## Instalación y Uso
1. Clonar el repositorio en el servidor local.
2. Configurar el archivo de conexión a la base de datos (`config.php`) con las credenciales correspondientes.
3. Importar el archivo de la base de datos (`database.sql`) al gestor de base de datos.
4. Acceder a la página web desde un navegador utilizando la dirección del servidor local.

---

## Notas
- Asegúrese de mantener las credenciales seguras.
- La aplicación está diseñada para ser usada únicamente por administradores.
- Las validaciones del lado del cliente y del servidor garantizan la seguridad de los datos.

---

## Contacto
Para soporte o consultas, comuníquese con el desarrollador del sistema.

# AppEnfa2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
