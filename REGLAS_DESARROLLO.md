# Reglas de desarrollo

## Contexto del proyecto

- Proyecto estatico para una landing interactiva del Dia de la Madre.
- Stack actual: HTML, CSS y JavaScript vanilla. No hay build step, bundler ni dependencias Node.
- Entrada principal: `index.html`.
- Estilos principales de la landing: `css/box.css`.
- Interacciones principales de la landing: `js/index.js`.
- Experiencias secundarias: `animate-1/` y `animate-2/`.
- En este workspace suele visualizarse con Apache en `http://localhost/mothers-day/index.html`.

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
- `img/`: imagenes, gifs y assets visuales.

## Criterios de calidad visual

- Mantener una estetica romantica, calida y cuidada: gradientes suaves, glow, glassmorphism y microinteracciones fluidas.
- Evitar cambios visuales genericos o planos. Cada ajuste debe sentirse intencional y consistente con el look actual.
- Las animaciones deben tener easing suave. Preferir curvas como `cubic-bezier(0.22, 1, 0.36, 1)` para entradas naturales.
- Usar delays escalonados cuando haya multiples elementos relacionados, por ejemplo botones de accion.
- No saturar con efectos. Si se agrega una animacion, revisar que no compita con glow, shimmer, ripple o particulas existentes.
- Cuidar desktop y mobile. Validar especialmente `max-width: 574px`, donde los botones pasan a columna.

## Animaciones e interacciones

- Los botones principales usan `.action-button` y viven dentro de `.button-group`.
- El click de los botones se gestiona desde `js/index.js` mediante `[data-target]`.
- La navegacion se retrasa con `transitionDelay = 1800` para permitir la transicion visual completa.
- Las transiciones de destino se controlan con `data-transition-image` y `data-transition-class`.
- Mantener soporte para usuarios con menos movimiento usando `@media (prefers-reduced-motion: reduce)` cuando se agreguen animaciones nuevas.
- Evitar modificar `transform` en varios efectos sin revisar interacciones con hover, active y click, porque comparten la misma propiedad.

## Accesibilidad y semantica

- Mantener `button` para acciones dentro de la landing y `a` para navegacion directa.
- Conservar `aria-label` cuando el contenido visible sea solo iconico o ambiguo.
- Los elementos decorativos creados por JS deben usar `aria-hidden="true"` y `alt=""` cuando aplique.
- No bloquear teclado: conservar estados `:focus-visible` cuando haya tooltips o feedback visual.

## JavaScript

- Usar JavaScript vanilla, sin frameworks ni dependencias externas salvo solicitud explicita.
- Mantener la logica en funciones pequenas dentro de `DOMContentLoaded` cuando solo aplique a la landing.
- No duplicar listeners si se puede delegar o reutilizar la seleccion existente.
- Al crear nodos temporales, programar su limpieza con `setTimeout` como ya hacen `ripple`, `particle` y las transiciones.

## CSS

- Preferir cambios locales y especificos antes que reestructurar todo el archivo.
- Reutilizar clases existentes antes de crear nuevas.
- No introducir `!important` salvo que se justifique por una integracion concreta.
- Evitar transiciones con `all`; declarar propiedades especificas.
- Mantener compatibilidad visual con assets existentes en `img/`.

## Verificacion antes de cerrar cambios

- Abrir `http://localhost/mothers-day/index.html` si Apache esta disponible.
- Revisar al menos: carga inicial, hover de botones, click de cada boton, lightbox del logo y vista mobile aproximada.
- Si el cambio es solo CSS/HTML/JS estatico, no hay pruebas automatizadas obligatorias.
- Revisar `git diff` para confirmar que no se tocaron archivos ajenos al objetivo.

## Manejo de cambios existentes

- Puede haber cambios sin commit en `index.html`, `css/box.css`, `js/index.js` o assets nuevos.
- No revertir cambios existentes sin confirmacion explicita.
- Si se trabaja sobre un archivo con cambios previos, leer el contexto y hacer el ajuste minimo necesario.
