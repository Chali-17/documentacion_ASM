---
title: Migrar Estudiantes
description: Importa estudiantes desde CSV/Excel con validacion, omitir-errores y reportes.
---

## Descripcion
Modulo para importar masivamente estudiantes desde archivos externos con validacion, manejo de errores y reportes.

### Acceso
**Ruta:** `/academico/migrar-estudiantes`  
**Menu:** Academico > Migrar Estudiantes

### Funcionalidad
- Descargar plantilla de formato requerido
- Cargar CSV o Excel
- Validar datos antes de importar
- Manejar errores y continuar con registros validos
- Generar reportes de migracion

### Paso 1: Descargar plantilla de ejemplo
- Boton "Descargar Plantilla" (excel/csv) con estructura correcta y datos de muestra.

### Paso 2: Preparar archivo
- Completar datos respetando columnas y formato.
- Revisar celdas obligatorias, emails validos, codigos de programa, nombres.

### Paso 3: Seleccionar archivo para importar
- Campo "Elegir archivo" (muestra nombre tras seleccionar).
- Acepta .csv, .xlsx, .xls.

### Opciones de importacion
- Checkbox "Omitir errores y continuar con los registros validos":
	- Activado: salta filas con error y sigue.
	- Desactivado: detiene si hay error.

### Paso 4: Ejecutar importacion
- Boton "Importar Estudiantes" (requiere archivo seleccionado).
- Procesa, muestra progreso y resultado.

### Durante la importacion
- Valida campos obligatorios, formatos, programas; crea/actualiza estudiantes; genera logs.

### Despues de la importacion
- Reporte: total procesado, exitosos, errores, detalle por fila, opcion de descargar reporte de errores.
- Resultados: exito total, parcial o fallido.

### Errores comunes (segun plantilla)
- Carnet duplicado; Email invalido; Programa no existe; Campo obligatorio vacio; Formato de telefono incorrecto.

### Columnas esperadas (tipico)
- Carnet, Nombre completo, Email, Telefono, Programa, Especialidad, Fecha de inscripcion, Estado inicial, Asesor, otros configurados.

### Notas
- Preparar con la plantilla; no cambiar nombres/orden de columnas.
- Para volumen grande, dividir en lotes; proceso es asincrono.
- Datos sensibles se almacenan encriptados.
