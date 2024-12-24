# Vue Custom Cursor

Este componente tiene como objetivo la posibilidad de definir un cursor personalizado


# Instalación
```npm i @greenborn/vue-custom-cursor@latest```

# Uso

En main.js
```
import { VueCustomCursor } from '@greenborn/vue-custom-cursor'; 
import '@greenborn/vue-custom-cursor/dist/library.css';

createApp(App).use(VueCustomCursor).mount('#app')
```

En App.vue incluir:
```
<CustomCursor :config='{
    highlighted_tags: [ "a", "button" ],
    transform_time: ".1s"
}'/>
```

# Opciones de Configuración

| Propiedad | Tipo de Dato  | Valor por Defecto | Descripción |
|-----------|-----------|-----------|-----------|
| highlighted_tags | Array   |  [ "a", "button" ]  | Define que etiquetas HTML serán resaltadas |
| transform_time | String   |  ".2s"  | Define el tiempo de la transformación CSS, en la practica implica modificar la velocidad de desplazamiento |
| click_effect_enabled | Boolean   |  true  | Define si se habilita animación para efecto de click |
| click_effect_offset_x | Number   |  -10  | Define desplazamiento en x del centro del efecto click |
| click_effect_offset_y | Number   |  -10  | Define desplazamiento en y del centro del efecto click |

# Ej. en funcionamiento
- https://cv.greenborn.com.ar/luciano_vega

# Change log
- **0.1.11** Se soluciona bug al click_effect_enabled en false
- **0.1.10**: Se agrega efecto de click y se agregan propiedades de configuración relacionadas
- **0.1.9**: En ancho de pantalla < 900px se oculta el cursor
- **0.1.7**: Se agrega opción de configuración "transform_time"
- **0.1.5**: Se agrega opción de configuración "highlighted_tags"
- **0.1.4**: Versión funcional, se actualiza documentación