<!-- NOTAS DE DESARROLLO - MiParqueo App -->

## 🎯 GUÍA DE EXPANSIÓN

### 1. AGREGAR NUEVO USUARIO
Para añadir nuevas credenciales de prueba, edita `js/app.js` en la sección `mockUsers`:

```javascript
const mockUsers = {
    'usuario@example.com': {
        password: '1234',
        role: 'user',
        name: 'Juan Pérez García',
        email: 'usuario@example.com'
    },
    'neousuario@example.com': {  // ← NUEVO USUARIO
        password: '5678',
        role: 'user',
        name: 'Nuevo Usuario',
        email: 'neousuario@example.com'
    },
    'admin@example.com': {
        password: '1234',
        role: 'admin',
        name: 'Administrador Sistema',
        email: 'admin@example.com'
    }
};
```

### 2. AGREGAR NUEVO TAB AL DASHBOARD DE USUARIO

**En index.html**, añade el botón del tab:

```html
<button class="tab-btn px-6 py-3 text-gray-600..." data-tab="nuevo-tab">
    Nuevo Tab
</button>
```

Luego crea el contenido del tab:

```html
<div id="nuevo-tab-tab" class="tab-content hidden">
    <div class="bg-white border-2 border-black p-6">
        <h3 class="text-2xl uppercase tracking-tight mb-6">Título del Tab</h3>
        <!-- Contenido aquí -->
    </div>
</div>
```

La funcionalidad ya está implementada en `js/app.js` con `switchUserTab()`.

### 3. CREAR NUEVA SECCIÓN EN ADMIN

**En index.html**, añade el tab:

```html
<button class="admin-tab-btn px-6 py-3..." data-tab="nueva-seccion">
    Nueva Sección
</button>
```

Crea el contenido:

```html
<div id="nueva-seccion-tab" class="admin-tab-content hidden">
    <!-- Contenido de la nueva sección -->
</div>
```

### 4. AGREGAR FUNCIONALIDAD DE BÚSQUEDA

Ejemplo para tabla de usuarios:

```html
<input type="text" id="search-usuarios" placeholder="Buscar usuario..." 
       class="w-full border-2 border-black px-4 py-2 mb-4">
```

En `js/app.js`:

```javascript
document.getElementById('search-usuarios').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#users-tab tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});
```

### 5. CONECTAR CON API REAL

Reemplaza las funciones en `js/app.js`:

```javascript
async function handleLogin(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            showError('Credenciales inválidas');
            return;
        }

        const data = await response.json();
        
        appState.isAuthenticated = true;
        appState.currentUser = data.user;
        appState.userRole = data.user.role;
        appState.token = data.token; // Guardar token JWT

        showDashboard(data.user.role);
        loginForm.reset();
    } catch (error) {
        console.error('Error en login:', error);
        showError('Error de conexión');
    }
}

// Agregar token a todas las peticiones
async function apiCall(endpoint, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.token}`,
        ...options.headers
    };

    return fetch(endpoint, { ...options, headers });
}
```

### 6. AGREGAR VALIDACIONES MEJORADAS

```javascript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!validateEmail(email)) {
        showError('Formato de correo inválido');
        return;
    }

    if (!validatePassword(password)) {
        showError('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    // ... resto del código
}
```

### 7. AGREGAR MODAL DE CONFIRMACIÓN

```html
<div id="confirm-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white border-2 border-black p-8 max-w-md">
        <h3 class="text-xl uppercase tracking-tight mb-4" id="modal-title"></h3>
        <p class="mb-6" id="modal-message"></p>
        <div class="flex gap-4">
            <button id="modal-cancel" class="px-6 py-2 bg-gray-300 border-2 border-black hover:bg-gray-400 uppercase">Cancelar</button>
            <button id="modal-confirm" class="px-6 py-2 bg-[#FFD600] text-black border-2 border-black hover:bg-black hover:text-[#FFD600] uppercase">Confirmar</button>
        </div>
    </div>
</div>
```

En `js/app.js`:

```javascript
function showConfirmModal(title, message, onConfirm) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    
    const modal = document.getElementById('confirm-modal');
    modal.classList.remove('hidden');
    
    document.getElementById('modal-confirm').onclick = () => {
        onConfirm();
        modal.classList.add('hidden');
    };
    
    document.getElementById('modal-cancel').onclick = () => {
        modal.classList.add('hidden');
    };
}
```

### 8. AGREGAR NOTIFICACIONES/TOAST

```javascript
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 px-6 py-3 border-2 border-black uppercase tracking-wide text-sm z-50`;
    
    const colors = {
        success: 'bg-[#00E676] text-black',
        error: 'bg-[#FF1744] text-white',
        info: 'bg-[#FFD600] text-black',
        warning: 'bg-orange-500 text-white'
    };
    
    toast.className += ' ' + (colors[type] || colors.info);
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
```

### 9. GUARDAR ESTADO EN LOCALSTORAGE

```javascript
function saveUserSession() {
    const sessionData = {
        user: appState.currentUser,
        role: appState.userRole,
        timestamp: new Date().getTime()
    };
    
    localStorage.setItem('miparqueo_session', JSON.stringify(sessionData));
}

function loadUserSession() {
    const saved = localStorage.getItem('miparqueo_session');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            const now = new Date().getTime();
            const expiration = 24 * 60 * 60 * 1000; // 24 horas
            
            if (now - data.timestamp < expiration) {
                appState.isAuthenticated = true;
                appState.currentUser = data.user;
                appState.userRole = data.role;
                showDashboard(data.role);
            } else {
                localStorage.removeItem('miparqueo_session');
            }
        } catch (e) {
            console.error('Error cargando sesión:', e);
        }
    }
}

function logout() {
    // ... código existente ...
    localStorage.removeItem('miparqueo_session');
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', loadUserSession);
```

### 10. AGREGAR GRÁFICOS CON CHART.JS

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<canvas id="income-chart"></canvas>

<script>
const ctx = document.getElementById('income-chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [{
            label: 'Ingresos (COP)',
            data: [1200000, 1500000, 1800000, 1400000, 2100000, 2500000, 2300000],
            borderColor: '#FFD600',
            backgroundColor: 'rgba(255, 214, 0, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            pointBackgroundColor: '#000000',
            pointBorderColor: '#FFD600',
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#000000',
                    font: { size: 14, weight: 'bold' }
                }
            }
        },
        scales: {
            y: {
                ticks: { color: '#000000' },
                grid: { color: '#e0e0e0' }
            },
            x: {
                ticks: { color: '#000000' },
                grid: { color: '#e0e0e0' }
            }
        }
    }
});
</script>
```

---

## 📚 REFERENCIAS ÚTILES

- Documentación Tailwind CSS: https://tailwindcss.com/docs
- MDN JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
- HTML Semántico: https://developer.mozilla.org/es/docs/Glossary/Semantic_HTML
- REST API: https://restfulapi.net/

