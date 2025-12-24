# Configuración de MiParqueo

Este archivo contiene la configuración de la aplicación.

## 🎨 Colores del Sistema

```
Primary (Amarillo):    #FFD600
Secondary (Negro):     #000000
Success (Verde):       #00E676
Error (Rojo):          #FF1744
Gray (Oscuro):         #1A1A1A
Gray (Claro):          #F5F5F5
White:                 #FFFFFF
```

## 📐 Tamaños y Espacios

### Padding
- `p-2` = 0.5rem (8px)
- `p-4` = 1rem (16px)
- `p-6` = 1.5rem (24px)
- `p-8` = 2rem (32px)
- `p-12` = 3rem (48px)

### Márgenes
- `m-2` = 0.5rem (8px)
- `m-4` = 1rem (16px)
- `m-6` = 1.5rem (24px)
- `m-8` = 2rem (32px)

### Gap (espacios entre elementos)
- `gap-2` = 0.5rem
- `gap-3` = 0.75rem
- `gap-4` = 1rem
- `gap-6` = 1.5rem
- `gap-8` = 2rem

## 🔤 Tipografía

- **Font**: Sistema de fuentes nativo (Apple System, Segoe UI, etc.)
- **Estilo**: Mayúsculas con `uppercase`
- **Espaciado de letras**: `tracking-wide` o `tracking-widest`

### Tamaños de texto
- `text-xs` = 0.75rem (12px) - Subtítulos pequeños
- `text-sm` = 0.875rem (14px) - Etiquetas
- `text-base` = 1rem (16px) - Texto normal
- `text-lg` = 1.125rem (18px) - Encabezados menores
- `text-xl` = 1.25rem (20px) - Encabezados
- `text-2xl` = 1.5rem (24px) - Encabezados medianos
- `text-3xl` = 1.875rem (30px) - Encabezados grandes
- `text-4xl` = 2.25rem (36px) - Encabezados muy grandes
- `text-5xl` = 3rem (48px) - Encabezados principales
- `text-6xl` = 3.75rem (60px) - Encabezados hero

## 📦 Estructura de Componentes

### Header
```html
<header class="bg-black text-[#FFD600] border-b-4 border-[#FFD600]">
    <!-- Contenido -->
</header>
```

### Card/Panel
```html
<div class="bg-white border-2 border-black p-6 hover:shadow-[8px_8px_0px_0px_#FFD600]">
    <!-- Contenido -->
</div>
```

### Botón Principal
```html
<button class="px-6 py-3 bg-[#FFD600] text-black border-2 border-black 
    hover:bg-black hover:text-[#FFD600] hover:border-[#FFD600] 
    transition-all duration-200 uppercase tracking-wide">
    Texto del botón
</button>
```

### Botón Secundario
```html
<button class="px-6 py-3 bg-black text-[#FFD600] border-2 border-[#FFD600]
    hover:bg-[#FFD600] hover:text-black hover:border-black 
    transition-all duration-200 uppercase tracking-wide">
    Texto del botón
</button>
```

### Input de formulario
```html
<input type="text" placeholder="Placeholder" 
    class="w-full bg-white border-2 border-black text-black px-4 py-3
    focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-[#FFD600]"/>
```

### Badge/Etiqueta de estado
```html
<!-- Activo (Verde) -->
<span class="bg-[#00E676] text-black px-3 py-1 uppercase tracking-wide text-xs">
    Activo
</span>

<!-- Inactivo (Gris) -->
<span class="bg-gray-400 text-black px-3 py-1 uppercase tracking-wide text-xs">
    Inactivo
</span>

<!-- Primario (Amarillo) -->
<span class="bg-[#FFD600] text-black px-3 py-1 uppercase tracking-wide text-xs">
    Amarillo
</span>
```

## 🎬 Animaciones

### Transición suave
```css
transition-all duration-200
```

### Sombra urbana (desplazamiento)
```css
hover:shadow-[8px_8px_0px_0px_#FFD600]
hover:shadow-[12px_12px_0px_0px_#000000]
hover:shadow-[16px_16px_0px_0px_#FFD600]
```

### Cambio de color
```css
hover:bg-black hover:text-[#FFD600] hover:border-[#FFD600]
```

## 📱 Responsive

### Breakpoints
- **Móvil**: < 640px (por defecto)
- **Tablet**: 768px+ (`md:`)
- **Desktop**: 1024px+ (`lg:`)

### Ejemplos
```html
<!-- Oculto en móvil, visible en lg -->
<div class="hidden lg:flex">Contenido desktop</div>

<!-- 1 columna móvil, 2 en tablet, 4 en desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

## 🔐 Sistema de Roles

### Usuario Regular
- Puede ver sus reservas
- Puede ver su historial
- Puede gestionar vehículos
- Puede ver su perfil
- **No puede** acceder a datos de otros usuarios

### Administrador
- Puede ver estadísticas del sistema
- Puede gestionar parqueaderos
- Puede gestionar usuarios
- Puede ver todas las reservas
- Puede generar reportes
- Acceso completo al sistema

## 🗄️ Estructura de Datos Simulada

### Usuario
```javascript
{
    email: 'usuario@example.com',
    password: 'hashed_password',
    role: 'user', // o 'admin'
    name: 'Nombre del Usuario',
    phone: '+57 300 123 4567',
    createdAt: '2025-01-15'
}
```

### Parqueadero
```javascript
{
    id: 1,
    name: 'Centro Comercial',
    location: 'Carrera 5 #12-34',
    totalSpaces: 120,
    occupiedSpaces: 102,
    ratePerHour: 5000,
    status: 'active' // o 'inactive'
}
```

### Reserva
```javascript
{
    id: 1,
    userId: 'usuario@example.com',
    parkingLotId: 1,
    space: 'B-45',
    entryTime: '2025-12-23 14:30',
    exitTime: '2025-12-23 18:00',
    cost: 20000,
    status: 'active' // o 'completed', 'cancelled'
}
```

## 🔗 URLs de Rutas

### Usuario
- `/` - Login
- `/user/dashboard` - Panel principal
- `/user/reservations` - Mis reservas
- `/user/history` - Historial
- `/user/vehicles` - Mis vehículos
- `/user/profile` - Mi perfil

### Admin
- `/` - Login
- `/admin/dashboard` - Panel principal
- `/admin/parking-lots` - Parqueaderos
- `/admin/users` - Usuarios
- `/admin/reservations` - Reservas
- `/admin/reports` - Reportes

## ⚙️ Variables de Ambiente (para futura integración)

```
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_JWT_EXPIRATION=3600
REACT_APP_REFRESH_TOKEN_EXPIRATION=86400
REACT_APP_ENVIRONMENT=development
```

## 📊 Límites y Validaciones

### Campos de formulario
- **Email**: Máximo 255 caracteres, debe ser válido
- **Contraseña**: Mínimo 8 caracteres, debe contener mayúsculas, números
- **Teléfono**: 10-15 dígitos
- **Nombre**: 3-100 caracteres
- **Placa vehicular**: Formato XXX-123

### Límites de sistema
- **Máximo usuarios**: Sin límite (escalable)
- **Máximo parqueaderos**: Sin límite
- **Máximo espacios por parqueadero**: Sin límite
- **Sesión**: 24 horas (configurable)

---

**Última actualización**: 23 de diciembre de 2025
