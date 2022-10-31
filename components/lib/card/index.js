// import demo from './demo/src/index.vue';
import card from './src/card.vue';
// import demo1 from './demo1/src/index.vue';
// import header1 from './header1/src/index.vue';

// const comArr = [demo, card, demo1, header1];

// 统一install
// comArr.forEach(item => {
	card.install = Vue => {
		Vue.component(card.name, card);
	};
// });
import '../../css/card.scss'


export default card;
