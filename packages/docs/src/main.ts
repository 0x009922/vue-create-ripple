import { createApp } from 'vue';
import App from './App.vue';
import VCode from './components/VCode.vue';
import VA from './components/VA.vue';
import VIcon from './components/VIcon.vue';
import { I18n } from './components/I18n';
import { Ripple } from 'vue-create-ripple';
import './tailwind.css';

createApp(App)
  .component('VCode', VCode)
  .component('VA', VA)
  .component('VIcon', VIcon)
  .component('I18n', I18n)
  .directive('ripple', Ripple)
  .mount('#app')
