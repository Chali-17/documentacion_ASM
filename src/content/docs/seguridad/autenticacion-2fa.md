---
title: Autenticación de Dos Factores (2FA)
description: Sistema de autenticación de dos factores para aumentar la seguridad de las cuentas de usuario.
---

## Descripción

Sistema de autenticación de dos factores para aumentar la seguridad de las cuentas de usuario.

### Acceso

**Ruta:** `/seguridad/2fa`  
**Menú:** Seguridad > Autenticación 2FA  
**Icono:** 🔑 Autenticación 2FA

## Vista Principal

### Estadísticas 2FA

**Resumen General:**
- **Total de Usuarios:** Cantidad total en el sistema
- **Con 2FA Habilitado:** Usuarios que tienen 2FA activo
- **Porcentaje de Adopción:** % de usuarios con 2FA
- **Pendientes de Configurar:** Usuarios sin 2FA

### Tabla de Usuarios

**Información Mostrada:**
- **Nombre:** Nombre completo del usuario
- **Email:** Correo electrónico
- **Rol:** Rol asignado
- **Estado:** Activo/Inactivo
- **Método 2FA:** App Autenticador, SMS, Email, No configurado
- **Estado 2FA:** Habilitado/Deshabilitado con switch
- **Acciones:** Configurar, Desactivar, Resetear

## Métodos de 2FA Disponibles

### 1. App Autenticador (Recomendado)
- Google Authenticator
- Microsoft Authenticator
- Authy
- Genera códigos de 6 dígitos cada 30 segundos

### 2. SMS
- Código enviado por mensaje de texto
- Requiere número de teléfono verificado

### 3. Email
- Código enviado al correo electrónico
- Método de respaldo

## Habilitar 2FA para un Usuario

**Como Administrador:**
1. Localizar usuario en la tabla
2. Hacer clic en **"Configurar 2FA"**
3. Seleccionar método (App, SMS, Email)
4. Sistema genera código QR (para App)
5. Usuario debe escanear y verificar
6. Guardar configuración

**El usuario debe:**
1. Instalar app autenticador en su móvil
2. Escanear código QR mostrado
3. Ingresar código de 6 dígitos para verificar
4. Guardar códigos de respaldo

## Desactivar 2FA

1. Localizar usuario en la tabla
2. Cambiar switch "Estado 2FA" a desactivado
3. Confirmar acción
4. El 2FA se desactiva inmediatamente

## Resetear 2FA

**Cuándo Usar:**
- Usuario perdió acceso a su app autenticador
- Cambió de teléfono
- No puede acceder a su cuenta

**Procedimiento:**
1. Hacer clic en **"Resetear 2FA"**
2. Confirmar identidad del usuario
3. Se elimina configuración actual
4. Usuario debe configurar 2FA nuevamente

## Códigos de Respaldo

Al configurar 2FA, el sistema genera 10 códigos de respaldo:
- Cada código se puede usar una sola vez
- Útiles si pierde acceso al método principal
- Deben guardarse en lugar seguro
- Se pueden regenerar en cualquier momento

## Política de 2FA

**Configuración Global:**
1. Botón **"Políticas de 2FA"**
2. Opciones disponibles:
   - **Requerir 2FA para todos:** Obligatorio para todos los usuarios
   - **Requerir para administradores:** Solo roles administrativos
   - **Opcional:** Usuario decide si activa
   - **Período de gracia:** Días antes de hacer obligatorio
