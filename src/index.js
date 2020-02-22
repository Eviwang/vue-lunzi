import Vue from 'vue';
import Button from './button.vue';
import App from './App.vue';
Vue.component('g-button', Button);

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  }
});
