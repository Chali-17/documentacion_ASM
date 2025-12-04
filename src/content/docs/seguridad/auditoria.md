---
title: Auditoría del Sistema
description: Sistema completo de auditoría que registra todas las acciones y eventos del sistema para cumplimiento, seguridad y análisis.
---

## Descripción

Sistema completo de auditoría que registra todas las acciones y eventos del sistema para cumplimiento, seguridad y análisis.

### Acceso

**Ruta:** `/seguridad/auditoria`  
**Menú:** Seguridad > Auditoría  
**Icono:** 📋 Auditoría

## Panel de Auditoría

### Estadísticas Generales

**Resumen de Logs:**
- **Total de Eventos:** Contador total de registros
- **Eventos Hoy:** Actividad del día actual
- **Actividades:** Logs de acciones de usuarios
- **Emails:** Registro de correos enviados
- **Cobranza:** Eventos del módulo financiero

## Filtros de Búsqueda

**Búsqueda por Texto:**
- Campo de búsqueda en tiempo real
- Buscar por:
  - Usuario que ejecutó la acción
  - Descripción del evento
  - IP Address
  - Detalles específicos

**Filtro por Tipo:**
Pestañas principales:
- **Todos:** Muestra todos los eventos
- **Activity:** Solo actividades de usuarios
- **Email:** Registro de correos
- **Collection:** Eventos de cobranza

**Filtro por Nivel:**
- **Todos:** Sin filtro de severidad
- **Info:** Eventos informativos (normales)
- **Warning:** Advertencias (requieren atención)
- **Error:** Errores del sistema (críticos)

**Filtro por Fecha:**
- Selector de rango personalizado
- Presets rápidos: Hoy, Ayer, Última semana, Último mes

## Tabla de Logs

**Columnas Mostradas:**
1. **Nivel:** Badge con color según severidad (Info/Warning/Error)
2. **Tipo:** Categoría del evento
3. **Fecha y Hora:** Timestamp exacto
4. **Usuario:** Quién ejecutó la acción
5. **Acción:** Descripción breve
6. **Módulo:** Dónde ocurrió
7. **Detalles:** Información adicional
8. **IP Address:** Dirección IP origen
9. **Acciones:** Ver detalles completos

## Ver Detalles de un Log

1. Hacer clic en el icono **"Ver"** en la fila
2. Se abre modal con información completa:
   - ID del log
   - Fecha y hora exacta
   - Usuario responsable
   - Descripción completa
   - Módulo y ruta afectados
   - Request y Response completos
   - Stack trace (si es error)

## Descargar Reporte de Auditoría

1. Configurar filtros deseados
2. Hacer clic en **"Exportar Logs"**
3. Seleccionar formato: PDF, Excel, CSV, JSON
4. El archivo se descarga automáticamente

**Contenido del Reporte:**
- Resumen ejecutivo con estadísticas
- Lista detallada de eventos
- Gráficos y visualizaciones
- Análisis de seguridad
