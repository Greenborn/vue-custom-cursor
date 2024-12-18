<template>
  <div v-if="cursor_show" class="inverter-cursor" :class="{ 'resaltar-cursor': resaltar }" :style="estilo"></div>
  </template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  
  const props        = defineProps(['config'])
  const config = ref({
    "highlighted_tags": (props?.config?.highlighted_tags) ? props.config.highlighted_tags : [ 'a', 'button' ],
    "transform_time":   (props?.config?.transform_time) ? props.config.transform_time :'.2s'
  } )

  const estilo       = ref({ 
    left: "555px", 
    top: "570.033px", 
    x_offset: -15, 
    y_offset: -15,
  })
  const cursor_show  = ref(false)
  const resaltar     = ref(false)
  const ultimo_tmp_a = ref(0)
  
  onMounted(()=>{
      estilo.value['transition'] = 'transform '+config.value.transform_time+' ease,top '
        +config.value.transform_time+' ease-out,left '
        +config.value.transform_time+' ease-out, width '+config.value.transform_time+', height '+config.value.transform_time

      console.log(estilo.value)
      document.addEventListener('mousemove', (e) => {
          if (window.innerWidth < 900) 
            return true
          
          estilo.value.left = (e.clientX + estilo.value.x_offset) + 'px'
          estilo.value.top = (e.clientY + estilo.value.y_offset) + 'px'
          cursor_show.value = true
  
          if (new Date().getTime() - ultimo_tmp_a.value > 200)
              resaltar.value = false
      })
      
      for (let i=0; i < config.value.highlighted_tags.length; i++) {
        document.querySelectorAll(config.value.highlighted_tags[i]).forEach(function(enlace) {
          resaltados(enlace)
        })
      }
  })
  
  function resaltados(obj){
      return obj.addEventListener('mousemove', function(e) {
          resaltar.value = true
          ultimo_tmp_a.value = new Date().getTime()
          estilo.value.left = (e.clientX + estilo.value.x_offset*2) + 'px'
          estilo.value.top = (e.clientY + estilo.value.y_offset*2) + 'px'
      })
  }
</script>
  
<style>
.inverter-cursor{
    position: fixed;
    border-radius: 50%;
    background-color: white;
    mix-blend-mode: difference;
    width: 1rem;
    height: 1rem;
    z-index: 5000;
    pointer-events: none;
}

.resaltar-cursor{
    width: 2rem !important;
    height: 2rem !important;
}

html, body, button, a{
  cursor: none !important;
}
</style>