---
title: "Admin General"
description: "Panel central de administracion de prospectos con 4 secciones: Gestion de Leads, Asesores, Reportes y Duplicados."
---

## Descripcion
Panel central de administración de prospectos con 4 secciones principales: Gestión de Leads, Asesores, Reportes y Duplicados. Proporciona una vista consolidada para administradores y gerentes comerciales.

### Acceso
**Ruta:** `/admin`  
**Menú:** Prospectos y Asesores > Admin General

### Interfaz Principal

**Encabezado:**
- Título: "Panel de Administración"
- Subtítulo: "Panel de Administración de Prospectos"
- Botón: **"Configuración"** (esquina superior derecha - acceso a configuraciones del módulo)

**Navegación por Pestañas:**
- 4 pestañas principales horizontales con fondo beige cuando están activas

## Pestaña 1: Gestión de Leads

### Descripción
Vista principal para administrar todos los leads/prospectos del sistema con opciones de búsqueda, filtrado, selección masiva y reasignación.

### Controles de Búsqueda y Filtros

1. **Campo "Buscar prospectos..."**
   - Búsqueda en tiempo real
   - Busca por nombre, email, teléfono

2. **Dropdown "Todos"**
   - Filtro por estado/tipo de prospecto
   - Opciones: Todos, Nuevo, Contactado, Calificado, Negociación, Inscrito, Perdido

3. **Campo "Filtrar por asesor..."**
   - Busca y filtra por asesor asignado
   - Permite escribir nombre del asesor

4. **Botón "Filtros"** (ícono de embudo)
   - Abre panel con filtros avanzados
   - Posiblemente: fecha, fuente, programa de interés, etc.

### Acciones Masivas

5. **Botón "Eliminar seleccionados"** (rojo)
   - Aparece cuando hay prospectos seleccionados
   - Elimina múltiples registros
   - Solicita confirmación

6. **Botón "Reasignar prospectos"** (azul/blanco)
   - Permite cambiar asesor de múltiples prospectos
   - Requiere selección previa

### Tabla de Prospectos

**Columnas:**
- **Checkbox** - Selección individual o masiva
- **Nombre** - Nombre completo del prospecto
- **Email** - Correo electrónico
- **Teléfono** - Número de contacto
- **Donde Labora** - Empresa/institución actual
- **Estado** - Estado actual en el pipeline (badge con color)
- **Asesor** - Nombre del asesor asignado
- **Acciones** - Botones de acción rápida (ver, editar, eliminar, etc.)

**Paginación:**
- Dropdown: Selecciona registros por página (10, 25, 50, 100)
- Botón: **"Anterior"** - Va a página previa
- Indicador: "Página X de Y"
- Botón: **"Siguiente"** - Va a siguiente página

### Procedimientos

**Buscar Prospectos:**
1. Escribe en "Buscar prospectos..." (nombre, email o teléfono)
2. Usa dropdown "Todos" para filtrar por estado
3. Escribe en "Filtrar por asesor..." para filtrar por asesor específico
4. Haz clic en "Filtros" para opciones avanzadas
5. La tabla se actualiza en tiempo real

**Reasignar Prospectos Masivamente:**
1. Selecciona prospectos usando checkboxes (o checkbox maestro para todos)
2. Haz clic en **"Reasignar prospectos"**
3. Selecciona el nuevo asesor en el diálogo
4. Confirma la reasignación
5. Sistema actualiza los registros

**Eliminar Prospectos:**
⚠️ **Acción Crítica - Usa con precaución**
1. Selecciona prospectos a eliminar con checkboxes
2. Haz clic en **"Eliminar seleccionados"** (botón rojo)
3. Confirma la eliminación escribiendo "ELIMINAR" o similar
4. Sistema elimina permanentemente

## Pestaña 2: Asesores

### Descripción
Gestión de rendimiento, comisiones y metas del equipo de asesores comerciales. Incluye múltiples vistas para análisis detallado.

### Interfaz de Asesores

**Encabezado:**
- Título: "Rendimiento de Asesores"
- Subtítulo: "Gestiona el rendimiento y las comisiones de tu equipo de ventas"
- Botón: **"Configurar Comisiones"** (esquina superior derecha)

**Sub-pestañas Disponibles:**
1. **Tabla General** (activa por defecto)
2. **Comisiones** - Gestión de comisiones por asesor
3. **Metas por Asesor** - Definir y seguir metas
4. **Reglas Globales** - Configuración de reglas de comisión
5. **Comisiones V2** - Versión alternativa/actualizada
6. **Rendimiento Histórico** - Tendencias y análisis temporal

### Vista: Tabla General

**Métricas Principales:**
- **Total comisiones:** Q0 (verde) - Suma total de comisiones del período
- **Tasa promedio:** 0.0% (azul) - Promedio de tasa de conversión

