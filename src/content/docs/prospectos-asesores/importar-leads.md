---
title: "Importar Leads"
description: "Herramienta para importacion masiva de leads desde archivos CSV o Excel con validacion, mapeo de campos y gestion de duplicados."
---

## Descripcion
Herramienta para importación masiva de leads/prospectos desde archivos externos (CSV o Excel). Permite cargar grandes cantidades de prospectos de forma eficiente con validación y gestión de campos personalizada.

### Acceso
**Ruta:** `/importar-leads`  
**Menú:** Prospectos y Asesores > Importar Leads

### Funcionalidad General
- Importar leads masivamente desde archivos CSV o Excel
- Ver estructura esperada del archivo
- Gestionar campos de la base de datos (configuración de columnas)
- Validar datos antes de importar
- Procesar importación con manejo automático de errores
- Asignar automáticamente fuente de captación
- Asignar asesor responsable a los leads importados
- Ver reporte de importación (exitosos/fallidos)

### Interfaz Principal

**Encabezado:**
- **Título:** "Importar Leads"
- **Botón:** "← Volver al inicio"

**Sección de Carga:**
1. **"Archivo CSV o Excel"** - Indica formatos aceptados
2. **Campo de Selección:**
   - Botón "Elegir archivo" - Abre explorador
   - Texto: "No se eligió ningún archivo"
   - Acepta: `.csv`, `.xls`, `.xlsx`

**Botones de Acción:**
3. **"Mostrar Estructura"** (blanco con borde) - Muestra estructura esperada, columnas requeridas, formato de datos, ejemplos
4. **"Gestionar Campos DB"** (blanco con borde, ícono ⊕) - Abre panel gestión de campos, configura mapeo columnas→campos sistema, define obligatorios, establece valores por defecto, configura validaciones
5. **"Importar Leads"** (azul oscuro - principal) - Ejecuta importación, solo activo con archivo seleccionado, procesa registros, muestra progreso

### Estructura de Archivo Esperada

**Columnas Típicas Requeridas:**
1. **Nombre** (obligatorio) - Texto, sin caracteres especiales
2. **Email** (obligatorio) - usuario@dominio.com, valida duplicados
3. **Teléfono** (obligatorio) - 12345678 o +502 1234-5678
4. **Programa de Interés** (opcional) - Debe coincidir con programas en sistema
5. **Empresa, Puesto, Origen/Fuente, Asesor Asignado, Departamento, Notas** (opcionales)

**Ejemplo CSV:**
```
Nombre,Email,Teléfono,Programa,Empresa,Puesto,Origen,Departamento,Notas
Juan Pérez,juan.perez@email.com,41234567,MBA,TechCorp,Gerente,Web,Guatemala,Interesado en horario nocturno
María López,maria.lopez@email.com,51234567,Diplomado Marketing,Retail SA,Ejecutiva,Facebook,Sacatepéquez,Consulta sobre becas
Carlos Gómez,carlos.gomez@email.com,61234567,Maestría Finanzas,Banco ABC,Analista,Referido,Quetzaltenango,Referido por alumno actual
```

### Procedimientos Principales

#### 1. Ver Estructura del Archivo

**Pasos:**
1. **"Mostrar Estructura"**
2. Panel con: **Lista de columnas** (nombre, tipo dato, obligatoria/opcional, longitud máx), **Reglas de validación** (formato email, teléfono, valores permitidos), **Ejemplos** (filas con datos correctos)
3. (Opcional) Descarga plantilla de ejemplo
4. Cierra panel
5. Prepara archivo siguiendo estructura

**Notas:** Respetar nombres exactos de columnas (sensible a mayúsculas), columnas opcionales pueden omitirse, orden de columnas no importa si nombres coinciden.

#### 2. Gestionar Campos de Base de Datos

**Pasos:**
1. **"Gestionar Campos DB"** (ícono ⊕)
2. Panel con:
   - **Mapeo de Columnas:** Lista campos sistema (izq) → dropdown columnas archivo (der)
   - Ejemplo: Nombre Completo → [Nombre], Correo Electrónico → [Email], Teléfono Principal → [Teléfono], etc.
