# APPOINT ME

[![forthebadge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://shields.io)

Esta es una aplicación web diseñada exclusivamente para administradores, que permite gestionar médicos y sus horarios de manera eficiente. La página incluye funcionalidades para agregar médicos, administrar sus datos y horarios, y gestionar la información del perfil del administrador.

 ![admin-doctor](https://github.com/user-attachments/assets/8e96d814-f2eb-4afd-85f1-3bd4162dc076)

## **Tabla de contenido**

- [Funcionalidades](#funcionalidades)
  - [Inicio de Sesión](#1-inicio-de-sesión)
  - [Menú Principal](#2-menú-principal)
  - [Agregar Médico](#3-agregar-médico)
  - [Administrar Médicos](#4-administrar-médicos)
  - [Perfil](#5-perfil)
  - [Cerrar Sesión](#6-cerrar-sesión)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## **Funcionalidades**

### 1. **Inicio de Sesión**

![login](https://github.com/user-attachments/assets/ec9635fc-c52b-49a1-99b3-e5986101a3fe)

- **Descripción**: Lo administradores deben iniciar sesión utilizando su número de cédula y contraseña.
- **Restricciones**: Solo los usuarios con credenciales válidas tienen acceso.
___

### 2. **Menú Principal**

![main-menu](https://github.com/user-attachments/assets/fa5ace04-fd21-4db5-9d80-93e97a436f6a)

Al iniciar sesión, el administrador verá un menú con las siguientes opciones:
1. **Agregar Médico**
2. **Administrar Médicos**
3. **Perfil**
4. **Cerrar Sesión**
___

### 3. **Agregar Médico**

![add-doctor](https://github.com/user-attachments/assets/2b837d9f-0586-4357-a072-2cc1b5a05a1b)

- **Descripción**: Página con un formulario para agregar nuevos médicos al sistema.
- **Campos del formulario**:
  - Nombre
  - Correo electrónico
  - Identificación
  - Especialidad
- **Acción**: Al completar el formulario y enviarlo, el médico se registra en la base de datos.
___

### 4. **Administrar Médicos**

![admin-doctor](https://github.com/user-attachments/assets/1218cf78-d27f-48a6-a829-98d571eca418)

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
___

### 5. **Perfil**

![profile](https://github.com/user-attachments/assets/efc39aa9-c29c-4432-aac1-f63908c41cd4)

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
___

### 6. **Cerrar Sesión**

- **Descripción**: Permite cerrar la sesión activa de manera segura y redirige al administrador a la página de inicio de sesión.
___

## **Tecnologías Utilizadas**

- **Frontend**: Angular (HTML, CSS)
- **Backend**: JavaSpring, Angular (TypeScript)
___

## **Servidor**

Corre `ng serve` para ejecutar. Navega hacia `http://localhost:4200/`. La aplicación automáticamente cargara en el navegador.