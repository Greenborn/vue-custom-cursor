import CustomCursor from './CustomCursor.vue'

import './custom-cursor-style.css'

export const VueCustomCursor = {
    install(Vue, options) {
        Vue.component("CustomCursor", CustomCursor);
    }
}