3. **Configurar Campos Obligatorios:** Marca checkboxes (típicamente: Nombre, Email, Teléfono)
4. **Valores por Defecto:** Para campos no en archivo (ej: Estado inicial = "Nuevo", Fuente = "Importación masiva")
5. **Configurar Validaciones:** Formato email, teléfono, longitud mín/máx, valores permitidos
6. **"Guardar Configuración"** - Confirmación, se mantiene para futuras importaciones

**Beneficios:** Reutilizar configuración, flexibilidad con formatos, validación automática según reglas.

#### 3. Seleccionar Archivo para Importar

**Pasos:**
1. Prepara archivo siguiendo estructura
2. **"Elegir archivo"** - Explorador de archivos
3. Navega y selecciona (`leads_enero_2025.csv` o `prospectos_facebook.xlsx`)
4. "Abrir"
5. Nombre aparece en área de visualización
6. Texto cambia a nombre del archivo
7. **"Importar Leads"** se activa (gris → azul)

**Validaciones Iniciales:** Formato válido (CSV/XLS/XLSX), archivo no vacío, tamaño máx (5-10 MB).

**Formatos:** CSV (.csv) separado comas UTF-8, Excel (.xls) 97-2003, Excel (.xlsx) 2007+.

#### 4. Ejecutar Importación de Leads

**Pasos:**
1. Archivo seleccionado
2. (Opcional) Revisa configuración con "Gestionar Campos DB"
3. **"Importar Leads"**
4. Sistema inicia:

**Fase 1: Validación (automática)**
- Lee todas las filas
- Valida campos obligatorios, formato emails, teléfonos
- Detecta duplicados por email
- Identifica errores
- Modal progreso: "Validando...", "Procesando fila X de Y...", barra visual

**Fase 2: Pre-visualización (si hay errores)**
- Resumen: ✅ "120 registros válidos", ⚠️ "30 registros con errores"
- Lista errores: Fila 5 Email inválido, Fila 12 Teléfono faltante, etc.
- Opciones: **"Importar Solo Válidos"** (procesa 120, omite 30), **"Cancelar"**, **"Descargar Reporte de Errores"**

**Fase 3: Importación (confirmada)**
- Usuario confirma
- Sistema procesa válidos: crea prospecto, asigna estado "Nuevo", asesor (si configurado), fuente, timestamp
- Progreso: "Importando X de Y..."

**Fase 4: Resultados**
- Modal: ✅ "120 leads importados", ⚠️ "30 omitidos", 📊 Estadísticas (Total 150, Exitosos 120 80%, Fallidos 30 20%)
- Botones: "Descargar Reporte Completo", "Ver Leads Importados", "Importar Otro Archivo", "Cerrar"

5. Revisa reporte
6. (Si errores) Descarga reporte, corrige archivo, re-importa filas fallidas
7. "Ver Leads Importados" para verificar

**Post-Importación:** Leads en "Gestión", estado "Nuevo", fecha timestamp importación, origen según archivo o defecto, si asignó asesor aparecen en panel asesor.

#### 5. Manejo de Duplicados

**Detección:** Sistema compara por **email** (único), durante validación identifica coincidencias, marca como duplicado.

**Opciones:**
- **Opción 1:** Omitir (por defecto) - No importa, conserva original, reporta "Omitido - Email duplicado"
- **Opción 2:** Actualizar (si configurado) - Actualiza lead existente, sobrescribe campos, mantiene historial, registra actualización
- **Opción 3:** Crear con Sufijo (si configurado) - Crea nuevo, agrega sufijo `usuario+1@dominio.com`, requiere revisión manual

**En Reporte:** Sección "📋 Duplicados Detectados", lista emails, acción tomada, link a registro existente.

**Mejores Prácticas:** Limpiar archivo antes (eliminar duplicados internos), verificar contra base existente, decidir estrategia antes, revisar duplicados manualmente si pocos.

#### 6. Descargar Plantilla

