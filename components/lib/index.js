import demo from './demo/src/demo.vue';
import card from './card/src/card.vue';

const components = [demo, card];

const install = Vue => {
	// 避免重复注册
	if (install.installed) return;

	components.forEach(item => {
		Vue.component(item.name, item);
	});
};
console.lo(2)
const API1 = {
	install,
};


export default API1;
