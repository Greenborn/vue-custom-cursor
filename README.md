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
| transform_time | String   |  ".1s"  | Define el tiempo de la transformación CSS, en la practica implica modificar la velocidad de desplazamiento |

# Ej. en funcionamiento
- https://cv.greenborn.com.ar/luciano_vega

# Change log
- **0.1.9**: En anchos de pantalla < 900px se oculta el cursor
- **0.1.7**: Se agrega opción de configuración "transform_time"
- **0.1.5**: Se agrega opción de configuración "highlighted_tags"
- **0.1.4**: Versión funcional, se actualiza documentación