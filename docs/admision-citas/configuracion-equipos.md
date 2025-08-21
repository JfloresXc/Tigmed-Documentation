---
sidebar_position: 2
---

# Configuración de Equipos

## 1. Descripción general

El submódulo Configuración de Equipos tiene como propósito automatizar la asignación de médicos y empresas a tarifas específicas, evitando la selección manual repetitiva. Esto permite que, al agregar una tarifa en las vistas Procedimientos Varios, Procedimientos Programados o Agregar Orden, el sistema realice automáticamente la asignación del médico o empresa correspondiente según la configuración definida.

## 2. Alcance y objetivos

Este submódulo cubre la gestión y mantenimiento de las configuraciones que vinculan médicos y empresas con tarifas específicas. Su objetivo principal es optimizar los procesos operativos relacionados con la asignación de personal y entidades asociadas a tarifas, asegurando eficiencia y reducción de errores en la selección manual durante la carga de procedimientos u órdenes.

## 3. Funcionalidades principales

- Creación, edición y eliminación (CRUD) de configuraciones de asignación médico/empresa a tarifa.
- Modal para la gestión de agregados y ediciones, con campos obligatorios.
- Validaciones en los campos del modal para garantizar la integridad y consistencia de los datos ingresados.
- Consulta en tiempo real de las configuraciones para aplicar asignaciones automáticas al agregar tarifas en las vistas Procedimientos Varios, Procedimientos Programados y Agregar Orden.
- Sincronización con la base de datos para mantener actualizadas las configuraciones y asegurar la consistencia en todas las vistas asociadas.

## 4. Historias de Usuario

### HU-001: Creación de Configuración de Asignación
- **Descripción:** Como usuario administrador, quiero crear una configuración que asigne automáticamente un médico o empresa a una tarifa específica para optimizar la carga de procedimientos.
- **Criterios de Aceptación:** 
  - Modal con campos obligatorios completos.
  - Validación de formato en todos los campos.
  - Almacenamiento correcto en base de datos.
  - Cierre automático del modal tras guardar.
- **Restricciones y validaciones:** 
  - Todos los campos son obligatorios.
  - Validar existencia de tarifa, médico y empresa.
  - Prevenir duplicados para la misma tarifa.
- **Integraciones:** Interacción directa con base de datos para guardar configuración.
- **Gestión de errores y mensajes:** Mensajes claros para campos incompletos, duplicados o errores de validación.

### HU-002: Edición de Configuración Existente
- **Descripción:** Como usuario, quiero modificar una configuración existente a través de un modal para corregir o actualizar la asignación de médicos o empresas a tarifas.
- **Criterios de Aceptación:** 
  - Carga automática de datos en modal de edición.
  - Modificación de campos vigentes.
  - Actualización correcta en base de datos.
  - Reflejo inmediato de cambios.
- **Restricciones y validaciones:** 
  - Mantener obligatoriedad de campos.
  - Validar integridad tras modificación.
  - Prevenir duplicados o inconsistencias.
- **Integraciones:** Actualización en base de datos y reflejo en asignaciones automáticas.
- **Gestión de errores y mensajes:** Notificación de datos inválidos o problemas en actualización.

### HU-003: Eliminación de Configuración
- **Descripción:** Como usuario administrador, quiero eliminar configuraciones obsoletas para mantener actualizada la base de asignaciones y evitar asignaciones erróneas.
- **Criterios de Aceptación:** 
  - Confirmación previa obligatoria.
  - Eliminación correcta de la base de datos.
  - Actualización inmediata de la interfaz.
  - Cese de aplicación de configuración eliminada.
- **Restricciones y validaciones:** 
  - Confirmación obligatoria para evitar eliminaciones accidentales.
  - Validar que la eliminación no afecte configuraciones activas.
- **Integraciones:** Impacto reflejado al dejar de aplicar la configuración en vistas relacionadas.
- **Gestión de errores y mensajes:** Confirmación antes de eliminar y mensajes de éxito o error post eliminación.

