---
title: "Gestion de Prospectos"
description: "Modulo central para administrar todos los prospectos: busqueda avanzada, filtros multiples, acciones masivas y gestion individual detallada."
---

## Descripcion
Módulo central para administrar todos los prospectos del sistema. Vista completa con búsqueda avanzada, múltiples filtros, acciones masivas y gestión individual detallada.

### Acceso
**Ruta:** `/gestion`  
**Menú:** Prospectos y Asesores > Gestión de Prospectos

### Funcionalidad General
Este módulo permite:
- Ver lista completa de todos los prospectos
- Buscar prospectos por nombre, email o teléfono
- Filtrar por múltiples criterios (estado, asesor, programa, origen)
- Ver detalles completos de cada prospecto
- Editar información de prospectos
- Asignar/reasignar asesor responsable
- Cambiar estado del prospecto
- Inscribir prospectos seleccionados (acción masiva)
- Ver historial de cambios
- Acceder a acciones rápidas por prospecto

### Controles Superiores

1. **Campo "Buscar prospectos..."**
   - Búsqueda en tiempo real
   - Busca por nombre, email o teléfono

2. **Cinco Dropdowns de Filtros:**
   - **Dropdown 1:** Estado del prospecto (Todos, Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido)
   - **Dropdown 2:** Asesor asignado (Todos / lista de asesores)
   - **Dropdown 3:** Programa de interés (Todos los programas)
   - **Dropdown 4:** Origen/Fuente de captación (Todos, Empresa, Amigo, Instagram, Facebook, Web, Referido, Evento)

3. **Botón "Filtros"** (ícono de embudo)
   - Abre panel de filtros avanzados: rango de fechas, empresa, departamento/ciudad, con/sin notas, última interacción

4. **Botón "Inscribir seleccionados (X)"**
   - Color gris cuando no hay selección (0)
   - Se activa cuando hay prospectos seleccionados
   - Muestra cantidad entre paréntesis

### Tabla de Prospectos

**Columnas Completas:**

1. **Checkbox** - Selección individual (checkbox maestro en encabezado selecciona todos)
2. **Nombre** - Nombre completo, clickeable
3. **Email** - Correo electrónico, link clickeable
4. **Teléfono** - Número de contacto
5. **Empresa** - Empresa donde labora
6. **Puesto** - Cargo o posición laboral
7. **Origen** - Fuente de captación (empresa, amigo, instagram, facebook, etc.)
8. **Notas** - Información adicional (texto truncado con "...")
9. **Estado** - Badge con color según estado (Verde "Inscrito", Azul "En seguimiento", etc.)
   - Información adicional: "Último cambio: 2025-11-[fecha]" con timestamp completo
10. **Acciones** - 5 iconos:
    - **Ojo:** Ver detalles
    - **Lápiz:** Editar
    - **Usuario+:** Asignar/Reasignar
    - **Círculo/Reloj:** Estado o Historial
    - **Tres puntos:** Menú adicional

### Información Detallada por Prospecto

**Datos Visibles en Tabla:**
- Información personal básica (nombre, email, teléfono)
- Información laboral (empresa, puesto)
- Origen de captación
- Notas/observaciones
- Estado actual con última actualización
- Timestamp de último cambio

**Datos Adicionales (en vista detallada):**
- Programa de interés, duración del programa
- Asesor asignado
- Fecha de primer contacto, última interacción
- Historial completo de cambios
- Timeline de interacciones (llamadas, emails, reuniones)
- Documentos asociados, tareas programadas
- Probabilidad de conversión
- Información geográfica (país, departamento, municipio)
- Género, fecha de nacimiento

### Procedimientos Principales

#### 1. Buscar Prospectos

**Pasos:**
1. Ubica el campo **"Buscar prospectos..."** en la parte superior
2. Escribe el término: nombre, email completo/parcial, o número de teléfono
3. La tabla se filtra automáticamente mientras escribes
4. Para limpiar: borra el texto o haz clic en X

**Notas:** Búsqueda no distingue mayúsculas/minúsculas, busca coincidencias parciales.

#### 2. Filtrar Prospectos por Criterios

**Filtro por Estado:**
1. Haz clic en primer dropdown "Todos" (Estado)
2. Selecciona estado: Nuevo, Contactado, Calificado, Negociación, Inscrito, En seguimiento, Perdido

**Filtro por Asesor:**
1. Haz clic en segundo dropdown "Todos" (Asesor)
2. Selecciona asesor específico

**Filtro por Programa:**
1. Haz clic en tercer dropdown "Todos" (Programa)
2. Selecciona programa académico

**Filtro por Origen:**
1. Haz clic en cuarto dropdown "Todos" (Origen)
2. Selecciona fuente: Empresa, Amigo/Referido, Instagram, Facebook, Web, Evento

**Filtros Avanzados:**
1. Haz clic en botón **"Filtros"** (ícono embudo)
2. Configura: rango de fechas, empresa específica, ubicación, con/sin notas, última interacción antes/después
3. Haz clic en "Aplicar"

**Combinar Filtros:** Usa múltiples dropdowns simultáneamente (lógica AND)

#### 3. Ver Detalles de un Prospecto

