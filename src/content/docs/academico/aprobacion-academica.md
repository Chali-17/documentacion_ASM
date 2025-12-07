---
title: Aprobacion Academica
description: Fichas de inscripcion con busqueda, prioridad y trazabilidad de aprobaciones.
---

## Descripcion

Sistema de aprobacion y validacion de documentos, registros y cambios academicos en el sistema.

### Acceso
**Ruta:** `/academico/aprobacion`  
**Menu:** Academico > Aprobacion Academica

### Interfaz principal
- Titulo: "Ficha de Inscripcion" → "Aprobacion Academica"
- Descripcion: "Revisa y aprueba la informacion academica para completar el proceso de inscripcion"
- Busqueda: Campo "Nombre, programa o ID"
- Filtro de prioridad: Dropdown (Todas, Alta, Media, Baja)
- Pendientes: badge verde con conteo (ej: 0 Pendientes)
- Tabla: columnas ID, Nombre, Programa, Fecha, Prioridad, Ultima Actualizacion, Acciones
- Navegacion: boton "Volver al inicio" (arriba derecha)

### Funcionalidad
- Ver cantidad de fichas pendientes
- Buscar por nombre, programa o ID
- Filtrar por prioridad
- Revisar detalle de ficha
- Aprobar o rechazar cambios
- Registrar comentarios/observaciones (cuando aplique)
- Trazabilidad de decisiones (auditoria)

### Procedimiento: Buscar y filtrar fichas
1) Escribe nombre, programa o ID en el buscador.
2) Selecciona prioridad (Todas/Alta/Media/Baja).
3) Revisa el contador de pendientes.
4) Consulta la tabla (ID, Nombre, Programa, Fecha, Prioridad, Ultima Actualizacion).

### Procedimiento: Revisar una ficha (cuando existan registros)
1) Ubica la fila y entra a **Ver/Detalle**.
2) Revisa info academica y campos modificados.
3) Agrega comentarios si el flujo lo permite.

### Procedimiento: Aprobar o rechazar (cuando existan registros)
1) Abre la ficha desde **Acciones**.
2) Elige **Aprobar** o **Rechazar**.
3) Confirma (puede requerir observacion en rechazo).
4) El estado se actualiza y sale del conteo de pendientes.

### Notas y auditoria
- Todas las acciones se registran en bitacora.
- El contador de pendientes se actualiza tras procesar.
- Si no hay fichas, la tabla muestra "Mostrando 0 de 0 fichas".
