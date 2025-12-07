---
title: Gestion de Usuarios (Academico)
description: Genera carnets, plantillas y envia credenciales en tres pasos para estudiantes aprobados.
---

## Descripcion
Modulo integral para generar carnets y credenciales para estudiantes aprobados en tres pasos: generar carnets, descargar plantillas, cargar CSV y enviar credenciales.

### Acceso
**Ruta:** `/academico/usuarios`  
**Menu:** Academico > Gestion de Usuarios

### Funcionalidad
- Generar carnets de identificacion
- Crear/descargar plantillas de credenciales
- Cargar CSV procesado y enviar credenciales por email
- Ver resumen de comisiones
- Filtrar por fechas
- Seguimiento de estado de generacion

### Dashboard
- Titulo "Gestion de Usuarios Academicos" y subtitulo
- Boton "Ver Resumen de Comisiones"
- Metricas: Total Pendientes, Con Carnet, Sin Carnet, Listos para Enviar

### Proceso en 3 pasos
1) **Generar Carnets y Plantillas** (card azul) – inicia generacion de carnets.
2) **Descargar Plantillas** (card amarilla) – descarga CSV para procesar.
3) **Cargar CSV y Enviar Credenciales** (card naranja) – carga CSV y envia emails.

### Filtros
- Buscar: nombre/correo/carnet (en vivo)
- Fecha desde / Fecha hasta (dd/mm/aaaa)
- Boton "Aplicar Filtros"

### Paso 1: Seleccionar estudiantes y generar carnets
- Encabezado con conteo "X de Y seleccionados" y boton "Generar Carnets".
- Tabla con: checkbox, Carnet, Dia1/Dia2/Dia3, Mes de Ingreso, Inscripcion, Monto Mensualidad, Nombres, Apellidos, Telefono, Email, Programa, Asesor.
- Flujo: seleccionar estudiantes → Generar Carnets → Continuar a Descargar Plantillas.

### Paso 2: Descargar plantillas
- Descarga CSV con datos de estudiantes para procesar credenciales.

### Paso 3: Cargar CSV y enviar credenciales
- Cargar archivo CSV procesado.
- Boton "Enviar Credenciales" para enviar emails con usuario/contrasena.

### Notas
- Seguridad: contrasenas encriptadas; se recomienda cambio tras primer login.
- Datos requeridos: estudiante aprobado, info personal completa, programa y asesor.
- Filtros por cohorte y busqueda rapida ayudan a seleccionar.
