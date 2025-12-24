<!-- CHECKLIST DE PRUEBAS - MiParqueo -->

## ✅ PRUEBAS DE FUNCIONALIDAD

### 🔐 Autenticación y Login

- [ ] Acceso a login sin credenciales muestra error
- [ ] Email inválido muestra error
- [ ] Contraseña vacía muestra error
- [ ] Credenciales incorrectas muestran error
- [ ] Usuario válido (usuario@example.com / 1234) redirige a user dashboard
- [ ] Admin válido (admin@example.com / 1234) redirige a admin dashboard
- [ ] Mensaje de error desaparece al escribir en inputs
- [ ] Botón "Cerrar sesión" regresa al login
- [ ] Los formularios se limpian después del login

### 👤 Panel de Usuario

#### General
- [ ] Header muestra el nombre del usuario actual
- [ ] Logo y nombre de la app son visibles
- [ ] Todos los botones de navegación funcionan

#### Pestaña "Mis Reservas"
- [ ] Se muestra la reserva activa
- [ ] Se ve la información completa (parqueadero, espacio, hora, costo)
- [ ] El estado está marcado como "Activa"
- [ ] Los colores están correctos (amarillo para estado)

#### Pestaña "Historial"
- [ ] Se muestra la tabla con reservas pasadas
- [ ] Las columnas están alineadas correctamente
- [ ] Se pueden ver múltiples registros
- [ ] Los costos se muestran en color amarillo
- [ ] Hover en filas cambia color de fondo

#### Pestaña "Mis Vehículos"
- [ ] Se muestra el vehículo registrado
- [ ] El badge "Principal" está visible
- [ ] Botón "+ Agregar vehículo" funciona
- [ ] Se pueden ver detalles (marca, año, placa, color)

#### Pestaña "Perfil"
- [ ] Se muestra información personal completa
- [ ] Se muestran estadísticas (total gastado, reservas, favorito)
- [ ] El botón "Editar perfil" es visible
- [ ] Datos están organizados en dos columnas (desktop)

### 👨‍💼 Panel de Administrador

#### General
- [ ] Header muestra "Admin" en el título
- [ ] El nombre del administrador se muestra
- [ ] Logo y nombre de la app son visibles

#### Dashboard Principal
- [ ] Se muestran 4 tarjetas de estadísticas
  - [ ] Usuarios totales
  - [ ] Parqueaderos
  - [ ] Ingresos hoy
  - [ ] Ocupación promedio
- [ ] Se muestra gráfico de ingresos (barras)
- [ ] Se muestra lista de actividad reciente
- [ ] Las tarjetas tienen efecto hover

#### Pestaña "Parqueaderos"
- [ ] Se muestra tabla con parqueaderos
- [ ] Todas las columnas están presentes
- [ ] Barras de ocupación se muestran correctamente
- [ ] Estados están marcados con color verde
- [ ] Botón "+ Nuevo parqueadero" es visible
- [ ] Enlaces "Editar" funcionan

#### Pestaña "Usuarios"
- [ ] Se muestra tabla con usuarios registrados
- [ ] Se ven todos los datos de usuario
- [ ] Estados están marcados correctamente
- [ ] Botón "Ver" es funcional

#### Pestaña "Reservas"
- [ ] Se muestra tabla con todas las reservas
- [ ] Se pueden ver detalles de cada reserva
- [ ] Estados están diferenciados por color
- [ ] Los datos están actualizados

#### Pestaña "Reportes"
- [ ] Se muestran 4 opciones de reportes
- [ ] Cada reporte tiene descripción
- [ ] Los botones tienen efecto hover
- [ ] Están organizados en grid 2x2

### 📱 Responsive Design

- [ ] En móvil: lado izquierdo del login se oculta
- [ ] En móvil: form ocupa ancho completo
- [ ] Tablets: layout se adapta correctamente
- [ ] Desktop: layout se ve óptimo
- [ ] Tablas scroll horizontal en móvil
- [ ] Menús colapsables funcionan

### 🎨 Diseño Visual

