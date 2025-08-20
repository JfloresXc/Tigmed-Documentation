---
sidebar_position: 4
---

# Cuenta del Paciente

La **Cuenta del Paciente** es el registro financiero completo de un paciente durante toda su instancia en la institución, desde el ingreso hasta el alta médica.

## Definición

En el sistema Tigmed, la cuenta del paciente consolida todos los gastos y cobros relacionados con la atención médica recibida, proporcionando un control financiero detallado y transparente.

## Objetivo

Consolidar todos los gastos y cobros relacionados a la atención del paciente para:
- Facilitar el proceso de facturación
- Proporcionar transparencia en los costos
- Controlar los gastos médicos
- Integrar con sistemas de seguros

## Detalles Incluidos

La cuenta del paciente registra:

### Servicios Médicos
- Consultas médicas generales
- Consultas especializadas
- Consultas de emergencia
- Teleconsultas

### Procedimientos y Exámenes
- Exámenes de laboratorio
- Estudios de imagen (rayos X, ecografías, etc.)
- Procedimientos quirúrgicos
- Biopsias y estudios especializados

### Medicamentos y Materiales
- Medicamentos administrados
- Materiales médicos utilizados
- Dispositivos médicos
- Suministros especializados

### Servicios de Hospitalización
- **Habitación hospitalaria** (si aplica)
- Servicios de enfermería
- Alimentación hospitalaria
- Servicios de limpieza y mantenimiento

### Terapias y Rehabilitación
- Sesiones de fisioterapia
- Terapias especializadas
- Rehabilitación post-operatoria
- Tratamientos continuos

## Estados de la Cuenta

### 🟢 Activa
Cuenta en uso durante la atención del paciente, donde se van registrando los servicios.

### 🟡 Pendiente de Pago
Cuenta cerrada pero con saldo pendiente de liquidación.

### 🔵 Pagada
Cuenta completamente liquidada sin saldos pendientes.

### 🟠 En Revisión
Cuenta bajo revisión por discrepancias o autorizaciones de seguros.

### 🔴 Anulada
Cuenta cancelada por errores o circunstancias especiales.

## Proceso de Gestión

### 1. Apertura de Cuenta
- Se crea automáticamente al registrar al paciente
- Se asigna un número único de cuenta
- Se vincula con la información del seguro

### 2. Registro de Servicios
- Cada servicio se registra en tiempo real
- Se aplican las tarifas correspondientes
- Se calculan descuentos y copagos

### 3. Validación de Seguros
- Verificación de cobertura
- Aplicación de autorizaciones
- Cálculo de copagos del paciente

### 4. Cierre de Cuenta
- Consolidación final de todos los servicios
- Generación de la factura final
- Aplicación de ajustes si es necesario

### 5. Liquidación
- Procesamiento del pago
- Aplicación de pagos de seguros
- Cobro de saldos pendientes al paciente

## Relación con Otros Módulos

### Admisión y Citas
- **Genera cargos**: Cada cita y servicio se registra automáticamente
- **Actualiza costos**: Los procedimientos se facturan en tiempo real
- **Controla autorizaciones**: Valida coberturas antes de brindar servicios

### Caja
- **Procesa pagos**: Registra todos los pagos recibidos
- **Genera facturas**: Produce la documentación de cobro
- **Controla saldos**: Mantiene el estado financiero actualizado

### Configuración
- **Aplica tarifas**: Utiliza los precios configurados en el sistema
- **Maneja descuentos**: Aplica promociones y descuentos especiales
- **Integra seguros**: Conecta con las configuraciones de seguros médicos

## Tipos de Cargos

### Cargos Directos
- Servicios médicos prestados
- Medicamentos suministrados
- Procedimientos realizados
- Uso de equipos médicos

### Cargos Indirectos
- Servicios administrativos
- Uso de instalaciones
- Servicios de apoyo
- Gastos generales

### Cargos Especiales
- Servicios de emergencia
- Atención fuera de horario
- Servicios especializados
- Tratamientos experimentales

## Beneficios del Sistema

### Para el Paciente
- **Transparencia**: Visibilidad completa de los costos
- **Control**: Seguimiento de gastos médicos
- **Facilidad**: Proceso de pago simplificado
- **Confianza**: Registro detallado y confiable

### Para la Institución
- **Control financiero**: Seguimiento preciso de ingresos
- **Eficiencia**: Automatización del proceso de facturación
- **Cumplimiento**: Adherencia a normas contables
- **Análisis**: Datos para toma de decisiones

### Para los Seguros
- **Integración**: Conexión directa con sistemas de seguros
- **Validación**: Verificación automática de coberturas
- **Facturación**: Proceso automatizado de cobro
- **Auditoría**: Trazabilidad completa de servicios

## Reportes Disponibles

### Reporte de Cuenta Individual
- Detalle completo de servicios
- Cargos y pagos aplicados
- Saldo actual de la cuenta
- Historial de transacciones

### Reporte de Cuentas por Cobrar
- Listado de cuentas pendientes
- Antigüedad de saldos
- Seguimiento de gestión de cobro
- Análisis de cartera

### Reporte de Ingresos por Servicio
- Ingresos por tipo de servicio
- Comparativos mensuales
- Análisis de rentabilidad
- Tendencias de facturación

---

**Ver también:**
- [Cita Médica](./cita-medica)
- [Paciente](./paciente)
- [Admisión Hospitalaria](./admision-hospitalaria)