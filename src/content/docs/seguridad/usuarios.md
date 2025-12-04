---
title: Gestión de Usuarios
description: Módulo para crear, editar, activar/desactivar y eliminar usuarios del sistema.
---

## Descripción

Módulo para crear, editar, activar/desactivar y eliminar usuarios del sistema.

### Acceso

**Ruta:** `/seguridad/usuarios`  
**Menú:** Seguridad > Usuarios  
**Icono:** 👥 Usuarios (amarillo en menú)

## Vista Principal

### Filtros y Búsqueda

**Barra de Búsqueda**
- Campo de texto para buscar por:
  - Nombre de usuario (username)
  - Correo electrónico
  - Nombre completo
- La búsqueda es en tiempo real

**Filtro por Nombre Completo**
- Campo adicional para filtrar por nombre y apellido
- Útil para encontrar usuarios específicos rápidamente

**Filtro por Estado**
- Pestañas superiores:
  - **Todos:** Muestra todos los usuarios
  - **Activos:** Solo usuarios con estado activo
  - **Inactivos:** Solo usuarios desactivados

**Filtro por Rol**
- Dropdown para seleccionar un rol específico
- Opciones: Todos, Administrador, Docente, Estudiante, etc.

**Filtro por Fecha**
- Rango de fechas para filtrar por fecha de creación
- Campos: Fecha Inicio y Fecha Fin

### Tabla de Usuarios

Columnas mostradas:
1. **Checkbox:** Selección para acciones masivas
2. **Username:** Nombre de usuario único
3. **Email:** Correo electrónico
4. **Nombre Completo:** Nombre y apellido
5. **Rol:** Rol asignado con badge de color
6. **Estado:** Activo/Inactivo con indicador visual
7. **2FA:** Indica si tiene autenticación de dos factores
8. **Fecha de Creación:** Cuándo fue creado el usuario
9. **Acciones:** Botones de editar y eliminar

### Paginación

- Selector de registros por página (5, 10, 25, 50, 100)
- Navegación entre páginas
- Indicador de "Mostrando X de Y usuarios"

## Crear Nuevo Usuario

### Paso 1: Abrir el Formulario

1. Hacer clic en el botón **"Agregar Usuario"** (icono +) en la esquina superior derecha
2. Se abrirá un diálogo modal con el formulario

### Paso 2: Completar los Datos Obligatorios

**Información Básica:**
- **Username:** Nombre de usuario único (sin espacios)
  - Validación: Mínimo 1 carácter, sin espacios
  - Ejemplo: `juan.perez`

- **Email:** Correo electrónico válido
  - Validación: Formato de email válido
  - Ejemplo: `juan.perez@ejemplo.com`

- **Password:** Contraseña segura
  - Validación: Mínimo 8 caracteres
  - Debe cumplir con las políticas de seguridad
  - Se mostrará un indicador de fortaleza

**Información Personal (Opcional):**
- **First Name:** Primer nombre
- **Last Name:** Apellido

**Configuración de Cuenta:**
- **Rol:** Seleccionar el rol del dropdown
  - Opciones: Administrador, Docente, Estudiante, etc.
  - Campo obligatorio

**Opciones de Estado:**
- **Is Active:** Switch para activar/desactivar usuario
  - Por defecto: Activado
  
- **Email Verified:** Marcar si el email ya está verificado
  - Por defecto: Desactivado

- **MFA Enabled:** Habilitar autenticación de dos factores
  - Por defecto: Desactivado

### Paso 3: Guardar

1. Revisar que todos los campos obligatorios estén completos
2. Hacer clic en el botón **"Crear Usuario"**
3. Sistema valida los datos
4. Si hay errores, se mostrarán en rojo bajo cada campo
5. Si es exitoso, se muestra mensaje de confirmación
6. El usuario aparecerá en la tabla

## Editar Usuario Existente

### Paso 1: Seleccionar Usuario

1. Localizar el usuario en la tabla
2. Hacer clic en el botón **"Editar"** (icono de lápiz)
3. Se abre el formulario de edición con los datos actuales

### Paso 2: Modificar Datos

- Todos los campos son editables
- **Nota:** La contraseña solo se actualizará si se ingresa una nueva
- Modificar los campos necesarios

### Paso 3: Guardar Cambios

1. Hacer clic en **"Guardar Cambios"**
2. Confirmar la acción si se solicita
3. Los cambios se reflejan inmediatamente en la tabla

## Cambiar Estado de Usuario

### Activar/Desactivar Usuario Individual

1. Abrir el formulario de edición del usuario
2. Cambiar el switch "Is Active"
3. Guardar cambios

**Efecto de desactivar:**
- El usuario no podrá iniciar sesión
- Las sesiones activas se cerrarán automáticamente
- Los datos del usuario se conservan

## Acciones Masivas

### Selección Múltiple

1. Marcar los checkboxes de los usuarios deseados
2. Aparecerá una barra superior con opciones masivas

### Activar Usuarios en Masa

1. Seleccionar usuarios
2. Clic en **"Activar Seleccionados"**
3. Confirmar acción
4. Todos los usuarios seleccionados quedarán activos

### Desactivar Usuarios en Masa

1. Seleccionar usuarios
2. Clic en **"Desactivar Seleccionados"**
3. Confirmar acción
4. Los usuarios no podrán acceder al sistema

### Asignar Rol en Masa

1. Seleccionar usuarios
2. Clic en **"Asignar Rol"**
3. Elegir el rol del dropdown
4. Confirmar
5. Todos los usuarios tendrán el nuevo rol

## Eliminar Usuario

⚠️ **Advertencia:** Esta acción es permanente y no se puede deshacer.

### Eliminar Usuario Individual

1. Localizar el usuario en la tabla
2. Hacer clic en el botón **"Eliminar"** (icono de basura)
3. Leer la advertencia del diálogo de confirmación
4. Escribir "CONFIRMAR" en el campo de texto (si aplica)
5. Hacer clic en **"Eliminar Usuario"**
6. El usuario se eliminará de forma permanente

**Consecuencias:**
- Todos los datos del usuario se eliminarán
- Las sesiones activas se cerrarán
- Los registros de auditoría se conservarán por seguridad

## Exportar Datos de Usuarios

1. Configurar los filtros deseados (opcional)
2. Hacer clic en el botón **"Exportar"** (icono de descarga)
3. Seleccionar formato:
   - CSV: Para Excel
   - PDF: Para impresión
   - Excel: Formato nativo
4. El archivo se descargará automáticamente
