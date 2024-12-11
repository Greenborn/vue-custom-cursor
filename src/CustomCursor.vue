<template>
<div v-if="cursor_show" class="inverter-cursor" :class="{ 'resaltar-cursor': resaltar }" :style="estilo"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const estilo = ref({ left: "555px", top: "570.033px", x_offset: -15, y_offset: -15 })
const cursor_show = ref(false)
const resaltar = ref(false)
const ultimo_tmp_a = ref(0)

onMounted(()=>{
    document.addEventListener('mousemove', (e) => {
        estilo.value.left = (e.clientX + estilo.value.x_offset) + 'px'
        estilo.value.top = (e.clientY + estilo.value.y_offset) + 'px'
        cursor_show.value = true

        if (new Date().getTime() - ultimo_tmp_a.value > 200)
            resaltar.value = false
    })

    document.querySelectorAll('a').forEach(function(enlace) {
        resaltados(enlace)
    })

    document.querySelectorAll('button').forEach(function(enlace) {
        resaltados(enlace)
    })
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