- [ ] Colores están correctos (negro #000000, amarillo #FFD600)
- [ ] Bordes de 2-4px están presentes
- [ ] Sin bordes redondeados (diseño cuadrado)
- [ ] Sombras urbanas funcionan en hover
- [ ] Tipografía está en mayúsculas
- [ ] Espacios y padding son consistentes
- [ ] El layout no tiene elementos cortados

### 🖱️ Interactividad

- [ ] Botones responden al hover
- [ ] Inputs tienen focus visible
- [ ] Cambio de tab es suave
- [ ] Errores de validación se muestran
- [ ] Los enlaces internos funcionan
- [ ] Las transiciones son fluidas

### 🔧 Técnico

- [ ] Console no muestra errores críticos
- [ ] La app funciona sin conexión a internet (datos locales)
- [ ] LocalStorage funciona (si está implementado)
- [ ] No hay memory leaks evidentes
- [ ] La app se carga rápido

## 🐛 PRUEBAS DE ERRORES

### Campos vacíos
- [ ] Email vacío + submit = error
- [ ] Contraseña vacía + submit = error
- [ ] Ambos campos vacíos + submit = error

### Datos inválidos
- [ ] Email sin @ = error
- [ ] Email sin dominio = error
- [ ] Contraseña correcta + email incorrecto = error
- [ ] Email correcto + contraseña incorrecta = error
- [ ] Múltiples intentos fallidos no bloquean cuenta

### Navegación
- [ ] Volver atrás no muestra login si está autenticado
- [ ] Cerrar sesión funciona desde cualquier sección
- [ ] Cambiar de tab no pierde datos
- [ ] Recargar página mantiene sesión (si está implementado)

## 📊 PRUEBAS DE CONTENIDO

- [ ] Todos los datos se muestran correctamente
- [ ] No hay textos cortados
- [ ] Alineación de elementos es consistente
- [ ] Iconos se cargan sin errores
- [ ] Imágenes se ven claras (si hay)

## ⚡ PRUEBAS DE RENDIMIENTO

- [ ] Página carga en < 3 segundos
- [ ] Cambio de tabs es instantáneo
- [ ] Login procesa en < 1 segundo
- [ ] Scroll es fluido
- [ ] No hay lag en animaciones

## 🔐 PRUEBAS DE SEGURIDAD

- [ ] Las contraseñas se ocultan en input
- [ ] No se exponen datos sensibles en console
- [ ] Las sesiones expiran (si está implementado)
- [ ] CSRF está protegido (si hay peticiones POST)
- [ ] XSS está mitigado

## 📋 CASOS DE USO COMPLETOS

### Usuario Regular - Flujo Completo
1. [ ] Ingresa al login
2. [ ] Introduce credenciales válidas
3. [ ] Ve dashboard de usuario
4. [ ] Navega entre pestañas
5. [ ] Ve sus datos personales
6. [ ] Cierra sesión
7. [ ] Regresa al login

### Administrador - Flujo Completo
1. [ ] Ingresa al login
2. [ ] Introduce credenciales de admin
3. [ ] Ve dashboard administrativo
4. [ ] Revisa estadísticas
5. [ ] Navega entre módulos
6. [ ] Ve información de parqueaderos
7. [ ] Cierra sesión
8. [ ] Regresa al login

## 📱 NAVEGADORES TESTEADOS

- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)
- [ ] Mobile Chrome
- [ ] Mobile Safari

## 🎯 NOTAS PARA TESTING

**Credenciales de prueba:**
- Usuario: usuario@example.com / 1234
- Admin: admin@example.com / 1234

**Navegadores recomendados:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Resoluciones a probar:**
- Móvil: 375x667 (iPhone SE)
- Tablet: 768x1024 (iPad)
- Desktop: 1920x1080 (Full HD)

**Puntos críticos:**
- Login correcto/incorrecto
- Cambio de rol (usuario vs admin)
- Navegación de pestañas
- Cierre de sesión
- Diseño responsive

---

Después de completar todas las pruebas, marcar la fecha de validación:

**Fecha de validación:** _______________
**Validado por:** _______________
**Estado:** ✅ LISTO PARA PRODUCCIÓN / ⚠️ AJUSTES PENDIENTES
