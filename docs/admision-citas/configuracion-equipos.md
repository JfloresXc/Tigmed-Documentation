---
sidebar_position: 2
---

# Configuración de Equipos

### 🎯 Visión General del Submódulo

El submódulo **Configuración de Equipos** es una herramienta administrativa que permite preconfigurar asociaciones entre tarifas médicas y sus proveedores correspondientes (médicos o empresas), automatizando la selección de recursos durante el registro de procedimientos médicos.

### 🏥 Contexto Hospitalario

#### Problemática Identificada
En el flujo tradicional de registro de procedimientos médicos, el personal administrativo debe:
- Seleccionar manualmente el médico o empresa para cada tarifa
- Recordar qué proveedor corresponde a cada procedimiento específico
- Mantener consistencia en las asignaciones según políticas institucionales
- Invertir tiempo significativo en selecciones repetitivas

#### Solución Implementada
La **Configuración de Equipos** permite:
- **Preconfigurar** asociaciones tarifa-proveedor una sola vez
- **Automatizar** la selección durante el registro de procedimientos
- **Estandarizar** asignaciones según políticas hospitalarias
- **Acelerar** el proceso de captura de datos médicos

### 🔧 Funcionalidades Principales

#### 1. **Gestión de Configuraciones**

**📋 Consulta y Visualización**
- Listado paginado de todas las configuraciones activas
- Filtros de búsqueda por código y descripción de tarifa
- Visualización clara del tipo de proveedor (médico/empresa)
- Estado de activación/desactivación de cada configuración

**➕ Creación de Configuraciones**
- Búsqueda dinámica de tarifas médicas disponibles
- Selección del tipo de atención (Personal de Salud / Empresa)
- Asignación específica de médico o empresa según el tipo
- Activación/desactivación de la configuración

**✏️ Modificación de Configuraciones**
- Edición de asociaciones existentes
- Cambio de proveedor asignado
- Actualización del estado activo/inactivo
- Validación de integridad de datos

**🗑️ Eliminación de Configuraciones**
- Eliminación segura con confirmación
- Validación de dependencias antes de eliminar
- Mantenimiento de integridad referencial

#### 2. **Aplicación Automática en Procedimientos**

**🔄 Integración con Procedimientos No Programados**
- Detección automática de configuraciones al seleccionar tarifas
- Pre-llenado de campos de médico/empresa según configuración
- Mantenimiento de flexibilidad para modificaciones manuales
- Aplicación en tiempo real durante el cambio de tipo de atención

**🔗 Soporte para Tarifas Relacionadas**
- Aplicación masiva de configuraciones en procedimientos complejos
- Mantenimiento de configuraciones específicas por tarifa
- Preservación de listas existentes como secundarias
- Consistencia en procedimientos multi-tarifa

### 🔄 Flujos de Trabajo Detallados

#### **Flujo 1: Configuración Inicial por Administrador**

```
1. Administrador accede al submódulo Configuración de Equipos
2. Selecciona "Nueva Configuración"
3. Busca y selecciona la tarifa médica específica
4. Define el tipo de atención (Personal de Salud / Empresa)
5. Asigna el proveedor correspondiente:
   - Si es Personal de Salud: selecciona médico específico
   - Si es Empresa: selecciona empresa proveedora
6. Activa la configuración
7. Guarda la configuración en el sistema
8. Configuración queda disponible para uso automático
```

#### **Flujo 2: Aplicación Automática en Procedimientos**

```
1. Personal administrativo registra nuevo procedimiento no programado
2. Selecciona tarifa médica desde el catálogo
3. Sistema detecta configuración de equipos existente
4. Usuario cambia tipo de atención (ej: de "Empresa" a "Personal de Salud")
5. Sistema aplica automáticamente:
   - Pre-llena campo de médico con valor configurado
   - Mantiene flexibilidad para cambio manual si es necesario
6. Usuario procede con el registro o modifica según necesidad
7. Procedimiento se registra con asignación correcta
```

#### **Flujo 3: Procedimientos con Tarifas Relacionadas**

```
1. Usuario selecciona tarifa principal con tarifas relacionadas
2. Sistema detecta configuraciones múltiples
3. Pregunta: "¿Deseas agregar todas las tarifas relacionadas?"
4. Si usuario acepta:
   a. Sistema carga todas las tarifas del procedimiento
   b. Aplica configuración específica a cada tarifa:
      - Tarifa A → Médico especialista configurado
      - Tarifa B → Empresa de equipos configurada
      - Tarifa C → Personal de enfermería configurado
   c. Cada tarifa mantiene su configuración individual
5. Usuario revisa y ajusta si es necesario
6. Procedimiento completo queda correctamente configurado
```

#### **Integraciones Requeridas**
- **Catálogo de Tarifas**: Para búsqueda y selección de tarifas médicas
- **Directorio de Personal**: Para asignación de médicos y especialistas
- **Registro de Empresas**: Para asignación de proveedores corporativos
- **Sistema de Procedimientos**: Para aplicación automática de configuraciones

#### **Consideraciones de Seguridad**
- Validación de permisos por rol de usuario
- Auditoría de cambios en configuraciones
- Encriptación de datos sensibles
- Respaldo automático de configuraciones

### 🔮 Roadmap y Evolución Futura

#### **Fase 2: Inteligencia Artificial**
- Sugerencias automáticas basadas en patrones históricos
- Detección de anomalías en asignaciones
- Optimización predictiva de recursos

#### **Fase 3: Integración Avanzada**
- Sincronización con sistemas de gestión hospitalaria (HIS)
- Integración con sistemas de facturación
- Conectividad con dispositivos médicos IoT

#### **Fase 4: Analytics y Reportes**
- Dashboard de utilización de configuraciones
- Reportes de eficiencia por especialidad
- Análisis de impacto en tiempos de atención
---

*Esta documentación está diseñada para ser integrada en proyectos de documentación organizacional como Docusaurus, proporcionando una visión completa y funcional del submódulo Configuración de Equipos dentro del contexto del módulo Admisión y Citas.*
