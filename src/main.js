/* eslint-disable no-unused-vars */
import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import { router } from '@/router';
import store from '@/store';

import '@/styles/common.scss'; // global css
import App from './App.vue';
// import '../components/css/demo.scss';
// import card from '../components/lib/card/index.js';

// 调用自定义组件库
import 'vuipeilu/componentsdist/css/index.css';
import VuiPeilu from 'vuipeilu';

Vue.use(VuiPeilu);

// comArr.forEach(item => {
// 	Vue.use(item);
// })

new Vue({
	el: '#app',
	router,
	store,
	// template: '<App/>',
	// components: { App },
	render: h => h(App),
});
