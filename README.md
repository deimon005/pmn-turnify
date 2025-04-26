# Mi-App-Horarios

**Producto Mínimo Navegable (PMN)** para la gestión de turnos en una empresa de construcción. Demostración de flujo y UX sin lógica de negocio ni persistencia (todos los datos son “placeholders”).

---

## 🔍 Descripción

Este prototipo está dividido en tres dashboards según rol:

- **Trabajador**  
  - Calendario de sólo lectura (días marcados por supervisor).  
  - Solicitud de permisos y quejas con feedback.  
  - Gestión de horas extra (Tomar/Reservar con toast).  
  - Intercambio de turnos (Subir/Solicitar con toast).

- **Supervisor de Obra**  
  - Vista de plantilla de empleados en tarjetas.  
  - Calendario editable (Presente, Falta, Justificado, Añadir Turno).  
  - Publicación y seguimiento de horas extra.

- **Recursos Humanos**  
  - Gestión de empleados y “Ver Turnos”.  
  - Detalle de turnos regulares y horas extra (Aprobar/Negar).  
  - Seguimiento de quejas (Ver detalle, Marcar Resuelta).  
  - Gestión de permisos (Aprobar/Negar).  
  - Reportes generales (tarjetas y tabla de estadísticas).

> **Nota:** El login por rol (radio buttons) es un atajo para evitar un sistema de autenticación real y backend. Todos los datos se manejan en memoria con React `useState` y arrays estáticos.
