---
title: Moodle
description: Sincroniza cursos y usuarios con Moodle via API, con filtros y acciones masivas.
---

## Descripcion
Integracion con Moodle para sincronizar cursos, usuarios y datos academicos via API.

### Acceso
**Ruta:** `/academico/moodle`  
**Menu:** Academico > Moodle

### Funcionalidad
- Sincronizar cursos desde Moodle a ASM
- Transferir usuarios
- Actualizar inscritos
- Sincronizar calificaciones (si aplica)
- Validar conexion y ver historial
- Programar sincronizaciones

### Requisitos previos
- Conexion activa al servidor Moodle
- Credenciales y token API validos
- API habilitada y permisos suficientes

### Pantalla principal
- Breadcrumb: Academico > Cursos Moodle
- Seccion "Cursos desde Moodle" (datos via API)
- Busqueda "Buscar cursos..."
- Tres dropdowns genericos (todos/todos/todos) para filtros
- Checkbox global "Todos" para seleccion masiva
- Boton "Sincronizar seleccionados" (azul)

### Tabla (esperada)
- Checkbox, Codigo/ID, Nombre, Categoria, Docente, Inscritos, Estado, Ultima sincronizacion, Acciones.
- Paginacion: Pagina X de Y, botones Anterior/Siguiente.

### Procedimiento: Sincronizar cursos
1) Acceder a Academico > Moodle.
2) (Opcional) Aplicar busqueda/filtros.
3) Seleccionar cursos (checkbox global o individual).
4) Clic en "Sincronizar seleccionados".
5) Sistema obtiene datos, actualiza cursos e inscritos, genera log.

### Funciones adicionales
- Sincronizar calificaciones (si configurado).
- Transferir usuarios entre sistemas.
- Actualizar inscritos segun cambios en Moodle.
- Historial de sincronizaciones (fecha, cantidad, resultado).

### Validar conexion
- Si carga cursos: conexion activa.
- Si error: revisar credenciales, API, servidor y logs.

### Notas
- Sincronizacion puede tardar segun volumen; es asincrona.
- Datos se validan y se registran en logs.
- Se recomienda prueba parcial antes de sincronizar todo.
