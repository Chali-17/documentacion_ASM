---
title: "Captura de Prospectos"
description: "Formulario para capturar nuevos prospectos de forma individual o importarlos masivamente desde archivos."
---

## Descripcion
Formulario para capturar nuevos prospectos de forma individual o importarlos masivamente desde archivos. Permite registrar información completa del prospecto y programar seguimientos inmediatos.

### Acceso
**Ruta:** `/captura`  
**Menú:** Prospectos y Asesores > Captura de Prospectos

### Dos Pestañas Disponibles
1. **"Captura Individual"** (beige cuando activa) - Formulario manual
2. **"Importar Estudiantes"** (blanca cuando inactiva) - Importación masiva

## Captura Individual

### Formulario de Captura

**Información Personal y Contacto:**

1. **Fecha** - Campo con calendario, muestra "domingo, 07 de diciembre de 2025", fecha de captura (editable si necesitas registrar con fecha anterior)
2. **Nombre Completo** ⚠️ Requerido - Nombre y apellidos del prospecto
3. **Teléfono** ⚠️ Requerido si no hay correo - Mínimo 8 dígitos, nota: "Requerido si no hay correo"
4. **Correo Electrónico** ⚠️ Requerido si no hay teléfono - Validación de formato, nota: "Requerido si no hay teléfono"

**Información Demográfica:**

5. **Género** - Dropdown: Masculino, Femenino, Otro, Prefiero no decir
6. **Empresa donde labora** - Dropdown con lista de empresas registradas, opción agregar nueva

**Información Laboral:**

7. **Puesto** - Campo de texto, cargo o posición actual
8. **Origen** - Dropdown: Redes Sociales, Referido, Web, Evento, Llamada en frío, Email marketing, etc.

**Notas y Observaciones:**

9. **Notas generales** - Textarea, información adicional del primer contacto
10. **Observaciones** - Textarea, detalles específicos o recordatorios

### Agregar Tarea al Calendario

**Sección:**
- Ícono de calendario azul
- Texto: "Crea una tarea de seguimiento asociada a este prospecto"
- **Botón: "+ Nueva Tarea"** (azul oscuro) - Abre diálogo para programar tarea (Tipo, Fecha y hora, Recordatorio, Notas), asocia automáticamente al prospecto

**Información Académica:**

11. **Programa de Interés** - Dropdown con programas académicos (BBA, MBA, Maestrías, Diplomados)
12. **Duración (meses)** - Campo numérico, se auto-completa al seleccionar programa, editable

**Información Geográfica:**

13. **País** - Dropdown con "Guatemala" pre-seleccionado
14. **Departamento** - Dropdown/búsqueda (se habilita después de país), placeholder "Cargando..."
15. **Municipio** - Dropdown "Seleccione un departamento primero" (se habilita después de departamento)

### Botones de Acción

1. **"Cancelar"** (botón blanco/outline) - Limpia formulario, descarta captura, pide confirmación si hay datos
2. **"Guardar Prospecto"** (botón azul oscuro) - Valida campos requeridos, crea registro, redirige, muestra confirmación

### Validaciones del Formulario

**Campos Obligatorios:** Nombre Completo, Teléfono O Correo (al menos uno), Origen

**Validaciones Específicas:**
- **Teléfono:** Mínimo 8 dígitos
- **Email:** Formato válido (incluye @)
- **Duplicados:** Sistema alerta si existe prospecto con mismo email/teléfono

### Procedimiento: Capturar Nuevo Prospecto

1. Pestaña "Captura Individual"
2. **Información personal:** Nombre, Teléfono (mín 8 dígitos), Correo, Género
3. **Información laboral:** Empresa, Puesto
4. **Seleccionar origen** (fuente de captación)
5. **Agregar notas y observaciones** (si necesario)
6. **Información académica:** Programa de interés, Duración (autocompleta)
7. **Ubicación:** País (Guatemala por defecto), Departamento, Municipio
8. **Opcional:** Botón **"+ Nueva Tarea"** para programar seguimiento
9. **"Guardar Prospecto"** - Sistema valida, guarda y muestra confirmación

