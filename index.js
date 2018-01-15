import Vue from 'vue';
import App from './App.vue';
import marked from 'marked'

Vue.use(marked);

const app = new Vue({
    template: `<App />`,
    components: { App }
}).$mount('#app');
