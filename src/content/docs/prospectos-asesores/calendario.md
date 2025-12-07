---
title: "Calendario"
description: "Calendario visual para gestionar tareas y citas con prospectos. Programa seguimientos, reuniones y llamadas en vista mensual integrada."
---

## Descripcion
Calendario visual para gestionar tareas y citas con prospectos. Permite programar seguimientos, reuniones, llamadas y otras actividades comerciales en una vista mensual integrada.

### Acceso
**Ruta:** `/calendario`  
**Menú:** Prospectos y Asesores > Calendario

### Interfaz Principal

**Encabezado (Barra Azul Oscura):**
- **Título:** "Calendario de Tareas y Citas"
- **Subtítulo:** "Gestiona tus tareas y citas en un solo calendario"
- **Mes y Año:** "diciembre 2025" (se actualiza según navegación)

**Controles de Navegación:**
- **Botón "Hoy"** - Regresa a la vista del día actual
- **Flecha "◀"** (izquierda) - Va al mes anterior
- **Flecha "▶"** (derecha) - Va al mes siguiente

### Vista de Calendario Mensual

**Estructura:**
- Grid de 7 columnas (días de la semana): Dom, Lun, Mar, Mié, Jue, Vie, Sáb
- Filas para cada semana del mes (5-6 filas según el mes)

**Elementos de Cada Celda de Día:**
- **Número del día** (esquina superior izquierda)
- **Botón "+"** (esquina superior derecha) - Agregar tarea/cita rápida
- **Espacio central** - Muestra eventos/tareas programadas ese día
- **Borde beige/dorado** - Delimita cada celda
- **Día actual resaltado** - Círculo azul alrededor del número

**Información Mostrada por Día:**
- Tareas programadas (con ícono)
- Citas programadas (con ícono calendario/reloj)
- Llamadas agendadas (con ícono teléfono)
- Reuniones (con ícono personas)
- Color o badge según tipo de actividad
- Hora de la actividad
- Nombre del prospecto asociado (si aplica)

### Tipos de Actividades

**Tareas:**
- Seguimientos pendientes
- Envíos de información
- Llamadas de seguimiento
- Revisión de documentos
- Otros recordatorios

**Citas:**
- Reuniones presenciales
- Llamadas programadas con hora específica
- Videollamadas
- Presentaciones de programas
- Visitas a campus

**Eventos:**
- Ferias educativas
- Open house
- Sesiones informativas
- Webinars
- Eventos de networking

### Procedimientos

**Navegar por Meses:**
1. Flecha **"◀"** para mes anterior
2. Flecha **"▶"** para mes siguiente
3. **"Hoy"** para regresar al mes actual

**Agregar Tarea/Cita Rápida:**
1. Localiza el día deseado
2. Botón **"+"** de ese día
3. Formulario: Tipo, Título/Descripción, Hora, Prospecto asociado, Duración, Recordatorio
4. **Guardar**

**Ver Detalle de Actividad:**
1. Clic en actividad dentro de día
2. Modal con: Info completa, Prospecto asociado, Notas adicionales, Opciones (Editar, Completar, Eliminar)

**Completar Tarea:**
1. Clic en la tarea
2. Marca como completada
3. Cambia apariencia (tachada o removida)
4. Se registra en historial del prospecto

**Editar Actividad:**
1. Clic en actividad → **"Editar"**
2. Modifica: Fecha/Hora, Descripción, Prospecto, Tipo
3. **Guardar cambios**

**Eliminar Actividad:**
1. Clic en actividad → **"Eliminar"**
2. Confirma eliminación

**Reprogramar (Arrastrar y Soltar):**
1. Clic y mantén sobre actividad
2. Arrastra a otro día
3. Suelta en día deseado
4. Confirma o cancela el cambio

### Vista de Día

Cuando haces clic en un número de día:
- Vista detallada de ese día específico
- Todas las actividades programadas
- Timeline con horas del día
- Opción de agregar más actividades
- Botón para volver a vista mensual

### Filtros y Configuración

**Filtros Disponibles:**
- Por tipo (Todas, Tareas, Citas, Llamadas)
- Por asesor (si eres administrador)
- Por prospecto específico
- Por estado (Pendientes, Completadas, Vencidas)

**Configuración de Vista:**
- Cambiar a vista semanal
- Cambiar a vista de lista
- Mostrar/ocultar completadas
- Configurar recordatorios
- Sincronizar con calendario externo (Google, Outlook)

### Recordatorios y Notificaciones

**Sistema de Recordatorios:**
- Notificación 15 minutos antes
- Notificación 1 hora antes
- Notificación 1 día antes
- Email de recordatorio
- Notificación push (si configurada)

**Indicadores Visuales:**
- **Día actual:** Círculo azul alrededor del número
- **Días con actividades:** Badge con cantidad
- **Actividades vencidas:** Color rojo
- **Actividades completadas:** Tachadas o color verde
- **Actividades próximas:** Color naranja/amarillo

### Integración con Prospectos

**Vinculación Automática:**
- Cada actividad se vincula a prospecto específico
- Se registra en timeline del prospecto
- Afecta estado del prospecto
- Contribuye a métricas de seguimiento

**Desde Perfil de Prospecto:**
- Puedes programar actividad directamente
- Automáticamente aparece en calendario
- Se asigna al asesor responsable

### Notas Importantes

📅 **Navegación:** Calendario inicia en mes actual, puedes navegar hacia atrás/adelante sin límite, "Hoy" regresa rápidamente.

⏰ **Recordatorios:** Configura para no perder seguimientos, aparecen como notificaciones, personaliza tiempo de anticipación.

✅ **Completar Actividades:** Marcar como completadas actualiza métricas, pueden ocultarse o mostrarse tachadas, contribuye a estadísticas desempeño.

🔄 **Sincronización:** Si habilitado, sincroniza con calendarios externos, evita duplicar reuniones, mantiene todo centralizado.

📱 **Vista Responsive:** Se adapta a pantalla, en móvil puede mostrar vista lista, mantiene funcionalidad completa.

🎯 **Mejores Prácticas:**
- Programa seguimientos inmediatamente después de cada contacto
- Usa colores/tipos para diferenciar actividades
- Revisa calendario al inicio de cada día
- Bloquea tiempo para tareas administrativas
- Respeta horarios programados
