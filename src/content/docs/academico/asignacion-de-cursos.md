---
title: Asignacion de Cursos
description: Asigna cursos a estudiantes de forma individual o masiva con filtros, tarjetas y exportes.
---

## Descripcion
Modulo para asignar cursos a estudiantes de forma individual o por lotes, gestionar inscripciones y administrar la relacion entre cursos y alumnado.

### Acceso
**Ruta:** `/academico/asignacion`  
**Menu:** Academico > Asignacion de Cursos

### Funcionalidad
- Buscar y filtrar estudiantes para asignar cursos
- Asignar estudiantes a cursos especificos
- Vista de tarjetas por estudiante
- Seleccionar multiples estudiantes
- Exportar listados filtrados
- Cambiar asignaciones y generar reportes

### Interfaz principal
- Vista: tarjetas en grid
- Filtros: busqueda por nombre/carnet/abreviatura; dropdown de programa; dropdown de especialidad; rango de fechas (dd/mm/aaaa)
- Acciones: "Asignacion por Cursos" (boton verde), "Exportar Filtrados", "Seleccionar" (masivo), "Por pagina" (15/25/50)

### Tarjeta de estudiante
- Nombre del estudiante (icono usuario)
- ID de estudiante (ej: ASM2024217...)
- Checkbox de seleccion
- Programa academico
- Especialidad
- Boton "Asignar Cursos"
- Icono de descarga individual

### Procedimiento: Asignar cursos a un estudiante
1) Busca/filtra al estudiante.
2) Clic en "Asignar Cursos" en su tarjeta.
3) Selecciona cursos.
4) Confirma asignacion y verifica mensaje de exito.

### Procedimiento: Asignacion masiva
1) Aplica filtros necesarios.
2) Usa "Seleccionar" para marcar multiples estudiantes.
3) Usa "Asignar Cursos" masivo.
4) Confirma cursos para todos.
5) El sistema procesa la asignacion.

### Estructura de navegacion
- Asignacion Simple: tarjetas por estudiante.
- Asignacion por Cursos: vista alternativa agrupada por curso.
