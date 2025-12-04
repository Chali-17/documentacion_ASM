---
title: Respaldos del Sistema
description: Sistema de respaldos automáticos y manuales para proteger la información del sistema.
---

## Descripción

Sistema de respaldos automáticos y manuales para proteger la información del sistema.

### Acceso

**Ruta:** `/seguridad/respaldos`  
**Menú:** Seguridad > Respaldos (si está habilitado)

**Nota:** Este módulo puede no aparecer en tu menú actual dependiendo de los permisos asignados a tu rol.

## Pestañas del Módulo

### 1. Historial de Respaldos

**Tabla de Respaldos:**
- **Nombre:** Identificador del respaldo
- **Tipo:** Completo, Incremental, Diferencial
- **Fecha:** Cuándo se realizó
- **Hora:** Hora exacta
- **Tamaño:** Espacio ocupado (GB)
- **Estado:** Completado, En Proceso, Fallido
- **Ubicación:** Servidor Principal, Nube, Externo
- **Acciones:** Descargar, Restaurar, Eliminar

**Tipos de Respaldo:**
1. **Completo:** Copia total de toda la base de datos
2. **Incremental:** Solo cambios desde último respaldo
3. **Diferencial:** Cambios desde último respaldo completo

### Acciones Disponibles

**Descargar Respaldo:**
1. Localizar respaldo en la tabla
2. Hacer clic en **"Descargar"** (icono de descarga)
3. El archivo se descarga localmente
4. Útil para almacenamiento externo

**Restaurar Respaldo:**
⚠️ **Acción Crítica:** Sobrescribe datos actuales

1. Hacer clic en **"Restaurar"**
2. Leer advertencia de pérdida de datos
3. Escribir "RESTAURAR" para confirmar
4. Seleccionar opciones:
   - Restaurar todo
   - Restaurar solo base de datos
   - Restaurar solo archivos
5. Iniciar proceso
6. Sistema se reiniciará automáticamente

**Eliminar Respaldo:**
1. Hacer clic en **"Eliminar"** (icono de basura)
2. Confirmar eliminación
3. El archivo se elimina permanentemente

### 2. Programación de Respaldos

**Vista de Tareas Programadas:**
Tabla con respaldos automatizados:
- **Tipo:** Completo, Incremental
- **Frecuencia:** Diaria, Semanal, Mensual
- **Hora:** Cuándo se ejecuta
- **Día:** (para semanales/mensuales)
- **Retención:** Días que se conservan
- **Estado:** Activo/Inactivo
- **Último Respaldo:** Fecha del último ejecutado

**Crear Nueva Programación:**
1. Botón **"+ Nueva Programación"**
2. Formulario con opciones:
   - **Nombre:** Identificador de la tarea
   - **Tipo de Respaldo:** Completo/Incremental/Diferencial
   - **Frecuencia:** 
     - Diaria (cada X días)
     - Semanal (día específico)
     - Mensual (día del mes)
   - **Hora de Ejecución:** HH:MM formato 24 horas
   - **Ubicación de Destino:** Local, Nube, Ambos
   - **Notificar al Completar:** Email a administradores
   - **Retención:** Días antes de eliminar automáticamente
3. Guardar programación
4. El sistema ejecutará automáticamente según configuración

**Editar Programación:**
1. Hacer clic en **"Editar"** en la tarea
2. Modificar campos necesarios
3. Guardar cambios

**Activar/Desactivar Programación:**
- Switch en la columna "Estado"
- Desactivar temporalmente sin eliminar la configuración

### 3. Crear Respaldo Manual

**Cuándo Usar:**
- Antes de actualizaciones importantes
- Antes de cambios masivos en la base de datos
- Backup adicional por seguridad

**Procedimiento:**
1. Pestaña **"Crear Respaldo Manual"**
2. Seleccionar opciones:
   - **Tipo de Respaldo:** Completo (recomendado para manual)
   - **Incluir:**
     - ☑ Base de datos
     - ☑ Archivos del sistema
     - ☑ Configuraciones
     - ☑ Logs
   - **Ubicación:** Servidor local, Nube, Ambos
   - **Comprimir:** Reducir tamaño del archivo
3. Botón **"Iniciar Respaldo Ahora"**
4. Barra de progreso muestra avance
5. Notificación al completar

**Tiempo Estimado:**
- Depende del tamaño de la base de datos
- Respaldo completo típico: 15-30 minutos
- Incremental: 2-5 minutos

### 4. Configuración de Respaldos

**Configuración General:**
- **Ruta de almacenamiento local:** Directorio en el servidor
- **Espacio mínimo requerido:** GB libres antes de permitir respaldo
- **Compresión automática:** Reducir tamaño
- **Encriptación:** Proteger respaldos con contraseña

**Configuración de Nube:**
- **Proveedor:** AWS S3, Google Cloud, Azure, Dropbox
- **Credenciales de acceso:** API Keys
- **Bucket/Container:** Nombre del contenedor
- **Región:** Ubicación geográfica
- **Prueba de conexión:** Verificar configuración

**Notificaciones:**
- **Email para notificaciones:** Lista de correos
- **Notificar respaldos exitosos:** Sí/No
- **Notificar solo fallos:** Sí/No
- **Incluir detalles técnicos:** Sí/No

**Retención y Limpieza:**
- **Conservar respaldos completos:** Número a mantener
- **Conservar respaldos incrementales:** Días
- **Limpieza automática:** Eliminar respaldos antiguos
- **Advertir antes de eliminar:** Notificación X días antes

## Monitoreo de Respaldos

**Dashboard de Estado:**
- Último respaldo exitoso (fecha y hora)
- Próximo respaldo programado
- Espacio utilizado vs disponible
- Estado de conexión a nube
- Historial de éxito/fallos (gráfico)

**Alertas Automáticas:**
El sistema alerta si:
- Han pasado más de 48 horas sin respaldo exitoso
- El espacio en disco está por debajo del umbral
- Fallan 3 respaldos consecutivos
- Hay problemas de conexión con la nube

## Restauración de Emergencia

**Plan de Recuperación:**
1. Identificar respaldo más reciente válido
2. Notificar a usuarios del sistema (downtime)
3. Ejecutar restauración desde interfaz
4. Verificar integridad de datos restaurados
5. Probar funcionalidades críticas
6. Reanudar operaciones normales

**Documentación Requerida:**
- Mantener log de todos los respaldos
- Documentar procedimiento de restauración
- Lista de contactos de emergencia
- Ubicación de respaldos offline
