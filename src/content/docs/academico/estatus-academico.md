---
title: Estatus Academico
description: Lista y detalle de estudiantes con filtros, exportes y vista completa.
---

## Descripcion
Visualizacion consolidada del estado academico de estudiantes con filtros, exportes y vista detallada.

### Acceso
**Ruta:** `/academico/estatus-alumno`  
**Menu:** Academico > Estatus Academico

### Funcionalidad
- Ver lista completa de estudiantes
- Buscar por nombre, carnet, correo o programa
- Filtrar por programa y estado
- Exportar Excel o CSV
- Abrir detalle completo por estudiante (calificaciones, cursos, progreso)

### Pantalla principal
- Encabezado: titulo "Estatus Academico de Estudiantes" y subtitulo con total (ej: 2861 de 2861)
- Botones: "Excel", "CSV", "Actualizar"
- Busqueda: texto en vivo
- Filtros: Programa Academico (Todos ...), Estado (Todos ...)
- Limpiar filtros: restablece filtros y busqueda
- Paginacion: mostrar 10/25/50/100; "Mostrando X a Y de Z"

### Tabla
- Columnas: Estudiante (nombre/link), Carnet, Correo, Programa, Estado (badge), Acciones ("Ver Detalle Completo")
- Busqueda y filtros aplican en tiempo real

### Procedimientos
- **Buscar:** escribir en campo; tabla se filtra y puedes abrir "Ver Detalle Completo".
- **Filtrar:** elegir Programa y Estado; la tabla se actualiza; usar "Limpiar Filtros" para resetear.
- **Exportar:** aplicar filtros si se desea; usar Excel o CSV para descargar lo visible/filtrado.

### Vista de detalle por estudiante
Incluye datos personales, cursos aprobados/reprobados/en progreso, promedio/GPA, creditos, asistencia, progreso hacia graduacion, estado y ultima actividad, historial y documentos.

### Notas
- Busqueda en tiempo real; filtros combinan con AND.
- Exporta solo lo que ves (respeta filtros).
- Boton "Actualizar" recarga desde base de datos.
