/* eslint-disable no-unused-vars */
import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import router from '@/router/index.js';
// import store from '@/store/index.js';
// import '../components/css/demo.scss';
// import card from '../components/lib/card/index.js';

// Vue.use(card);
// 调用自定义组件库
import 'vuipeilu/componentsdist/css/index.css';
import VuiPeilu from 'vuipeilu'
// console.log(VuiPeilu);
console.log(ElementUI);

Vue.use(VuiPeilu);

import { demo } from 'vuipeilu';

Vue.component(demo);

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