**Pasos:**
1. Localiza el prospecto en la tabla
2. Haz clic en ícono **Ojo** (ver detalles) en columna Acciones
3. Vista detallada con pestañas:
   - **Información General:** datos personales, contacto, laborales, programa, asesor
   - **Historial:** timeline de cambios de estado
   - **Interacciones:** llamadas, correos, reuniones, notas
   - **Documentos:** archivos adjuntos
   - **Tareas:** programadas y completadas
4. Haz clic en "Cerrar" o X para regresar

#### 4. Editar Información de un Prospecto

**Pasos:**
1. Haz clic en ícono **Lápiz** (editar) en columna Acciones
2. Formulario con campos pre-llenados: nombre, email, teléfono, género, fecha nacimiento, país, departamento, municipio, empresa, puesto, programa, asesor, origen, notas
3. Modifica campos necesarios (* son obligatorios)
4. **"Guardar Cambios"**
5. Confirmación: "Prospecto actualizado correctamente"

**Validaciones:** Email válido, teléfono formato correcto, nombre no vacío, prevención duplicados.

#### 5. Asignar o Reasignar Asesor

**Pasos:**
1. Haz clic en ícono **Usuario+** (asignar) en columna Acciones
2. Diálogo "Asignar Asesor" muestra asesor actual y dropdown de asesores disponibles
3. Selecciona nuevo asesor
4. (Opcional) Agrega nota explicando el cambio
5. **"Confirmar Asignación"**
6. Sistema registra cambio en historial, nuevo asesor recibe notificación

#### 6. Cambiar Estado de Prospecto

**Pasos:**
1. Haz clic en ícono **Círculo/Reloj** (estado) en columna Acciones
2. Diálogo "Cambiar Estado" muestra estado actual y dropdown con opciones
3. Selecciona nuevo estado
4. (Obligatorio) Agrega nota explicando el cambio
5. **"Guardar Estado"**
6. Sistema actualiza badge, timestamp, historial

**Flujo Típico:** Nuevo → Contactado → Calificado → Negociación → Inscrito  
**Desviaciones:** Cualquier estado → Perdido (especificar razón) o → En seguimiento

#### 7. Inscribir Prospectos (Individual)

**Pasos:**
1. Haz clic en ícono **Tres puntos** (menú) → **"Inscribir Prospecto"**
2. Sistema valida requisitos: estado "Calificado" o "Negociación", programa seleccionado, información completa
3. Formulario de inscripción: datos, programa, información de pago, documentos requeridos, fecha de inicio/grupo
4. **"Confirmar Inscripción"**
5. Sistema cambia estado a "Inscrito", crea registro en Estudiantes, genera matrícula, envía correo de bienvenida

#### 8. Inscribir Múltiples Prospectos (Masiva)

**Pasos:**
1. Filtra prospectos candidatos: Estado "Calificado" o "Negociación"
2. Marca checkboxes (individual o maestro)
3. **"Inscribir seleccionados (X)"**
4. Revisa lista en diálogo, configuración global (fecha inicio, pago, notas)
5. **"Confirmar Inscripción Masiva"**
6. Progreso: "Procesando 1 de 5...", barra visual
7. Resumen: ✅ exitosos, ⚠️ con errores

#### 9. Ver Historial de Cambios

**Pasos:**
1. Ícono **Ojo** → pestaña **"Historial"**
2. Timeline: fecha/hora, usuario, tipo de cambio (estado, asesor, edición, interacción, inscripción), detalles (anterior → nuevo), notas asociadas
3. Ordenado cronológicamente (más reciente arriba)

#### 10. Eliminar Prospecto

**⚠️ PRECAUCIÓN: Irreversible**

**Pasos:**
1. Ícono **Tres puntos** → **"Eliminar Prospecto"**
2. Advertencia: "Esta acción no se puede deshacer", consecuencias listadas
3. Campo: "Escribe ELIMINAR para confirmar"
4. **"Confirmar Eliminación"** (rojo)
5. Prospecto desaparece de la tabla

**Recomendaciones:** NO eliminar inscritos, considerar cambiar a "Perdido" (conserva historial), solo eliminar duplicados/datos de prueba/erróneos.

### Notas Importantes

**Estado "Inscrito":** Badge verde, prospecto ya estudiante activo, aparece en ambos módulos (Prospectos y Estudiantes), info sincronizada.

**Timestamp "Último cambio":** Formato ISO 8601, muestra fecha/hora exacta, útil para identificar inactivos y priorizar seguimiento.

**Columna "Notas":** Texto truncado "..." (clic para ver completo), actualizar regularmente con info clave.

**Acción Masiva:** Botón gris (0), se ilumina con selección, procesa inscripción eficiente, útil para nuevos grupos/cohortes.

**Filtros Combinados:** Múltiples filtros AND lógico, ejemplo: Asesor "Ana" + Estado "Calificado" + Programa "Diplomado" = Candidatos prioritarios de Ana.

**Permisos:**
- Asesores regulares: Ven solo sus prospectos asignados
- Coordinadores: Ven todos, pueden reasignar
- Administradores: Acceso completo, incluyendo eliminación

**Mejores Prácticas:**
- Actualizar notas después de cada interacción
- Cambiar estado según avanza el proceso
- Usar filtros para priorizar seguimiento
- Revisar "En seguimiento" diariamente
- Inscribir prospectos prontamente cuando listos
- Mantener contacto actualizado
- Documentar razones al cambiar a "Perdido"
