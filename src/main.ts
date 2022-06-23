import mitt from 'mitt'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'flowbite';
// import 'jszip'
// import 'pdfmake'
// import 'datatables.net-buttons-bs5/js/buttons.bootstrap5'
// import 'datatables.net-buttons-bs5/css/data'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
const app = createApp(App)
const emitter = mitt()
app.use(router)
// app.use(BootstrapVue3)
app.mount('#app')

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$http = axios;

import 'bootstrap/dist/js/bootstrap.min.js'