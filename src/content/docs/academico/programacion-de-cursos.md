---
title: "Programacion de Cursos"
description: "Gestion del catalogo de cursos: filtros, creacion, edicion, estados y acciones."
---

## Descripcion
Modulo para crear, editar y administrar cursos ofrecidos, con filtros, estados y acciones sobre el catalogo.

### Acceso
**Ruta:** `/academico/cursos`  
**Menu:** Academico > Programacion de Cursos

### Funcionalidad
- Ver lista completa de cursos
- Crear/editar/eliminar cursos
- Filtrar por multiples criterios
- Cambiar estado (draft, activo, etc.)
- Validar/aprobar cursos

### Pantalla principal
- Breadcrumb: Academico > Cursos
- Boton "Resumir" (sup der) y "+ Nuevo Curso" (sup der)
- Titulo "Gestion de Cursos" y subtitulo "Administre los cursos ofrecidos y su informacion basica"

### Filtros de busqueda
- Nombre (buscar por nombre; busca parcial, insensible a mayusculas)
- Codigo (BBA85-3, MBA11-3, etc.)
- Area (Todas las areas; comun, especializada, basica, practica, etc.)
- Programa (Todos los programas)
- Facilitador (Todos)
- Estado (Todos / draft / activo / inactivo / cancelado / archivado)
- Botones: "Limpiar Filtros" y "+ Nuevo Curso" (limpia resetea a valores por defecto)

### Tabla de cursos
- Columnas: Codigo, Nombre (link), Area (badge), Creditos, Programa, Facilitador, Estado (badge), Acciones.
- Ejemplos de codigo: BBA85-3, MBA11-3, MBA-4; nombres incluyen periodo ("Diciembre Sabado 2025 ...").
- Acciones: Editar (lapiz), Eliminar (basura), Validar (check), Mas opciones (menu contextual).

### Procedimientos
- **Crear curso:** "+ Nuevo Curso" → llenar codigo (unico), nombre, descripcion, area, programa, facilitador/docente, creditos, prerequisitos/corequisitos → Guardar (estado inicial draft).
- **Editar curso:** lapiz o clic en nombre → modificar campos → Guardar.
- **Eliminar curso:** icono basura → confirmar (irreversible; preferible inactivar si hay inscritos).
- **Validar/Cambiar estado:** icono check/menus → transiciones (draft → Activo; inactivar, archivar, cancelar segun politicas).
- **Buscar/Filtrar:** usar campos y dropdowns; filtros se combinan (logica AND); "Limpiar Filtros" reinicia la vista completa.

### Informacion gestionada por curso
- Codigo unico, nombre, descripcion, creditos
- Area academica, programa/carrera, facilitador
- Prerequisitos/corequisitos, nivel, periodo/semestre
- Estado operativo y disponibilidad
- Disponibilidad para inscripcion y fechas (si aplica)

### Notas
- Codigo debe ser unico; todos los cursos parten como draft y deben validarse antes de inscribir estudiantes.
- Filtros combinan criterios (AND); busqueda por nombre es parcial.
- Preferir inactivar en vez de eliminar si hay estudiantes inscritos; la eliminacion es irreversible.
- Estados tipicos: draft (borrador), Activo (disponible), Inactivo (no disponible), Cancelado, Archivado (historico).
