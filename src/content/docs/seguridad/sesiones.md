---
title: Sesiones Activas
description: Módulo dedicado al monitoreo en tiempo real de todas las sesiones activas en el sistema.
---

## Descripción

Módulo dedicado al monitoreo en tiempo real de todas las sesiones activas en el sistema.

### Acceso

**Ruta:** `/seguridad/sesiones`  
**Menú:** Seguridad > Sesiones (si está habilitado)

**Nota:** Este módulo puede no aparecer en tu menú actual dependiendo de los permisos asignados a tu rol.

## Panel de Sesiones

### Vista en Tiempo Real

**Actualización Automática:**
- Los datos se actualizan cada 30 segundos
- Indicador visual de última actualización
- Botón para forzar actualización manual

**Información por Sesión:**
- **Usuario:** Nombre y username
- **Email:** Correo electrónico
- **Rol:** Rol actual del usuario
- **IP Address:** Dirección IP actual
- **Inicio de Sesión:** Fecha y hora de login
- **Duración:** Tiempo transcurrido desde el login
- **Última Actividad:** Último movimiento del usuario
- **Dispositivo:** Tipo de dispositivo con icono
- **Estado:** Activa o Inactiva

## Gestión de Sesiones

### Cerrar Sesión Individual

1. Localizar la sesión en la lista
2. Hacer clic en el botón **"Cerrar Sesión"** (icono LogOut)
3. Confirmar la acción en el diálogo
4. La sesión se cierra inmediatamente

**Efecto:**
- El usuario es desconectado instantáneamente
- Debe iniciar sesión de nuevo para acceder
- Se registra en logs de auditoría

### Cerrar Todas las Sesiones

⚠️ **Acción Crítica:** Cierra todas las sesiones excepto la actual.

**Cuándo Usar:**
- Cambio de contraseña de administrador
- Sospecha de compromiso de seguridad
- Mantenimiento del sistema
- Actualización de permisos masiva

**Procedimiento:**
1. Hacer clic en **"Cerrar Todas las Sesiones"**
2. Leer advertencia cuidadosamente
3. Escribir "CONFIRMAR" en el campo de texto
4. Hacer clic en **"Sí, cerrar todas"**
5. Proceso de cierre se ejecuta
6. Confirmación de sesiones cerradas

**Nota:** Tu sesión actual NO se cerrará.
