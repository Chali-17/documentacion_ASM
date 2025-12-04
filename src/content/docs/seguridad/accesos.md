---
title: Control de Accesos
description: Módulo para monitorear y gestionar todos los accesos e intentos de acceso al sistema en tiempo real.
---

## Descripción

Módulo para monitorear y gestionar todos los accesos e intentos de acceso al sistema en tiempo real.

### Acceso

**Ruta:** `/seguridad/accesos`  
**Menú:** Seguridad > Accesos  
**Icono:** 🔐 Accesos

## Vista Principal

### Resumen de Accesos

**Tarjetas de Estadísticas:**

1. **Total de Accesos**
   - Contador total de intentos de acceso
   - Gráfica de tendencia

2. **Accesos Exitosos**
   - Cantidad de logins correctos
   - Porcentaje sobre el total

3. **Accesos Fallidos**
   - Intentos con credenciales incorrectas
   - Alerta si superan un umbral

4. **Accesos Bloqueados**
   - IPs bloqueadas por seguridad
   - Usuarios suspendidos temporalmente

### Tabla de Accesos

**Información Mostrada:**
- **Usuario:** Username o email del intento
- **Estado:** Exitoso, Fallido, Bloqueado
- **Fecha y Hora:** Timestamp exacto del acceso
- **IP Address:** Dirección IP origen
- **Ubicación:** País y ciudad (geolocalización)
- **Dispositivo:** Tipo de dispositivo y navegador
- **Duración:** Tiempo de la sesión (si aplica)
- **Acciones:** Ver detalles, Bloquear IP

### Filtros Disponibles

**Filtro por Estado:**
- Pestañas: Todos, Activos, Cerrados
- Permite enfocarse en sesiones específicas

**Barra de Búsqueda:**
- Buscar por username
- Buscar por email
- Buscar por dirección IP

**Filtro por Fecha:**
- Selector de rango de fechas
- Presets: Hoy, Última semana, Último mes

## Gestión de Sesiones y Bloqueos

### Cerrar Sesión Específica

1. Localizar el acceso activo en la tabla
2. Hacer clic en el botón **"Cerrar Sesión"**
3. Confirmar acción
4. La sesión se termina inmediatamente

### Bloquear Dirección IP

1. Identificar la IP sospechosa
2. Hacer clic en **"Bloquear IP"**
3. Especificar:
   - Duración del bloqueo (temporal o permanente)
   - Razón del bloqueo
4. Confirmar
5. La IP no podrá acceder al sistema

## Descargar Reporte de Accesos

1. Configurar filtros deseados
2. Hacer clic en **"Descargar Reporte"**
3. Seleccionar formato (PDF, Excel, CSV)
4. El archivo se descarga automáticamente
