---
sidebar_position: 6
---

# Panel de procedimientos programados

## 1. Descripción general

El visualizar  **Panel de Procedimientos Programados** permite visualizar, filtrar y consultar de forma eficiente los procedimientos médicos programados. Ofrece información relevante sobre cada procedimiento, como la fecha de atención, estado actual (programado o atendido), médico asignado, entre otros. Su propósito es brindar al personal administrativo una herramienta eficiente para la gestión y seguimiento de los procedimientos programados, mejorando la organización y la atención.

## 2. Alcance y objetivos

### Alcance
- Visualización centralizada y filtrada de los procedimientos agendados en el sistema.
- Navegación paginada y búsqueda avanzada de registros.
- Filtrado por criterios clave como paciente, documento, fecha, estado, ubicación y profesional encargado.
- Presentación en tiempo real del estado de cada procedimiento.

### Objetivos
- Optimizar la consulta y gestión de procedimientos programados.
- Agilizar la localización y seguimiento de citas por parte del personal.
- Facilitar la organización y planificación de recursos y flujos de trabajo clínico.
- Garantizar una experiencia fluida y eficiente, incluso con grandes volúmenes de datos.

## 3. Funcionalidades principales

- **Visualización de lista paginada** de procedimientos, mostrando por defecto un máximo de 10 registros por página.
- **Filtros avanzados** por:
  - Fecha de inicio y fin.
  - Especialidad y médico.
  - Estado del procedimiento (Programado, Atendido).
  - Ubicación/consultorio.
  - Nombre del paciente, tipo y número de documento.
- **Búsqueda parcial** y exacta en campos de paciente y documentos.
- **Visualización del estado actual** de cada procedimiento de manera clara e individual.
- **Contador de registros totales** y por filtro aplicado.
- **Navegación entre páginas**: opciones de avanzar, retroceder, ir a primera/última página.
- **Actualización automática** de resultados al aplicar filtros.
- **Gestión de casos extremos**: feedback en caso de pocos resultados, consultas extensas manteniendo el rendimiento.
- **Presentación de la información relevante**: paciente, médico responsable, especialidad, ubicación, edad, estado, entre otros.

## 4. Historias de Usuario

### HU-001: Consulta Eficiente de Procedimientos Programados
- **Descripción:** Como personal administrativo, quiero consultar procedimientos programados aplicando filtros para gestionar eficientemente las citas sin demoras.
- **Criterios de Aceptación:** 
  - Máximo 10 registros por página.
  - Navegación anterior/siguiente.
  - Visualización del total de registros.
  - Conteo reflejado tras filtrar.
- **Restricciones y validaciones:** 
  - Paginación correcta.
  - Actualización inmediata tras aplicar filtros.
- **Integraciones:** Visualiza datos internos, sin dependencias externas.
- **Gestión de errores y mensajes:** Mensaje si no se encuentran resultados, feedback visual al filtrar o cambiar de página.

### HU-002: Filtrado por Información del Paciente
- **Descripción:** Como recepcionista, quiero buscar procedimientos por paciente, tipo o número de documento para agilizar la localización de citas.
- **Criterios de Aceptación:** 
  - Búsqueda parcial por nombre.
  - Filtro por tipo de documento.
  - Búsqueda exacta por número.
- **Restricciones y validaciones:** 
  - Input validado para prevenir caracteres inválidos.
- **Integraciones:** Panel de visualización directa.
- **Gestión de errores y mensajes:** Mensaje si no se encuentran coincidencias; mantener filtros activos.

### HU-003: Filtrado por Estado y Ubicación
- **Descripción:** Como coordinador médico, deseo filtrar procedimientos por estado y ubicación para asignar recursos eficientemente.
- **Criterios de Aceptación:** 
  - Filtro por “Programado” y “Atendido”.
  - Filtro por consultorio/ubicación.
  - Actualización en tiempo real.
- **Restricciones y validaciones:** Combinación libre de filtros.
- **Integraciones:** Datos internos del sistema de gestión médica.
- **Gestión de errores y mensajes:** Mensaje descriptivo si no hay procedimientos encontrados.

### HU-004: Navegación Eficiente entre Páginas
- **Descripción:** Como usuario, quiero moverme rápidamente entre páginas de resultados para revisar todos los procedimientos.
- **Criterios de Aceptación:** 
  - Carga de página menor a 2 segundos.
  - Indicador de página actual.
  - Datos sin duplicados.
- **Restricciones y validaciones:** Mantener filtros activos al navegar.
- **Integraciones:** Navegación sobre el mismo set de datos filtrado.
- **Gestión de errores y mensajes:** Mensaje si la página está vacía o fuera de rango.

### HU-005: Optimización de Rendimiento
- **Descripción:** Como desarrollador, busco que la paginación sea eficiente, aplicando filtros en base de datos y cargando solo lo necesario.
- **Criterios de Aceptación:** 
  - Filtros aplicados desde consulta.
  - Ajuste dinámico del tamaño de lote.
  - Respuesta ante límites.
- **Restricciones y validaciones:** Prevención de bucles infinitos.
- **Integraciones:** Directo con la capa de datos.
- **Gestión de errores y mensajes:** Mensaje ante gran volumen o límite alcanzado.

### HU-006: Manejo de Casos Extremos
- **Descripción:** Como sistema, debo manejar correctamente filtros muy específicos o volúmenes extremos para garantizar consistencia y performance.
- **Criterios de Aceptación:** 
  - Funciona con pocos resultados.
  - Maneja consultas a páginas altas.
  - No debe fallar nunca.
  - Feedback útil ante pocos resultados.
- **Restricciones y validaciones:** Respuestas siempre válidas y controladas.
- **Integraciones:** Manejo interno de visualización.
- **Gestión de errores y mensajes:** Mensajes claros para estados vacíos, pocos resultados o consultas fuera de rango.

## 5. Flujos de trabajo / Casos de uso

### Flujo principal: Consulta y filtrado de procedimientos

1. El usuario accede al visualizador Panel de Procedimientos Programados.
2. El sistema carga por defecto los procedimientos entre las fechas seleccionadas, mostrando 10 registros por página.
3. El usuario puede aplicar uno o varios filtros, incluyendo:
    - Fecha,
    - Especialidad,
    - Estado (programado/atendido),
    - Consultorio/ubicación,
    - Nombre, tipo o número de documento del paciente.
4. Al aplicar cualquier filtro, el sistema actualiza la lista y el conteo total de resultados de manera instantánea.
5. El usuario navega entre páginas usando controles de paginación (primera, anterior, siguiente, última).
6. La información relevante de cada procedimiento es visible: estado, paciente, médico, ubicación, fecha y detalles.
7. Si una consulta no arroja resultados, el sistema muestra un mensaje informativo y mantiene la estructura para nuevos filtros.
8. Siempre se mantiene la performance y la presentación adecuada, independientemente del volumen consultado.

### Alternativas y excepciones:
- Si el usuario intenta acceder a una página fuera del rango, se lo redirige a la página válida más cercana y se muestra un mensaje.
- En búsquedas rápidas, si la respuesta tarda más de lo esperado, se muestra un mensaje de "procesando" hasta completarse.
- Al cambiar de filtros, la paginación se reinicia a la primera página mostrando los nuevos resultados.