---
title: Gestión de Roles
description: Módulo para crear, editar y gestionar roles del sistema, así como asignar permisos a cada rol.
---

## Descripción

Módulo para crear, editar y gestionar roles del sistema, así como asignar permisos a cada rol.

### Acceso

**Ruta:** `/seguridad/roles`  
**Menú:** Seguridad > Roles (si está habilitado)

**Nota:** Este módulo puede no aparecer en tu menú actual dependiendo de los permisos asignados a tu rol.

## Vista Principal

### Tabla de Roles

Información mostrada por rol:
- **Nombre del Rol:** Identificador del rol
- **Descripción:** Breve descripción de las funciones
- **Usuarios Asignados:** Cantidad de usuarios con ese rol
- **Permisos:** Lista de módulos/permisos asignados
- **Acciones:** Editar, Duplicar, Eliminar

## Roles Predefinidos del Sistema

El sistema incluye los siguientes roles por defecto:

1. **Administrador**
   - Acceso completo al sistema
   - Gestión de usuarios, roles y permisos
   - Configuración del sistema
   - Reportes y auditoría

2. **Docente**
   - Portal docente
   - Gestión de cursos asignados
   - Calificaciones de estudiantes
   - Material didáctico

3. **Estudiante**
   - Portal estudiante
   - Consulta de calificaciones
   - Documentos académicos
   - Pagos y estados de cuenta

4. **Administrativo**
   - Gestión de inscripciones
   - Reportes básicos
   - Documentación
   - Seguimiento administrativo

5. **Finanzas**
   - Gestión de pagos
   - Reportes financieros
   - Conciliación bancaria
   - Estados de cuenta

6. **Seguridad**
   - Auditoría del sistema
   - Control de accesos
   - Respaldos
   - Políticas de seguridad

## Crear Nuevo Rol

### Paso 1: Iniciar Creación

1. Hacer clic en el botón **"+ Nuevo Rol"**
2. Se abre el formulario de creación

### Paso 2: Información Básica

- **Nombre del Rol:** Identificador único (ej: "Coordinador Académico")
- **Descripción:** Explicación breve de las funciones del rol
- **Color:** Seleccionar color para el badge visual (opcional)

### Paso 3: Asignar Permisos

El sistema muestra una matriz de permisos por módulos:

**Módulos Disponibles:**
- Administración
- Académico
- Docentes
- Estudiantes
- Finanzas
- Seguridad
- Reportes
- Configuración

**Tipos de Permisos por Módulo:**
- ✅ **Ver:** Puede visualizar la información
- ✅ **Crear:** Puede agregar nuevos registros
- ✅ **Editar:** Puede modificar registros existentes
- ✅ **Eliminar:** Puede borrar registros
- ✅ **Exportar:** Puede descargar reportes

**Asignación de Permisos:**
1. Marcar el checkbox del módulo para acceso completo
2. O marcar individualmente cada tipo de permiso
3. Repetir para todos los módulos necesarios

### Paso 4: Guardar Rol

1. Revisar todos los permisos asignados
2. Hacer clic en **"Crear Rol"**
3. El nuevo rol aparecerá en la lista

## Editar Rol Existente

1. Localizar el rol en la tabla
2. Hacer clic en **"Editar"** (icono de lápiz)
3. Modificar nombre, descripción o permisos
4. Hacer clic en **"Guardar Cambios"**

**Nota:** Los cambios afectan a todos los usuarios con ese rol inmediatamente.

## Duplicar Rol

Útil para crear roles similares:
1. Hacer clic en **"Duplicar"** (icono de copiar)
2. Se crea una copia con el nombre "Copia de [Rol]"
3. Editar el nuevo rol según necesidades

## Eliminar Rol

⚠️ **Advertencia:** No se pueden eliminar roles que tienen usuarios asignados.

1. Verificar que no hay usuarios con ese rol
2. Hacer clic en **"Eliminar"** (icono de basura)
3. Confirmar la eliminación
4. El rol se eliminará permanentemente
