# Reglas de desarrollo

## Separacion de responsabilidades en vistas

- No incrustar CSS dentro de archivos HTML.
- No incrustar JavaScript dentro de archivos HTML.
- Referenciar estilos desde archivos en `css/`.
- Referenciar scripts desde archivos en `js/`.
- Mantener la logica de presentacion en HTML y la logica de comportamiento en JS.

## Estructura recomendada

- `index.html` y demas vistas: solo estructura semantica.
- `css/`: hojas de estilo.
- `js/`: scripts de interaccion.