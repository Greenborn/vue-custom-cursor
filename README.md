# Vue Custom Cursor

Este componente tiene como objetivo la generación de un formulario a partir de un JSON de configuración.


# Instalación
```npm i @greenborn/vue-custom-cursor```

# Uso

En main.js
```
import { VueFormJSON } from '@greenborn/vue_json_form'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(VueFormJSON).mount('#app')
```

En componente a incluir el formulario:
```
<FormularioJSON :form_definition="f_config" 
                v-model="form_data" 
                @submit="submitHandler" @input="inputHandler"/>
```

Ejemplo de configuración JSON formulario:
```
```

# Change log
- **0.1.0**: 