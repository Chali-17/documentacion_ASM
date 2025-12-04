---
title: Políticas de Seguridad
description: Configuración centralizada de políticas y reglas de seguridad del sistema.
---

## Descripción

Configuración centralizada de políticas y reglas de seguridad del sistema.

### Acceso

**Ruta:** `/seguridad/politicas`  
**Menú:** Seguridad > Políticas  
**Icono:** 📄 Políticas

## Pestañas de Configuración

### 1. Políticas de Contraseñas

**Requisitos de Contraseña:**
- **Longitud mínima:** Número de caracteres (default: 8)
- **Requiere mayúsculas:** Al menos una letra mayúscula
- **Requiere números:** Al menos un número
- **Requiere caracteres especiales:** Símbolos como !@#$%
- **No permitir contraseñas comunes:** Bloquear "123456", "password", etc.

**Caducidad y Renovación:**
- **Días hasta caducidad:** Tiempo antes de requerir cambio (ej: 90 días)
- **Recordatorio previo:** Notificar X días antes de caducidad
- **Historial de contraseñas:** No permitir últimas X contraseñas
- **Cambio obligatorio en primer login:** Forzar cambio al crear cuenta

**Configurar:**
1. Ajustar valores según necesidad organizacional
2. Activar/desactivar switches
3. Hacer clic en **"Guardar Cambios"**
4. Los cambios aplican inmediatamente para nuevas contraseñas

### 2. Políticas de Sesiones

**Duración de Sesión:**
- **Timeout de inactividad:** Minutos sin actividad antes de logout automático (default: 30)
- **Duración máxima:** Tiempo máximo de sesión aunque haya actividad
- **Recordar sesión:** Permitir "Mantener sesión iniciada"

**Control de Sesiones:**
- **Sesiones simultáneas máximas:** Límite por usuario (ej: 3)
- **Cerrar sesiones al cambiar contraseña:** Automático
- **Requiere reautenticación para acciones críticas:** Confirmar contraseña

**Configurar:**
1. Establecer tiempos en minutos
2. Definir límites de sesiones
3. Activar controles deseados
4. Guardar configuración

### 3. Políticas de Autenticación

**Intentos de Login:**
- **Máximo de intentos fallidos:** Antes de bloquear cuenta (default: 5)
- **Tiempo de bloqueo:** Minutos que permanece bloqueada (ej: 15)
- **Bloqueo de IP:** Bloquear IP después de X intentos

**Autenticación de Dos Factores:**
- **Requerido para roles:** Seleccionar roles que DEBEN tener 2FA
- **Período de gracia:** Días para configurar 2FA antes de bloquear acceso
- **Métodos permitidos:** App, SMS, Email

**Recuperación de Cuenta:**
- **Permitir recuperación por email:** Sí/No
- **Validez del token de recuperación:** Horas (default: 24)
- **Preguntas de seguridad:** Requerir/Opcional

### 4. Control de Acceso

**Restricciones de IP:**
- **Permitir solo IPs específicas:** Lista blanca de IPs
- **Bloquear IPs específicas:** Lista negra
- **Restricción por país:** Bloquear/permitir países específicos

**Horarios de Acceso:**
- **Horario permitido:** Rango de horas (ej: 6:00 AM - 10:00 PM)
- **Días permitidos:** Lunes a Domingo
- **Excepciones por rol:** Administradores sin restricción

**Dispositivos:**
- **Requerir dispositivos conocidos:** Primera vez debe aprobar administrador
- **Notificar accesos desde nuevos dispositivos:** Email automático
- **Bloqueo automático de dispositivos sospechosos:** Sí/No

## Guardar Políticas

1. Configurar todas las opciones deseadas en cada pestaña
2. Botón **"Guardar Cambios"** en la parte superior
3. Confirmar cambios en diálogo
4. Sistema aplica políticas inmediatamente
5. Notificación de guardado exitoso

## Restaurar Valores Predeterminados

1. Botón **"Restaurar Defaults"**
2. Confirmar acción (irreversible)
3. Todas las políticas vuelven a valores de fábrica
4. Revisar y ajustar según necesidad
