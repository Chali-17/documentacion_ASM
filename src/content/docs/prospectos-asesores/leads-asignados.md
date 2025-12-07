---
title: "Leads Asignados"
description: "Vista personalizada que muestra unicamente los leads asignados al asesor actual con herramientas de busqueda, filtros y seguimiento personal."
---

## Descripcion
Vista personalizada que muestra únicamente los leads/prospectos asignados al asesor que ha iniciado sesión. Permite gestionar la cartera personal de prospectos con herramientas de búsqueda, filtros y seguimiento.

### Acceso
**Ruta:** `/leads-asignados`  
**Menú:** Prospectos y Asesores > Leads Asignados

### Funcionalidad General
- Ver exclusivamente los leads asignados al usuario actual
- Buscar dentro de su cartera de prospectos
- Filtrar leads por estado
- Aplicar filtros avanzados
- Seleccionar múltiples leads
- Ver información completa de contacto
- Consultar estado actual con timestamp de último cambio
- Acceder rápidamente a información de cada lead
- Paginar resultados para mejor navegación

### Controles Superiores

1. **Campo "Buscar prospectos..."**
   - Búsqueda en tiempo real
   - Busca por nombre, email o teléfono
   - Solo dentro de leads asignados al asesor

2. **Dropdown "Todos"** (Filtro de Estado)
   - Todos, Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido

3. **Botón "Filtros"** (ícono embudo)
   - Filtros avanzados: programa de interés, fecha de asignación, última interacción, prioridad, con/sin tareas pendientes, días sin contacto

### Tabla de Leads Asignados

**Columnas:**
1. **Checkbox** - Selección individual (maestro selecciona todos)
2. **Nombre** - Clickeable para ver detalles
3. **Email** - Link clickeable para enviar correo
4. **Teléfono** - Clickeable para iniciar llamada
5. **Departamento** - Ubicación geográfica o empresa
6. **Estado** - Badge con color (Verde "Inscrito", Azul "En seguimiento", etc.)
   - Info adicional: "Último cambio: 2025-11-21T21:21:56.0000Z"

### Paginación

**Controles:**
- Dropdown registros por página: 5, 10, 25, 50, 100
- Botón "Anterior"
- Indicador: "Página 1 de 10"
- Botón "Siguiente"

### Procedimientos

#### 1. Ver Leads Asignados

**Pasos:**
1. Inicia sesión como asesor
2. Navega a: **Prospectos y Asesores > Leads Asignados**
3. Sistema carga automáticamente solo tus leads asignados
4. Ordenados por fecha de asignación (más recientes primero)
5. Revisa columna "Estado" para identificar leads prioritarios
6. Observa "Último cambio" para identificar leads inactivos

#### 2. Buscar un Lead Específico

**Pasos:**
1. Campo **"Buscar prospectos..."**
2. Escribe: nombre ("Javier"), email ("mjpdbs300@gmail.com"), o teléfono ("41457646")
3. Tabla se filtra automáticamente
4. Solo busca dentro de tus leads asignados
5. Para limpiar: borra texto o clic en X

#### 3. Filtrar Leads por Estado

**Pasos:**
1. Haz clic en dropdown **"Todos"**
2. Selecciona estado: Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido
3. Tabla actualiza mostrando solo ese estado
4. Para ver todos: Selecciona "Todos"

**Casos de Uso:**
- Ver "Nuevo" al inicio del día para priorizar contactos
- Filtrar "En seguimiento" para revisar pendientes
- Consultar "Inscrito" para ver conversiones exitosas
- Analizar "Perdido" para identificar patrones

#### 4. Aplicar Filtros Avanzados

**Pasos:**
1. Botón **"Filtros"** (ícono embudo)
2. Panel con:
   - **Programa de Interés:** lista de programas
   - **Fecha de Asignación:** desde/hasta
   - **Última Interacción:** últimas 24h, semana, mes, +30 días
   - **Prioridad:** Alta, Media, Baja
   - **Tareas Pendientes:** con/sin/vencidas
   - **Días sin Contacto:** <7, 7-14, 15-30, >30
3. Selecciona criterios, **"Aplicar Filtros"**
4. Filtros activos como chips/tags
5. Limpiar: **"Limpiar Filtros"** o X en cada chip

**Ejemplo Combinado:** Estado "Calificado" + Última interacción "+30 días" = Leads calificados que necesitan seguimiento urgente

#### 5. Ver Detalles de un Lead Asignado

**Pasos:**
1. Clic en **nombre del prospecto** (link)
2. Vista detallada con pestañas:
   - **Información General:** personal, contacto, laboral, programa, fecha asignación, fuente
   - **Historial de Estados:** timeline cambios, quién/cuándo, notas
   - **Interacciones:** llamadas, correos, reuniones, notas (cronológico)
   - **Tareas:** pendientes y completadas, fecha vencimiento, prioridad
   - **Documentos:** adjuntos (propuesta, documentación, contratos)
3. "Cerrar" o "Volver" para regresar

#### 6. Registrar Interacción Rápida

