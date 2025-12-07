---
title: "Panel de Seguimiento"
description: "Panel centralizado para gestionar seguimiento de prospectos asignados: informacion completa, registro de interacciones y agenda de citas."
---

## Descripcion
Panel centralizado para que cada asesor gestione el seguimiento de sus prospectos asignados. Permite consultar información completa, registrar interacciones, agendar citas y mantener historial detallado de actividades con cada prospecto.

### Acceso
**Ruta:** `/seguimiento`  
**Menú:** Prospectos y Asesores > Panel de Seguimiento

### Funcionalidad General
- Ver lista de prospectos asignados al asesor
- Buscar prospectos por nombre, correo o teléfono
- Filtrar prospectos por estado
- Acceder a información detallada de cada prospecto
- Ver notas e historial de actividades
- Registrar nuevas interacciones (llamadas, emails, reuniones, WhatsApp)
- Agendar citas futuras con prospectos
- Consultar información pre-llenada para seguimiento eficiente
- Mantener timeline completo de comunicaciones

### Interfaz Principal - Vista de Lista

**Encabezado:**
- **Título:** "Panel de Seguimiento del Asesor"
- **Subtítulo:** "Gestione el seguimiento de sus prospectos asignados"

**Controles de Búsqueda (3 campos):**
1. **"Buscar por nombre"** - Búsqueda en tiempo real, filtra tabla
2. **"Buscar por correo"** - Búsqueda específica por email
3. **"Buscar por teléfono"** - Búsqueda por número (parcial)
4. **Dropdown "Todos"** (Filtro de Estado) - Todos, Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido

### Tabla "Lista de Prospectos"

**Columnas:**
1. **Nombre** - Nombre completo clickeable
2. **Email** - Correo electrónico
3. **Teléfono** - Número de contacto
4. **Estado** - Estado actual ("Inscrito", otros)
5. **Acción** - Botón **"Ver detalles"** (azul oscuro) - Abre modal

**Paginación:**
- Botón "Anterior"
- Indicador: "Página 1 de 10"
- Botón "Siguiente"

## Modal de Detalles del Prospecto

### Estructura del Modal

**Encabezado:**
- **Título:** "Información del Prospecto"
- **Botón cerrar (X)**

**Dos Pestañas:**
1. **Pestaña "Inscrito"** (o estado actual) - Info completa del prospecto
2. **Pestaña "Agregar Interacción"** - Formulario para registrar actividades

## Pestaña 1: Información del Prospecto

### Sección "Información Personal"

**Datos Visibles:**
1. **Nombre Completo** - Ej: "Javier Velazquez"
2. **Email** - Ej: "mlpdbs300@gmail.com" (link clickeable)
3. **Teléfono** - Ej: "41457646" (clickeable)

### Sección "Notas del Prospecto"

**Estructura:**
- **Título:** "Notas del Prospecto" (con ícono 📝)
- **Subtítulo:** "Observaciones:"
- **Contenido:** Texto libre con observaciones importantes, múltiples notas con timestamps, ordenadas cronológicamente

**Funcionalidad:** Muestra todas las notas registradas, útil para continuidad en seguimiento.

### Sección "Historial de Actividades"

**Estructura:**
- **Título:** "Historial de Actividades"
- **Formato:** Tipo actividad (ej: "Llamada"), Descripción breve (ej: "en la tarde"), Duración (si aplica), Fecha y hora

**Tipos Registrados:** Llamadas, Emails, Reuniones, Mensajes WhatsApp, Cambios de estado, Notas generales, Citas agendadas/completadas

**Presentación:** Timeline vertical, más reciente arriba, iconos diferenciados por tipo.

## Pestaña 2: Agregar Interacción

### Sección 1: "Agregar Interacción" (Formulario)

**Campos:**
1. **Tipo de interacción** (Dropdown - Requerido) - Opciones: Llamada telefónica, Email, Reunión presencial, Reunión virtual, WhatsApp, SMS, Nota general, Otra
2. **Fecha de interacción** (Campo fecha - Requerido) - Calendario, placeholder "Seleccionar fecha", por defecto: hoy, permite pasadas
3. **Duración (minutos)** (Numérico) - Solo para tipos con duración (Llamada, Reunión), ej: 15, 30, 45, 60, opcional para otros
4. **Notas** (Textarea - Requerido) - Descripción detallada: qué se discutió, resultado, próximos pasos, observaciones importantes

**Botón:** **"Agregar Interacción"** (azul oscuro, ancho completo) - Guarda en historial, actualiza timestamp "último contacto", regresa a pestaña información

### Sección 2: "Fecha y Cita" (Agendar Nueva Cita)

**Campos:**
1. **Fecha de la cita** (Campo fecha con calendario - Requerido) - Muestra día semana completo (ej: "sábado, 29 de noviembre de 2025"), solo fechas futuras, hora incluida (si soporta)

