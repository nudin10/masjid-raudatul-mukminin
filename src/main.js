import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { register } from 'swiper/element/bundle';
register();


createApp(App).mount('#app');
