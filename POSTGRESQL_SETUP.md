# Guía de Instalación - MiParqueo con PostgreSQL/SQLite

## Requisitos Previos

- Node.js 16+ instalado
- npm o yarn
- PostgreSQL 12+ (opcional, si prefieres PostgreSQL en lugar de SQLite)

## Instalación Rápida

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar base de datos

#### Opción A: SQLite (Recomendado para desarrollo)

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita `.env` y asegúrate de que tenga:

```
DB_TYPE=sqlite
SQLITE_PATH=./data/miparqueo.db
PORT=3000
```

#### Opción B: PostgreSQL

1. Crea una base de datos en PostgreSQL:

```sql
CREATE DATABASE miparqueo;
```

2. Edita `.env`:

```
DB_TYPE=postgresql
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=miparqueo
PG_USER=postgres
PG_PASSWORD=tu_contraseña
PORT=3000
```

### 3. Inicializar base de datos

```bash
npm run setup-db
```

Esto creará las tablas e insertará datos de prueba.

### 4. Iniciar servidor

```bash
npm start
```

O para desarrollo con reinicio automático:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Credenciales de Prueba

**Usuario Regular:**
- Email: `usuario@example.com`
- Contraseña: `1234`

**Administrador:**
- Email: `admin@example.com`
- Contraseña: `1234`

## Endpoints API Disponibles

### Autenticación
- `POST /api/auth/login` - Login de usuario
- `POST /api/auth/register` - Registrar nuevo usuario

### Parqueaderos
- `GET /api/parking` - Obtener todos los parqueaderos
- `POST /api/parking` - Crear parqueadero (admin)
- `PUT /api/parking/:id` - Actualizar parqueadero (admin)
- `DELETE /api/parking/:id` - Eliminar parqueadero (admin)

### Reservas
- `GET /api/reservations/user/:userId` - Obtener reservas del usuario
- `POST /api/reservations` - Crear reserva
- `PUT /api/reservations/:id/cancel` - Cancelar reserva

### Usuarios
- `GET /api/users/:id` - Obtener perfil
- `GET /api/users/:userId/vehicles` - Obtener vehículos
- `POST /api/users/:userId/vehicles` - Agregar vehículo
- `PUT /api/users/:id` - Actualizar perfil

## Estructura de Carpetas

```
APP parqueadero LAguarda/
├── backend/
│   ├── database.js           # Configuración de BD
│   └── routes/
│       ├── auth.js           # Rutas de autenticación
│       ├── parking.js        # Rutas de parqueaderos
│       ├── reservations.js   # Rutas de reservas
│       └── users.js          # Rutas de usuarios
├── data/
│   └── miparqueo.db          # Base de datos SQLite (creada automáticamente)
├── js/
│   └── app.js                # Lógica del frontend
├── css/
│   └── styles.css            # Estilos
├── server.js                 # Servidor principal
├── package.json              # Dependencias
└── .env                      # Variables de entorno
```

## Próximos Pasos

1. **Conectar frontend con API:**
   - Reemplaza las llamadas `mockUsers` en `app.js` con llamadas fetch a `/api/auth/login`
   - Actualiza la lógica de reservas para usar `/api/reservations`

2. **Seguridad en producción:**
   - Implementar JWT para autenticación
   - Usar bcrypt para hashing de contraseñas
   - Validar y sanitizar todas las entradas

3. **Mejoras adicionales:**
   - Implementar middleware de autenticación
   - Agregar logging y monitoreo
   - Crear testes unitarios e integración

## Solución de Problemas

### Error: "Cannot find module 'express'"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de conexión a PostgreSQL
- Verifica que PostgreSQL esté ejecutándose
- Confirma las credenciales en `.env`
- Asegúrate de que la base de datos existe

### Puerto 3000 en uso
Cambia el puerto en `.env`:
```
PORT=3001
```

## Contacto y Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.