2. **Información de la Cita** (Textarea con datos pre-llenados) - **Datos automáticos:**
   - "Nombre completo: [Nombre]"
   - "Teléfono: [Número]"
   - "Programa de interés: [Programa académico]"
   - "Asesor asignado: [Nombre asesor]"
   
   **Ejemplo:**
   ```
   Nombre completo: Javier Velazquez
   Teléfono: 41457646
   Programa de interés: Bachelor of Business Administration
   Asesor asignado: Pablo Admin
   ```
   
   **Información editable, agregar:**
   - Motivo de la cita
   - Ubicación (si presencial) o Link reunión (si virtual)
   - Temas a tratar
   - Documentos a preparar

**Botón:** **"Agendar Nueva Cita"** (azul oscuro, ancho completo) - Guarda en calendario asesor, registra en historial prospecto, puede enviar recordatorio, crea tarea pendiente

### Procedimientos Principales

#### 1. Buscar Prospecto en Panel

**Objetivo:** Localizar prospecto para revisar/actualizar seguimiento.

**Pasos:**
1. Accede a **Panel de Seguimiento**
2. Elige método: **Por Nombre** (escribe "Javier" o "Velazquez"), **Por Correo** (escribe email completo/parcial), **Por Teléfono** (escribe número completo/parcial)
3. Tabla filtra en tiempo real
4. Si múltiples coincidencias, refina
5. Para limpiar: borra texto

**Combinación:** Usa múltiples campos simultáneamente (AND lógico), ej: Nombre "Javier" + Estado "Inscrito".

#### 2. Filtrar Prospectos por Estado

**Pasos:**
1. Dropdown **"Todos"**
2. Selecciona: Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido
3. Tabla actualiza
4. Para ver todos: "Todos"

**Casos Uso:** Inicio día: "Nuevo" para priorizar; Media mañana: "En seguimiento" revisar pendientes; Planificación semanal: "Negociación" estrategia cierre.

#### 3. Ver Detalles Completos

**Pasos:**
1. Localiza prospecto (búsqueda/filtros)
2. **"Ver detalles"** (azul)
3. Modal "Información del Prospecto", pestaña **"Inscrito"** activa
4. Revisa: **Datos Personales** (nombre, email, teléfono clickeables), **Notas** (lee observaciones importantes), **Historial Actividades** (revisa timeline, última actividad, patrones)
5. Si necesitas registrar: pestaña "Agregar Interacción"
6. Cerrar: X o fuera del modal

#### 4. Registrar una Nueva Interacción

**Objetivo:** Documentar comunicación realizada.

**Pasos:**
1. "Ver detalles" → pestaña **"Agregar Interacción"**
2. Completa:
   - **Tipo:** Selecciona (Llamada telefónica si llamaste, Email si enviaste correo, Reunión presencial si en persona, Reunión virtual si Zoom/Teams, WhatsApp, SMS, Nota general, Otra)
   - **Fecha:** Calendario (hoy por defecto, si fue ayer selecciona)
   - **Duración:** Escribe minutos (5, 10, 15, 30, 45, 60) solo para Llamadas/Reuniones, deja vacío si Email/WhatsApp
   - **Notas:** Descripción detallada (qué se discutió, resultado, información obtenida, objeciones, acuerdos, próximos pasos)
   
   Ejemplo nota:
   ```
   Llamada de seguimiento. Prospecto interesado pero solicita más tiempo para decidir. 
   Mencionó presupuesto limitado, ofrecí opciones de pago. 
   Acordamos llamar nuevamente el viernes para definir. 
   Enviaré propuesta formal por correo mañana.
   ```

3. Verifica información
4. **"Agregar Interacción"**
5. Sistema: guarda en historial, actualiza "Último cambio", registra fecha/hora exacta, asocia a tu usuario
6. Modal cierra o regresa a pestaña "Inscrito"
7. Confirmación: "Interacción registrada correctamente"
8. Nueva interacción aparece en "Historial"

**Mejores Prácticas:** Registrar inmediatamente después del contacto, ser específico y detallado en notas, incluir próximos pasos acordados, mencionar objeciones/preocupaciones, documentar compromisos (tuyo y del prospecto).

#### 5. Agendar una Cita con Prospecto

**Objetivo:** Programar reunión/llamada futura.

**Pasos:**
1. "Ver detalles" → pestaña **"Agregar Interacción"**
2. Sección **"Fecha y Cita"**
3. Completa:
   - **Fecha cita:** Calendario (selecciona futura), observa formato "sábado, 29 de noviembre de 2025", si selector hora indica horario
   
   - **Información cita:** Sistema pre-llena:
     ```
     Nombre completo: [Nombre]
     Teléfono: [Número]
     Programa de interés: [Programa]
     Asesor asignado: [Tu nombre]
     ```
   
   **Información pre-llenada es editable**, agrega:
   
   **Para Reunión Presencial:**
   ```
   Motivo: Presentación de propuesta personalizada
   Ubicación: Oficinas ASM, Sala de Juntas 2
   Materiales a llevar: Brochure, propuesta impresa, plan de estudios
   ```
   
   **Para Reunión Virtual:**
   ```
   Motivo: Sesión informativa sobre programa MBA
   Plataforma: Zoom
   Link: https://zoom.us/j/123456789
   ID: 123 456 789
   Contraseña: abc123
   ```
   
   **Para Llamada:**
   ```
   Motivo: Seguimiento post-envío de propuesta
   Temas: Dudas sobre plan de pago, fechas de inicio
   Documentos listos: Cronograma, costos detallados
   ```

