import Vue from 'vue';
import APP from './app.vue';
import './asset/styles/global.styl'


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(APP)
}).$mount(root);
