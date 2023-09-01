import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
createApp(App).use(router).use(Toast).mount('#app');