**Pasos:**
1. Desde tabla, ícono/botón acción rápida (si disponible) o ingresa a detalles
2. **"Registrar Interacción"**
3. Formulario:
   - **Tipo:** Llamada, Email, Reunión, WhatsApp, Otro
   - **Fecha y Hora:** pre-llenado con ahora
   - **Resultado:** Contacto exitoso, No contestó, Dejó mensaje, Programó siguiente, No interesado
   - **Notas:** textarea detalles (obligatorio)
   - **Próxima Acción:** (opcional) fecha/tipo
4. **"Guardar Interacción"**
5. Registra en historial, actualiza timestamp

**Beneficios:** Mantiene historial completo, evita contactos duplicados, facilita seguimiento estructurado, genera reportes de actividad.

#### 7. Cambiar Estado de un Lead

**Pasos:**
1. Clic en **badge de estado** o menú de acciones → **"Cambiar Estado"**
2. Diálogo: estado actual, dropdown estados disponibles, campo notas (obligatorio)
3. Selecciona nuevo estado, escribe nota (ej: "Completó pago de inscripción", "No contestó después de 5 intentos")
4. **"Guardar Estado"**
5. Sistema actualiza badge, timestamp, historial

**Transiciones Típicas:** Nuevo → Contactado → Calificado → Negociación → Inscrito; Cualquier → Perdido/En seguimiento

#### 8. Seleccionar Múltiples Leads (Acciones Masivas)

**Pasos:**
1. Marca checkboxes (individual o maestro)
2. Contador: "5 leads seleccionados"
3. **Acciones:**
   - **Cambiar Estado Masivo:** nuevo estado común + nota general
   - **Enviar Correo Masivo:** redirige a Correos con seleccionados pre-cargados
   - **Crear Tarea Masiva:** misma tarea para todos
   - **Exportar Seleccionados:** descarga Excel/CSV
4. Confirma operación, sistema procesa, resumen de resultados

#### 9. Cambiar Registros por Página

**Pasos:**
1. Dropdown de registros (actual "5")
2. Selecciona: 5, 10, 25, 50, 100
3. Tabla se actualiza, paginación recalcula

**Recomendaciones:** 5-10 (revisión diaria), 25 (búsqueda rápida cartera mediana), 50-100 (exportar/análisis global)

#### 10. Navegar entre Páginas

**Pasos:**
1. Indicador: "Página 1 de 10"
2. **"Siguiente"** o flecha derecha
3. **"Anterior"** o flecha izquierda
4. Tabla carga siguiente/anterior conjunto
5. Para ir a página específica: clic en indicador "Página X de Y" (si clickeable) → ingresa número

**Notas:** "Anterior" deshabilitado en p1, "Siguiente" en última; navegación mantiene filtros activos.

### Diferencias con "Gestión de Prospectos"

| Aspecto | Leads Asignados | Gestión de Prospectos |
|---------|-----------------|----------------------|
| **Alcance** | Solo leads del asesor actual | Todos los prospectos del sistema |
| **Permiso** | Asesores regulares | Coordinadores/Administradores |
| **Acciones** | Gestión personal, seguimiento | Asignación, reasignación, CRUD completo |
| **Filtros** | Enfocados en seguimiento personal | Administrativos (por asesor, masivos) |
| **Objetivo** | Trabajar cartera diaria | Supervisión y distribución |

### Notas Importantes

**Vista Personalizada:** Cada asesor ve **SOLO sus leads asignados**, no puede ver leads de otros, promueve responsabilidad individual.

**Timestamp Detallado:** Formato ISO 8601 con fecha, hora, minutos, segundos, zona horaria UTC (Z), útil para auditoría precisa.

**Estado "Inscrito":** Badge verde, lead completó conversión, aún visible en cartera para referencia, cuenta en métricas personales.

**Paginación Dinámica:** Total cambia según filtros activos (ej: 50 leads, filtrando "Calificado" quedan 10 → 1 página).

**Búsqueda Restringida:** Solo dentro de leads asignados, no permite ver otros asesores, mantiene privacidad.

**Acciones por Lead:** Ver detalles, registrar interacción, cambiar estado, programar tarea, enviar correo individual, ver historial. **NO puede:** Reasignar a otro asesor (requiere permiso coordinador).

**Métricas Personales (si visibles en dashboard):** Total asignados, conversión (inscripciones vs asignados), tasa contacto, promedio días hasta conversión, leads en cada estado.

**Mejores Prácticas:**
- Revisar leads "Nuevo" diariamente
- Actualizar estados después de cada interacción
- Registrar notas detalladas
- Programar tareas de seguimiento proactivamente
- Filtrar por "+7 días sin contacto" semanalmente
- Revisar "En seguimiento" prioritariamente
- Documentar razones cuando cambias a "Perdido"
- Mantener información de contacto actualizada

**Permisos:**
- **Asesores:** Solo sus leads, gestión completa de su cartera
- **Coordinadores:** Ven leads de todos, reasignar si necesario
- **Administradores:** Acceso completo, modificar cualquier aspecto