### HU-004: Asignación Automática en Vistas de Procedimientos y Órdenes
- **Descripción:** Como usuario, al agregar una tarifa en Procedimientos Varios, Procedimientos Programados o Agregar Orden, el sistema debe asignar automáticamente el médico o empresa configurada para dicha tarifa.
- **Criterios de Aceptación:** 
  - Asignación inmediata sin intervención manual.
  - Reflejo correcto de la configuración existente.
  - Funcionamiento en todas las vistas mencionadas.
  - Respuesta en tiempo real.
- **Restricciones y validaciones:** 
  - Solo asignar si existe configuración.
  - No realizar asignación automática si no hay configuración.
  - Validar integridad de datos asignados.
- **Integraciones:** Consulta en tiempo real a base de datos desde las vistas mencionadas.
- **Gestión de errores y mensajes:** Notificar si no hay configuración disponible, con mensaje claro para el usuario.

### HU-005: Validación y Control de Integridad
- **Descripción:** Como sistema, debo validar la integridad de las configuraciones para garantizar que las asignaciones automáticas sean consistentes y confiables.
- **Criterios de Aceptación:** 
  - Validación de campos obligatorios en tiempo real.
  - Prevención de configuraciones duplicadas.
  - Verificación de existencia de entidades relacionadas.
  - Control de consistencia de datos.
- **Restricciones y validaciones:** 
  - Validación inmediata al ingresar datos.
  - Bloqueo de guardado si hay errores.
  - Verificación de integridad referencial.
- **Integraciones:** Validación contra base de datos y reglas de negocio.
- **Gestión de errores y mensajes:** Mensajes específicos para cada tipo de error de validación.

### HU-006: Gestión de Modal y Experiencia de Usuario
- **Descripción:** Como usuario, quiero una experiencia fluida en el modal de configuración que me permita gestionar eficientemente las asignaciones médico/empresa-tarifa.
- **Criterios de Aceptación:** 
  - Apertura y cierre fluido del modal.
  - Navegación intuitiva entre campos.
  - Feedback visual inmediato de acciones.
  - Persistencia de datos en caso de error.
- **Restricciones y validaciones:** 
  - Modal responsivo y accesible.
  - Manejo correcto de estados de carga.
  - Prevención de pérdida de datos.
- **Integraciones:** Interacción con interfaz de usuario y sistema de notificaciones.
- **Gestión de errores y mensajes:** Indicadores visuales de estado, mensajes de confirmación y manejo de errores de red.

## 5. Flujos de trabajo / Casos de uso

### Flujo de gestión de configuración

1. Usuario accede al submódulo Configuración de Equipos.
2. Selecciona la opción para crear, editar o eliminar una configuración.
3. El sistema presenta un modal con campos obligatorios para creación o edición.
4. Usuario completa/modifica los campos y envía la información.
5. El sistema valida los datos ingresados.
6. Si la validación es exitosa, se guarda la configuración en la base de datos y el modal se cierra.
7. En caso de error, se muestra un mensaje indicando la corrección necesaria.
8. Para eliminación, el sistema muestra un mensaje de confirmación previa.
9. Tras confirmación, se elimina la configuración y se actualiza la base.

### Flujo de asignación automática en vistas Procedimientos y Ordenes

1. Usuario agrega una tarifa en las vistas Procedimientos Varios, Procedimientos Programados o Agregar Orden.
2. El sistema consulta en tiempo real la base de datos para verificar si existe configuración asignada a dicha tarifa.
3. Si existe, se asigna automáticamente el médico o empresa correspondiente.
4. Si no existe configuración, el sistema no realiza ninguna asignación y notifica al usuario si es pertinente.
5. El usuario procede con la operación normal de cargar el procedimiento u orden.

## 6. Anexos / referencias

- Diagrama de flujo del CRUD de configuraciones (adjuntar según construcción técnica).
- Esquema de integración con vistas Procedimientos Varios, Procedimientos Programados y Agregar Orden.
- Diagrama entidad-relación simplificado de la tabla de configuración médico/empresa-tarifa.
- Manual de validaciones aplicadas en formularios modales.