**Pasos:**
1. Busca link/botón "Descargar Plantilla" (cerca de "Mostrar Estructura" o ayuda)
2. Clic → descarga `plantilla_importacion_leads.xlsx` o `.csv`
3. Abre en Excel/editor CSV
4. Observa: **Fila 1** encabezados (nombres exactos), **Filas 2-5** datos ejemplo, **Columnas resaltadas** campos obligatorios
5. Borra ejemplos
6. Completa con datos reales
7. Guarda, importa

**Ventajas:** Garantiza nombres correctos, incluye formato adecuado, reduce errores, acelera preparación.

### Validaciones y Reglas

**Campos Obligatorios:** Nombre (no vacío, mín 3 caracteres), Email (formato válido, único), Teléfono (mín 8 dígitos, solo números/símbolos).

**Validaciones Formato:** Email (regex estándar), Teléfono (acepta internacionales +502, guiones, espacios), Programas (debe existir en catálogo), Asesor (usuario activo con rol asesor).

**Reglas de Negocio:** Máx 1000 registros por importación, archivos hasta 10 MB, procesamiento en lotes de 50, timeout 5 min máx.

**Manejo de Errores:** Errores no detienen importación completa, registros válidos se procesan, registros con errores se reportan detalladamente, opción exportar solo errores.

### Reporte de Importación (Excel descargable)

**Hoja 1: Resumen** - Total procesados, Exitosos, Fallidos, Duplicados, Tiempo, Usuario, Fecha/hora

**Hoja 2: Leads Importados** - Lista agregados exitosamente: Nombre, Email, Teléfono, Programa, Asesor, ID generado

**Hoja 3: Errores Detectados** - Fila original, Datos de fila, Error específico, Sugerencia corrección (ej: "Fila 15: Email 'usuario@' inválido. Formato correcto: usuario@dominio.com")

**Hoja 4: Duplicados** - Email duplicado, Nombre en archivo vs sistema, ID lead existente, Acción tomada

### Notas Importantes

**Formato CSV:** Codificación UTF-8 (caracteres especiales), Separador coma (,), Delimitador comillas dobles ("), Primera fila encabezados.

**Formato Excel:** Primera hoja (Sheet1), Sin filas vacías entre datos, Sin fórmulas (solo valores), Sin celdas combinadas.

**Gestión Personalizada:** Si campos personalizados, configúralos en "Gestionar Campos DB", mapeo flexible permite importar cualquier columna, campos no mapeados se ignoran.

**Asignación Masiva:** Si archivo no tiene "Asesor", todos se asignan a asesor específico (configuración en "Gestionar Campos DB" o paso previo), útil para distribución posterior.

**Seguridad:** Solo usuarios con permiso "Importar Leads" acceden, importaciones registradas en log auditoría (usuario, fecha/hora, archivo, cantidad).

**Rendimiento:** Importaciones grandes (500+ leads) toman varios minutos, no cerrar ventana durante procesamiento, sistema muestra progreso real-time.

**Mejores Prácticas:**
- **Antes:** Limpia datos (elimina duplicados, corrige formatos), valida emails (herramientas verificación), revisa programas existen, prueba con archivo pequeño primero (10-20 registros)
- **Durante:** No recargar página, no iniciar otra simultánea, esperar confirmación
- **Después:** Revisar reporte errores, verificar leads en Gestión, corregir y re-importar fallidos, asignar asesores si no automático, notificar a equipo ventas

**Solución de Problemas:**

| Error | Causa | Solución |
|-------|-------|----------|
| "Archivo demasiado grande" | Excede 10 MB | Dividir en archivos más pequeños |
| "Formato no soportado" | Extensión incorrecta | Guardar como .csv o .xlsx |
| "Columna 'Email' no encontrada" | Falta encabezado | Agregar fila de encabezados |
| "Muchos emails inválidos" | Formato incorrecto | Validar con herramienta externa |
| "Programa 'MBA' no existe" | Nombre no coincide | Usar nombres exactos del sistema |
| "Timeout en importación" | Archivo muy grande | Reducir cantidad de registros |