**Tabla de Rendimiento:**

Columnas:
- **Nombre** - Nombre del asesor
- **Leads** - Cantidad de leads asignados
- **Conversiones** - Cantidad de conversiones logradas
- **Ingresos** - Ingresos generados por el asesor
- **Rendimiento** - Indicador o porcentaje de rendimiento
- **Acciones** - Opciones (ver detalle, editar metas, etc.)

**Botones de Acción:**
- **"Ver análisis"** (ícono de gráfico/barras) - Muestra análisis detallado del asesor
- **"Exportar reporte"** (azul oscuro) - Descarga reporte en formato seleccionado

### Procedimientos en Asesores

**Ver Rendimiento General:**
1. Pestaña "Asesores" → Sub-pestaña "Tabla General"
2. Revisa métricas: Total comisiones, Tasa promedio
3. Tabla muestra rendimiento de cada asesor
4. Usa "Ver análisis" para profundizar en un asesor específico

**Configurar Comisiones:**
1. Botón **"Configurar Comisiones"** (esquina superior derecha)
2. Define estructura de comisiones (%, fijo, escalonado, etc.)
3. Asigna reglas por programa o tipo de producto
4. Guarda configuración

**Exportar Reporte:**
1. Botón **"Exportar reporte"**
2. Selecciona formato (PDF, Excel, CSV)
3. Define rango de fechas si aplica
4. Descarga archivo

## Pestaña 3: Reportes

### Descripción
Visualización y exportación de reportes detallados de rendimiento con filtros avanzados y múltiples vistas de análisis.

### Interfaz de Reportes

**Encabezado:**
- Título: "Reportes y Análisis"
- Subtítulo: "Visualiza y exporta reportes detallados de rendimiento"
- Botón: **"Actualizar"** (esquina superior derecha - refresca datos)

**Sección: Filtros**

Controles de filtrado:
1. **Desde:** Campo de fecha (ej: 01/12/2025)
2. **Hasta:** Campo de fecha (ej: 07/12/2025)
3. **Asesor:** Dropdown "Todos los asesores"
4. **Programa:** Dropdown "Todos los programas"
5. **Enlace "Limpiar filtros"**

**Sub-pestañas de Reportes:**
1. **Asesores** (activa) - Rendimiento por asesor
2. **Leads** - Análisis de leads
3. **Conversiones** - Análisis de conversiones
4. **Detalle por Asesor** - Vista detallada individual

### Vista: Asesores (Rendimiento por Asesor)

**Título de Sección:** "Rendimiento por Asesor"

**Botones de Exportación:**
- **CSV** - Exporta en formato CSV
- **Excel** - Exporta en formato Excel (.xlsx)
- **PDF** - Exporta en formato PDF

### Procedimientos en Reportes

**Generar Reporte con Filtros:**
1. Pestaña "Reportes"
2. Sección "Filtros": Selecciona fecha "Desde" y "Hasta", Asesor, Programa
3. Sistema actualiza gráficos y tablas automáticamente
4. Usa "Limpiar filtros" para resetear

**Exportar Reporte:**
1. Aplica filtros deseados
2. Selecciona sub-pestaña (Asesores, Leads, Conversiones, Detalle)
3. Haz clic en botón de formato deseado: **CSV**, **Excel** o **PDF**
4. El archivo se descarga automáticamente

## Pestaña 4: Duplicados

### Descripción
Herramienta para detectar y gestionar registros duplicados de prospectos en el sistema, ayudando a mantener la base de datos limpia.

### Interfaz de Duplicados

**Encabezado:**
- Título: "Registros duplicados"

**Controles de Búsqueda:**

1. **Campo "Buscar por nombre o email..."**
2. **Dropdown "Todos"** - Filtra por tipo o categoría de duplicado
3. **Dropdown "≥..."** (Mayor o igual que) - Define umbral de coincidencia (≥80%, ≥90%, ≥95%, 100%)
4. **Dropdown "Sim..."** (Similitud) - Método de detección (Exacta, Fonética, Difusa)
5. **Dropdown numérico "5"** - Cantidad mínima de coincidencias
6. **Botón "Buscar duplicados"** (con ícono de refresh)

### Procedimientos en Duplicados

**Buscar Duplicados:**
1. Pestaña "Duplicados"
2. Define criterios: tipo, porcentaje (≥90%), método (Exacta), cantidad mínima
3. Haz clic en **"Buscar duplicados"**
4. Sistema procesa (muestra "Cargando...")
5. Revisa resultados agrupados

**Gestionar Duplicados (cuando se encuentran):**
1. Revisa cada grupo de duplicados
2. Compara información de cada registro
3. Opciones: **Fusionar** (combina registros), **Eliminar** (borra redundantes), **Mantener separados**
4. Confirma acción
5. Sistema actualiza registros
