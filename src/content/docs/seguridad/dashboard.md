---
title: Dashboard de Seguridad
description: Panel principal del módulo de seguridad con métricas clave, gráficos y sesiones activas.
---

## Descripción

El Dashboard de Seguridad es la página principal del módulo, donde se visualiza un resumen general del estado de seguridad del sistema.

### Acceso

**Ruta:** `/seguridad/dashboard`  
**Menú:** Seguridad > Dashboard de Seguridad  
**Icono:** 📊 Dashboard de Seguridad

## Información Mostrada

### Tarjetas de Resumen

El dashboard muestra las siguientes métricas clave:

- **Total de Usuarios**
  - Muestra el número total de usuarios registrados
  - Indicador de crecimiento respecto al mes anterior
  
- **Usuarios Activos**
  - Cantidad de usuarios con estado activo
  - Porcentaje respecto al total
  
- **Sesiones Activas**
  - Número de sesiones abiertas en tiempo real
  - Lista de sesiones con más actividad

- **Intentos de Acceso Fallidos**
  - Contador de intentos de login fallidos
  - Alertas de posibles ataques de fuerza bruta

- **2FA Habilitado**
  - Porcentaje de usuarios con autenticación de dos factores
  - Progreso hacia el objetivo de seguridad

### Gráficos y Estadísticas

**Actividad de Usuarios**
- Gráfico de líneas mostrando la actividad diaria
- Identificación de patrones de uso
- Detección de picos anormales de actividad

**Distribución por Roles**
- Gráfico circular con la distribución de usuarios por rol
- Porcentajes y cantidades absolutas

**Eventos de Seguridad**
- Timeline de eventos importantes
- Alertas de seguridad recientes
- Acciones críticas realizadas

### Sesiones Activas Recientes

Tabla con las sesiones más recientes que incluye:
- Usuario conectado
- Hora de inicio
- Dirección IP
- Dispositivo utilizado
- Duración de la sesión
- Botón para cerrar sesión

## Acciones Disponibles

### Cerrar Sesión Individual

1. Localizar la sesión en la lista
2. Hacer clic en el botón "Cerrar Sesión" (icono de salida)
3. Confirmar la acción en el diálogo
4. La sesión se cerrará inmediatamente

### Cerrar Todas las Sesiones

1. Hacer clic en el botón "Cerrar Todas las Sesiones" en la parte superior
2. Confirmar la acción crítica
3. Todas las sesiones activas (excepto la actual) serán cerradas
4. Los usuarios deberán iniciar sesión nuevamente

### Actualizar Dashboard

- Clic en el botón "Actualizar" para recargar los datos
- Los datos se actualizan automáticamente cada 30 segundos
