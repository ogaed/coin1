import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './index.scss';
import App from './App.tsx';

createApp(App).use(createPinia()).mount('#app');
