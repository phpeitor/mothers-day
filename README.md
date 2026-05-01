# Mother's Day 🤱

[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

[![Video](https://img.youtube.com/vi/aXiFG7v8-EU/0.jpg)](https://www.youtube.com/watch?v=aXiFG7v8-EU)  
🎥[Ver demo](https://www.youtube.com/watch?v=PXzVrNyMUN8)

## 🎁 Descripción

Landing page interactiva para el Día de la Madre con animaciones modernas, efectos de partículas y transiciones fluidas. Incluye múltiples secciones animadas y una experiencia visual reactiva.

## ✨ Características

### Landing Page Principal (`/`)
- **Diseño glassmorphism** con fondo de gradientes radiales y backdrop blur
- **Texto animado** "Mamá" con efecto glow secuencial por letra
- **Gift aleatorio** que cambia cada vez que se carga la página (`caja1.gif`, `caja2.gif`, `caja3.gif`)
- **Logo interactivo** con lightbox: click para expandir, ESC o click fuera para cerrar

### Efectos de Botones (`action-button`)
- **Mouse tracking glow** — brillo que sigue el cursor sobre el botón
- **Shimmer border** — borde animado con gradiente cíclico al hacer hover
- **Ripple effect** — onda expansiva desde el punto exacto del click
- **Particle burst** — 28 partículas con glow que explotan hacia toda la pantalla (1.8s de duración)
- **Button pop animation** — efecto de rebote al click (scale 1.08 → 0.92 → 1)

### Transición de Página
- **Morph overlay** — overlay radial que se expande desde el centro con delay de 0.6s
- **Fade escalonado** — los elementos desaparecen en secuencia: botones → logo → card
- **Efecto 3D** — la card rota en X mientras se desvanece
- **Navegación delayed** — 1.8s para disfrutar la animación completa antes de redirigir

### Animaciones Disponibles
| Ruta | Descripción |
|---|---|
| `./animate-1` | Animación de corazones |
| `./animate-2` | Segunda animación temática |

## 🚀 Quick Start

### Requisitos
- Cualquier navegador web moderno (Chrome, Firefox, Edge, Safari)
- **No requiere** servidor, Node.js ni dependencias externas

### Pasos para levantar el proyecto

1. **Clona el repositorio**
   ```bash
   git clone [URL_del_repositorio]
   cd mothers-day
   ```

2. **Abre el proyecto en tu navegador**

   **Opción A — Desde terminal (Windows):**
   ```cmd
   start index.html
   ```

   **Opción B — Desde terminal (macOS/Linux):**
   ```bash
   open index.html       # macOS
   xdg-open index.html   # Linux
   ```

   **Opción C — Doble click** directamente en el archivo `index.html`

   **Opción D — Con servidor local (opcional):**
   ```bash
   # Con Python
   python -m http.server 8000

   # Con PHP
   php -S localhost:8000

   # Con Node.js (requiere npx)
   npx serve
   ```

   Luego visita `http://localhost:8000`

## 📁 Estructura del Proyecto

```
mothers-day/
├── index.html              # Landing page principal
├── css/
│   ├── box.css             # Estilos principales + animaciones
│   └── fonts.css           # Tipografía Poppins
├── js/
│   └── index.js            # Lógica de interacción y animaciones
├── img/
│   ├── logo.png            # Logo principal
│   ├── logo-mother.png     # Logo para lightbox
│   ├── caja1.gif           # Gift option 1
│   ├── caja2.gif           # Gift option 2
│   └── caja3.gif           # Gift option 3
├── animate-1/              # Primera animación (corazones)
│   ├── index.html
│   ├── css/
│   └── js/
├── animate-2/              # Segunda animación
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── fonts/
├── .gitignore
└── README.md
```

*If you're interested in knowing the powerlevel configuration to get this prompt, have a look at [this gist](https://github.com/phpeitor/).*