### Programar Tarea Inmediata

1. Después de llenar datos básicos
2. **"+ Nueva Tarea"**
3. Formulario: Tipo (Llamada, Envío info, Reunión), Fecha y hora, Descripción, Recordatorio
4. **Guardar tarea** - Se asocia automáticamente, aparecerá en calendario del asesor

### Cancelar Captura

1. Si decides no guardar
2. **"Cancelar"**
3. Confirmación: "¿Deseas descartar los cambios?"
4. Confirmar o cancelar
5. Formulario se limpia

## Pestaña 2: Importar Estudiantes

### Descripción
Herramienta para importar leads masivamente desde archivos CSV o Excel. Útil para cargar listas grandes de prospectos de eventos, campañas o bases de datos externas.

### Interfaz

**Encabezado:**
- Título: "Importar Leads"
- Botón: **"← Volver al inicio"**

**Sección: "Archivo CSV o Excel"**

1. **Campo de Selección:** "Elegir archivo", Estado: "No se eligió ningún archivo", Formatos: .csv, .xlsx, .xls
2. **Botón "Mostrar Estructura"** (blanco/outline) - Muestra estructura esperada, indica columnas requeridas, proporciona ejemplo, ayuda a preparar archivo
3. **Botón "Importar Leads"** (azul oscuro) - Inicia proceso, se habilita después de seleccionar archivo, valida datos, muestra progreso

### Estructura del Archivo

**Columnas Requeridas:** Nombre completo, Email o Teléfono (al menos uno), Origen

**Columnas Opcionales:** Empresa, Puesto, Género, Programa de interés, País, Departamento, Municipio, Notas, Observaciones

**Ejemplo CSV:**
```
Nombre,Email,Teléfono,Programa,Empresa,Puesto,Origen,Departamento,Notas
Juan Pérez,juan@email.com,12345678,MBA,TechCorp,Gerente,Web,Guatemala,Interesado en horario nocturno
María López,maria@email.com,87654321,Diplomado Marketing,Retail SA,Ejecutiva,Facebook,Sacatepéquez,Consulta sobre becas
```

### Procedimientos

**Ver Estructura:**
1. **"Mostrar Estructura"**
2. Panel con: lista de columnas (nombre, tipo, obligatoria/opcional, longitud máx), reglas de validación, ejemplos
3. (Opcional) Descarga plantilla ejemplo
4. Cierra panel, prepara archivo siguiendo estructura

**Importar Archivo:**
1. Pestaña "Importar Estudiantes"
2. **"Elegir archivo"** - Selecciona archivo preparado
3. Muestra nombre del archivo seleccionado
4. Opcional: **"Mostrar Estructura"** para verificar
5. **"Importar Leads"**
6. Sistema procesa: Validación, Detección duplicados, Creación registros
7. Reporte: Leads importados exitosamente, Leads con errores (si hay), Duplicados detectados
8. Opción descargar reporte de errores

**Manejo de Duplicados:**
- Sistema detecta por email o teléfono
- Opciones: Omitir (no importar), Actualizar existente, Importar como nuevo
- Genera reporte de duplicados

### Notas Importantes

✅ **Validación:** Sistema valida email/teléfono, campos requeridos presentes, duplicados detectados.

📋 **Preparación:** Descargar/ver estructura antes, respetar nombres columnas, una fila por prospecto, no dejar celdas vacías en requeridos.

🔄 **Asignación:** Leads importados se asignan al usuario que importa o distribuyen según reglas, pueden reasignarse posteriormente.

📊 **Después de Importar:** Aparecen en "Gestión de Prospectos", se filtran por fecha de importación, cada asesor ve sus asignados.

⚠️ **Errores Comunes:** Email incorrecto, teléfono <8 dígitos, origen vacío/no válido, columnas nombres incorrectos, caracteres especiales en nombres.

💡 **Mejores Prácticas:** Revisar archivo antes, hacer prueba con pocos registros primero, limpiar duplicados en fuente, validar datos manualmente antes de cargar, guardar copia del original.
