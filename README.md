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
    highlighted_tags: [ "a", "button" ]
}'/>
```

# Opciones de Configuración

| Propiedad | Tipo de Dato  | Valor por Defecto | Descripción |
|-----------|-----------|-----------|-----------|
| highlighted_tags | Array   |  [ "a", "button" ]  | Define que etiquetas HTML serán resaltadas |

# Change log
- **0.1.5**: Se agregaopción de configuración "highlighted_tags"
- **0.1.4**: Versión funcional, se actualiza documentación