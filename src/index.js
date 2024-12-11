import CustomCursor from './CustomCursor.vue'

export const VueCustomCursor = {
    install(Vue, options) {
        Vue.component("CustomCursor", CustomCursor);
    }
}