4. Revisa
5. **"Agendar Nueva Cita"**
6. Sistema: guarda en calendario asesor (tú), registra en historial prospecto, crea tarea/recordatorio, (opcional) envía recordatorio prospecto email/WhatsApp, marca prospecto "cita pendiente"
7. Confirmación: "Cita agendada correctamente"
8. Cita aparece en: Tu calendario (módulo Calendario), Historial prospecto, Panel tareas pendientes

**Recordatorios:** Sistema puede enviar recordatorio prospecto (24h antes si configurado), tú recibes recordatorio en Tareas del Asesor, notificación día de cita.

#### 6. Actualizar Notas

**Objetivo:** Agregar observaciones importantes.

**Pasos:**
1. "Ver detalles" → pestaña info, revisa "Notas del Prospecto"
2. Si agregar nueva: **Opción A:** Usa "Agregar Interacción" tipo "Nota general", **Opción B:** Si hay botón "Editar Notas" úsalo
3. Escribe observación (ej: "Requiere becas, situación económica limitada", "Referido por estudiante María López", "Decisión en manos esposo/a", "No aprobada papelería - falta documentación")
4. Guarda
5. Aparece en "Notas del Prospecto"
6. Visible para todos que accedan

**Tipos Notas Importantes:** Alertas/restricciones, contexto familiar/laboral, preferencias (horarios, modalidades), objeciones recurrentes, fuente referido, situación financiera, documentación pendiente.

#### 7. Revisar Historial Completo

**Objetivo:** Consultar interacciones previas.

**Pasos:**
1. "Ver detalles" → pestaña info, **"Historial de Actividades"**
2. Revisa lista: Tipo (Llamada, Email, Reunión...), Descripción breve, Duración (si aplica), Fecha y hora
3. Timeline cronológico (más reciente arriba)
4. Identifica patrones: frecuencia contacto, última interacción, días transcurridos, progresión en proceso
5. Usa para: preparar próxima comunicación, evitar repetir temas, dar seguimiento compromisos, contextualizar conversación

**Ejemplo Timeline:**
```
[Hoy, 10:30 AM] Llamada - Seguimiento post-propuesta - 15 min
[Ayer, 3:00 PM] Email - Envío de propuesta personalizada
[Hace 3 días] Reunión Virtual - Presentación programa - 45 min
[Hace 5 días] Llamada - Primer contacto - 10 min
[Hace 7 días] WhatsApp - Mensaje inicial presentación
[Hace 8 días] Creado - Prospecto ingresado al sistema
```

### Notas Importantes

**Información Pre-llenada en Citas:** Sistema llena automáticamente datos básicos (Nombre, teléfono, programa, asesor), ahorra tiempo, asegura info correcta, datos editables si necesitas corregir/agregar.

**Búsquedas Múltiples:** Tres campos independientes pero combinables, útil cuando recuerdas diferentes datos, facilita localización en carteras grandes.

**Formato Fecha Citas:** Muestra día semana completo (ej: "sábado, 29 de noviembre de 2025"), ayuda a planificar mejor (evitar fines de semana si laboral), formato largo previene confusiones.

**Historial Actividades:** Cada interacción queda registrada permanentemente, útil para auditoría/seguimiento, permite continuidad si prospecto cambia asesor, base para reportes actividad.

**Tipos Interacción:** Amplia variedad cubre todos canales, selecciona correcto para métricas precisas, duración solo requerida para Llamadas/Reuniones.

**Notas Detalladas:** Cuanto más detallado mejor seguimiento futuro, incluir siempre: Resultado, objeciones, próximos pasos, útil revisar antes próximo contacto.

**Integración Calendario:** Citas agendadas aparecen en módulo Calendario, sincronización automática, recordatorios en Tareas del Asesor.

**Modal Emergente:** Diseño no intrusivo, permite consulta rápida sin salir vista principal, cerrar con X o click fuera regresa a lista.

**Permisos:** Asesores ven solo sus prospectos asignados, coordinadores ven todos, solo quien registró puede editar/eliminar interacciones propias.

**Mejores Prácticas:**
1. **Registro Inmediato:** Documentar inmediatamente después de ocurrir, detalles frescos en memoria, mayor precisión
2. **Notas Completas:** Incluir contexto, resultado, próximos pasos, mencionar objeciones y cómo se abordaron, documentar compromisos ambas partes
3. **Agendar Proactivamente:** Siempre salir de interacción con siguiente paso agendado, usar calendario para no olvidar seguimientos
4. **Revisión Pre-Contacto:** Antes llamar/reunirse revisar historial completo, preparar talking points basados en interacciones previas, no repetir info ya proporcionada
5. **Búsqueda Eficiente:** Usar campo búsqueda más conveniente según contexto, combinar con filtros estado para segmentar
6. **Seguimiento Estructurado:** Revisar diariamente prospectos con citas del día, filtrar semanalmente prospectos sin contacto reciente, actualizar estados según progreso real
