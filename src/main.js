import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import router from '@/router/index.js';

import '../components/css/demo.scss';
// import demo from '../components/lib/demo/index.js';
import card from '../components/lib/card/index.js';

// Vue.component('name', Demo);/
// Vue.use(demo);
Vue.use(card);
// console.log(comArr)
// comArr.forEach(item => {
// 	Vue.use(item);
// })

import '@/styles/common.scss'; // global css
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	// store,
	// i18n,
	// template: '<App/>',
	// components: { App }
	render: h => h(App),
});
