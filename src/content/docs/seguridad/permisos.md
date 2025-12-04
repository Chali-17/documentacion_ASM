---
title: Gestión de Permisos
description: Sistema avanzado para gestionar permisos granulares por usuario, rol, módulo y vista específica.
---

## Descripción

Sistema avanzado para gestionar permisos granulares por usuario, rol, módulo y vista específica del sistema.

### Acceso

**Ruta:** `/seguridad/permisos`  
**Menú:** Seguridad > Permisos  
**Icono:** 🔒 Permisos

## Pestañas Principales

El módulo de permisos se divide en 4 pestañas:

### 1. Permisos por Usuarios

**Vista de Usuarios Individual:**
- Tabla con todos los usuarios del sistema
- Columnas: Username, Email, Rol, Permisos Asignados
- Buscador para filtrar usuarios

**Asignar Permisos a Usuario:**
1. Seleccionar usuario de la tabla
2. Hacer clic en **"Ver/Editar Permisos"**
3. Se despliega panel con matriz de permisos
4. Marcar/desmarcar permisos según necesidad
5. Los permisos del usuario son **adicionales** a los de su rol
6. Hacer clic en **"Guardar Permisos"**

**Nota:** Los permisos individuales tienen prioridad sobre los del rol.

### 2. Permisos por Roles

**Vista de Roles:**
- Lista de todos los roles del sistema
- Muestra cantidad de permisos asignados a cada rol
- Cantidad de usuarios afectados

**Modificar Permisos de Rol:**
1. Seleccionar el rol
2. Hacer clic en **"Configurar Permisos"**
3. Matriz completa de permisos por módulo
4. Marcar permisos necesarios
5. Guardar cambios
6. **Efecto inmediato** en todos los usuarios del rol

### 3. Módulos y Vistas

**Gestión de Módulos:**
Lista de todos los módulos del sistema:
- Administración
- Académico
- Docentes
- Estudiantes
- Finanzas
- Seguridad
- Reportes
- Dashboard
- Inscripción
- Seguimiento

**Información por Módulo:**
- Nombre del módulo
- Descripción
- Ruta del sistema
- Vistas disponibles
- Roles con acceso
- Estado (activo/inactivo)

**Crear Nuevo Módulo:**
1. Clic en **"+ Nuevo Módulo"**
2. Ingresar datos:
   - Nombre del módulo
   - Ruta en el sistema (ej: `/academico/cursos`)
   - Descripción
   - Icono (opcional)
3. Guardar
4. El módulo estará disponible para asignación de permisos

**Gestión de Vistas:**
Cada módulo puede tener múltiples vistas (subpáginas):
- Listar vistas del módulo
- Crear nueva vista
- Editar vista existente
- Activar/desactivar vista

### 4. Asignación de Permisos

**Vista Matricial:**
Tabla cruzada que muestra:
- **Filas:** Todos los roles del sistema
- **Columnas:** Todos los módulos y vistas
- **Celdas:** Checkboxes para asignar/quitar permisos

**Uso de la Matriz:**
1. Localizar la intersección rol-módulo
2. Marcar/desmarcar checkbox según necesidad
3. Los cambios se guardan automáticamente
4. Indicador visual de permisos activos (checkbox verde)

**Asignación Rápida:**
- **Por Fila (Rol):** Marcar checkbox del nombre del rol para dar acceso completo
- **Por Columna (Módulo):** Marcar checkbox del módulo para asignarlo a todos los roles
- **Individual:** Marcar cada celda específica

## Tipos de Permisos Granulares

**Permisos CRUD:**
- **Crear (Create):** Agregar nuevos registros
- **Leer (Read):** Ver información
- **Actualizar (Update):** Modificar registros existentes
- **Eliminar (Delete):** Borrar registros

**Permisos Especiales:**
- **Exportar:** Descargar reportes y archivos
- **Importar:** Cargar datos masivos
- **Aprobar:** Validar o rechazar solicitudes
- **Configurar:** Acceder a ajustes del módulo
