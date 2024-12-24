<template>
  <div v-if="cursor_show" class="inverter-cursor" :class="{ 'resaltar-cursor': resaltar }" :style="estilo"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['config'])
const config = ref({
  "highlighted_tags": (props?.config?.highlighted_tags) ? props.config.highlighted_tags : ['a', 'button'],
  "transform_time": (props?.config?.transform_time) ? props.config.transform_time : '.2s',
  "click_effect_enabled": (props?.config?.click_effect === true),
  "click_effect_offset_x": (props?.config?.click_effect_offset_x) ? props.config.click_effect_offset_x : -10,
  "click_effect_offset_y": (props?.config?.click_effect_offset_y) ? props.config.click_effect_offset_y : -10,
})

const estilo = ref({
  left: "555px",
  top: "570.033px",
  x_offset: -15,
  y_offset: -15,
})
const cursor_show = ref(false)
const resaltar = ref(false)
const ultimo_tmp_a = ref(0)

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect"
  d.style.top = (e.clientY + config.value.click_effect_offset_y) + "px"
  d.style.left = (e.clientX + config.value.click_effect_offset_x)+ "px"
  document.body.appendChild(d);
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}

onMounted(() => {
  if (config.value.click_effect_enabled)
    document.addEventListener('click', clickEffect)
  estilo.value['transition'] = 'transform ' + config.value.transform_time + ' ease,top '
    + config.value.transform_time + ' ease-out,left '
    + config.value.transform_time + ' ease-out, width ' + config.value.transform_time + ', height ' + config.value.transform_time

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

  for (let i = 0; i < config.value.highlighted_tags.length; i++) {
    document.querySelectorAll(config.value.highlighted_tags[i]).forEach(function (enlace) {
      resaltados(enlace)
    })
  }
})

function resaltados(obj) {
  return obj.addEventListener('mousemove', function (e) {
    resaltar.value = true
    ultimo_tmp_a.value = new Date().getTime()
    estilo.value.left = (e.clientX + estilo.value.x_offset * 2) + 'px'
    estilo.value.top = (e.clientY + estilo.value.y_offset * 2) + 'px'
  })
}
</script>

<style>
.inverter-cursor {
  position: fixed;
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  width: 1rem;
  height: 1rem;
  z-index: 5000;
  pointer-events: none;
}

.resaltar-cursor {
  width: 2rem !important;
  height: 2rem !important;
}

html,
body,
button,
a {
  cursor: none !important;
}

div.clickEffect {
  position: fixed;
  box-sizing: border-box;
  border-style: solid;
  border-color: #000000;
  border-radius: 50%;
  animation: clickEffect 0.4s ease-out;
  z-index: 99999;
}

@keyframes clickEffect {
  0% {
    opacity: 1;
    width: 0.5em;
    height: 0.5em;
    margin: -0.25em;
    border-width: 0.5rem;
  }

  100% {
    opacity: 0.2;
    width: 15em;
    height: 15em;
    margin: -7.5em;
    border-width: 0.03rem;
  }
}
</style>