---
title: Programas Academicos
description: Administracion de programas, planes de pago, requisitos, estado y datos financieros.
---

## Descripcion
Modulo para administrar programas academicos con configuracion de planes de pago, duracion, requisitos, especialidades y estado operativo.

### Acceso
**Ruta:** `/academico/programas`  
**Menu:** Academico > Programas Academicos

### Funcionalidad general
- Ver lista completa de programas
- Crear/editar programas
- Configurar planes de pago (inscripcion, mensualidad)
- Definir duracion y requisitos de admision
- Administrar especialidades/concentraciones
- Filtrar y buscar programas; ver estadisticas basicas
- Cambiar estado (activo, inactivo, archivado, etc.)

### Pantalla principal
- Breadcrumb: Academico > Programas
- Icono mortarboard/graduacion
- Titulo "Gestion de Programas Academicos" y subtitulo
- Controles: busqueda, boton Filtros, boton "+ Nuevo Programa"
- Indicador: "Mostrando X de Y programas"

### Controles principales
- **Busqueda:** "Buscar por nombre o abreviatura..." (tiempo real)
- **Filtros (panel):** Estado, Tipo (Licenciatura, Maestria, Diplomado), Duracion (meses), Rango de precio (inscripcion/mensualidad), otros.
- **+ Nuevo Programa:** crea registro nuevo.

### Vista de programas (tarjetas)
- Grid de tarjetas con: Nombre del programa, Codigo/Abreviatura, Estado (badge), Duracion (meses), Inscripcion, Mensualidad.
- Ejemplos: BBA CM, MHTM, MKD, etc.

### Procedimientos
- **Crear programa:** "+ Nuevo Programa" → llenar Nombre, Codigo/Abreviatura, Tipo/Nivel, Duracion (meses), Inscripcion, Mensualidad, Requisitos, descripcion/objetivos → Guardar (estado inicial).
- **Editar programa:** clic en tarjeta o icono editar → ajustar nombre, codigo, duracion, montos, requisitos, estado → Guardar.
- **Buscar:** campo "Buscar por nombre o abreviatura..." → filtra en vivo.
- **Aplicar filtros:** boton Filtros → elegir Estado/Tipo/Duracion/Precio → Aplicar para reducir listado.

### Informacion gestionada por programa
- Basico: Nombre, Codigo/Abreviatura, Descripcion, Tipo, Nivel, Estado.
- Duracion/Estructura: Meses totales, semestres, creditos, plan/malla.
- Financiero: Inscripcion, Mensualidad, cantidad de pagos, descuentos/promos, politicas de pago.
- Requisitos: Documentos, puntajes minimos, experiencia, restricciones.
- Academico: Competencias, concentraciones, cursos obligatorios/electivos, prerrequisitos.
- Operacional: Modalidad, horarios, cupos, fecha de inicio.

### Tarjeta de ejemplo
- Nombre: "Bachelor of Business Administration in Commercial Management"
- Codigo: BBA CM
- Estado: Activo (badge verde)
- Duracion: 32 meses
- Inscripcion: Q1000.00
- Mensualidad: Q1170.00
- Inversion aproximada: (32 x Q1170.00) + Q1000.00

### Notas importantes
- Codigo debe ser unico; preferir inactivar en vez de eliminar.
- Cambios no suelen afectar alumnos ya inscritos; se generan logs.
- Plan de pago: monto total ≈ (Duracion meses x Mensualidad) + Inscripcion.
- Programas pueden tener multiples concentraciones y vinculan cursos (ver Programacion de Cursos).
- Estados habituales: Activo, Inactivo, En Desarrollo, Archivado, Cancelado.
