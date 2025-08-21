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

### Historia 1: Creación de configuración de asignación

- **Descripción:** Como usuario administrador, quiero crear una configuración que asigne automáticamente un médico o empresa a una tarifa específica para optimizar la carga de procedimientos.
- **Criterios de Aceptación:** El sistema debe permitir ingresar todos los datos obligatorios en el modal, validar su formato y almacenar correctamente la configuración.
- **Restricciones y validaciones:** Todos los campos de la configuración son obligatorios, se debe validar que la tarifa, médico y empresa existan y no se dupliquen configuraciones para la misma tarifa.
- **Integraciones:** Interacción con la base de datos para guardar la configuración y futuras consultas desde las vistas Procedimientos Varios, Procedimientos Programados y Agregar Orden.
- **Gestión de errores y mensajes:** Mostrar mensajes claros en caso de campos incompletos, duplicados o errores en la validación.

### Historia 2: Edición de configuración existente

- **Descripción:** Como usuario, quiero modificar una configuración existente a través de un modal para corregir o actualizar la asignación de médicos o empresas a tarifas.
- **Criterios de Aceptación:** El sistema debe cargar la configuración seleccionada en el modal, permitir cambios vigentes y actualizar la base de datos correctamente.
- **Restricciones y validaciones:** Mantener la obligatoriedad y validaciones al editar, evitar duplicados o inconsistencias después de la modificación.
- **Integraciones:** Actualización en la base de datos y reflejo inmediato en las asignaciones automáticas.
- **Gestión de errores y mensajes:** Notificar al usuario en caso de datos inválidos o problemas en la actualización.

### Historia 3: Eliminación de configuración

- **Descripción:** Como usuario administrador, quiero eliminar configuraciones obsoletas para mantener actualizada la base de asignaciones y evitar asignaciones erróneas.
- **Criterios de Aceptación:** Confirmación previa a la eliminación y correcta eliminación de la configuración de la base.
- **Restricciones y validaciones:** Confirmación obligatoria para evitar eliminaciones accidentales.
- **Integraciones:** Impacto reflejado al dejar de aplicar la configuración eliminada en las vistas relacionadas.
- **Gestión de errores y mensajes:** Confirmación antes de eliminar y mensajes de éxito o error post eliminación.

### Historia 4: Asignación automática en vistas de procedimientos y órdenes

- **Descripción:** Como usuario, al agregar una tarifa en Procedimientos Varios, Procedimientos Programados o Agregar Orden, el sistema debe asignar automáticamente el médico o empresa configurada para dicha tarifa.
- **Criterios de Aceptación:** La asignación se realiza inmediatamente sin intervención manual, reflejando correctamente la configuración existente.
- **Restricciones y validaciones:** El sistema solo asigna si existe configuración; en caso contrario, no realiza asignación automática.
- **Integraciones:** Consulta en tiempo real a la base de datos desde las vistas mencionadas para obtener la configuración.
- **Gestión de errores y mensajes:** Notificar si no hay configuración disponible para una tarifa agregada, con mensaje claro para el usuario.

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
