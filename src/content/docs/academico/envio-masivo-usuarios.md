---
title: Envio Masivo de Usuarios
description: Genera credenciales masivas, envia correos y fuerza cambio de contrasena para prospectos.
---

## Descripcion
Modulo para generar cuentas de usuario para prospectos sin acceso y, opcionalmente, enviar credenciales por correo forzando cambio de contrasena.

### Acceso
**Ruta:** `/academico/generacion_envio_masivo`  
**Menu:** Academico > Envio Masivo de Usuarios

### Funcionalidad
- Generar credenciales masivas
- Enviar credenciales por email
- Forzar cambio de contrasena en primer login
- Seleccionar prospectos especificos
- Historial de generaciones
- Validacion previa

### Pantalla principal - pestana "Generacion"
Metricas: Prospectos Sin Usuario, Envio de Emails, Cambio de Contrasena.

Toggles:
- Enviar Credenciales por Email (activado por defecto)
- Forzar Cambio de Contrasena (activado por defecto)

Info de seguridad:
- Contrasenas generadas de 12 caracteres (mayus, minus, numeros, simbolos)
- Solo se envian por email si el toggle esta activo
- Almacenadas con bcrypt
- Rol Estudiante asignado automaticamente

### Procedimiento: Generar usuarios masivamente
1) Revisar configuracion: conteo de prospectos, estado de envio de emails y cambio de contrasena.
2) Configurar toggles segun politica.
3) Seleccionar prospectos (pestana "Seleccionar Prospectos").
4) Ejecutar: boton "Generar Usuarios y Enviar Correos a [X] Prospectos".
5) Si el envio esta activo, se envian correos; revisar confirmacion.

### Seleccion de prospectos
Encabezado: "Seleccionar Prospectos" con conteo.
Botones: "Seleccionar Pagina (max 200)" y "Seleccionar TODOS ([X])", refrescar.
Filtros: busqueda (nombre/correo/carnet), programa, ordenar por, mostrar 25/50/100.
Tabla: checkbox, Carnet, Nombre Completo (link), Correo, Estado (badge), paginacion y contador.

### Pestana "Historial"
- Registro de generaciones con fecha/hora, cantidad y estado de emails.
- Permite auditar procesos previos.

### Notas
- Seguridad: contrasenas unicas, bcrypt; recomendable activar envio y forzar cambio.
- Rendimiento: puede tardar segun volumen; emails asincronos.
- Post-proceso: usuarios pueden acceder; si se forza cambio lo haran en primer login.
