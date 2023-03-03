<template>
	<div>
		<h2>ES6其他特性</h2>
		<ul>
			<li>模板字符串</li>
			{{
				str
			}}
		</ul>
	</div>
</template>

<script>
export default {
	name: 'other',
	components: {},
	data() {
		return {
			// 定义变量的函数zhi
			obj: {
				get() {},
			},
		};
	},

	computed: {
		str() {
			return `di`;
			// return `${a	}`;
		},
	},
	mounted() {
		// window.name = 111;
		// // 箭头函数无法使用arguments
		// const fun = (a, ...rest) => {
		// 	console.log(rest); // 数组
		// 	console.log(arguments); // 对象
		// 	console.log(arguments); // 对象
		// };
		// const obj = {
		// 	name: 222,
		// };
		// fun([2], 22, 111);
		// // 当i = 2时，i++之后为3，不满足条件，不会进入for循环，但是自增的操作还是执行
		// for (var i = 0; i < 3; i++) {
		// 	console.log(i);
		// 	// debugger;
		// }
		// console.log(i); //
		// this.getObj();
		// this.dealObj();
		this.dealArr();
	},
	methods: {
		getObj() {
			const game = {
				id: Symbol(1),
				up() {
					console.log('up');
				},
				// down() {
				// 	console.log('down');
				// },
				[Symbol('say')]: function () {
					console.log('Symbol say');
				},
			};
			const methods = {
				up: Symbol(),
				down: Symbol(),
			};
			const down = Symbol();
			game.up = () => {
				console.log('new up');
			};
			game[methods.up] = () => {
				console.log('Symbol new up');
			};
			game.down = () => {
				console.log('Symbol new down');
			};
			console.log(game);
			console.log(game.id);
			game.up();
			game['down']();
			// game['say']();

			const mySymbol = Symbol();
			const a = {
				mySymbol() {
					console.log('Symbol mySymbol');
				},
			};

			// a.mySymbol = function () {
			// 	console.log('Symbol new mySymbol');
			// };
			a[mySymbol]; // undefined
			a['mySymbol']; // "Hello!"
			console.log(a['mySymbol']);
			a['mySymbol']();
		},
		// 数据格式互相转化，对象转map
		dealObj() {
			const obj = {
				name: 'anna',
				age: 18,
			};
			const arr = Object.entries(obj);
			console.log(arr);
			// 数组扁平化
			const flatArr = arr.flat(2);

			// Object.formEntries是Object.entries的逆向操作，将二维数组转化成对象
			// const formEntries = Object.formEntries(arr);
			// console.log(formEntries);

			const map = new Map(arr);
			console.log(map);
			console.log(map.get('name'));
			console.log(Object.getOwnPropertyDescriptor(obj));
			// 动态导入，需要的时候再导入，优化加载速度
			import('@/config').then(module => {
				console.log(module);
			});
			// globalThis 决定全局对象，无关环境（node或者是浏览器），始终指向全局对象
			console.log(globalThis);
			console.log(global);
			Window.a = 1;
			console.log(Window);
			console.log(Window.a);
		},
		// 处理数组
		dealArr() {
			const arr = [{ text: 1 }, { text: 2 }, { text: 2 }];
			// Array.from一步到位直接处理伪数组，并对每个元素进行处理，第二个参数是回调函数
			// 可以替换
			console.log(Array.from(arr, ele => ele.text));
			// Array.of 将一组值直接转化到数组中
			console.log(Array.of(1, [1], false, { text: 1 }));
			// 1. 数组去重
			const arr1 = [1, 2, 3, 4, 4, 5];
			const arr2 = [4, 4, 5];
			console.log([...new Set(arr1)]);
			console.log(arr1);
			// 2. 交集
			const result = [...new Set(arr1)].filter(item => new Set(arr2).has(item));
			console.log(result);
			// 3. 并集
			const result1 = [...new Set([...arr1, ...arr2])];
			console.log(result1);

			// 4. 差集, 只在目标数组中的元素的集合
			const result3 = [...new Set(arr1)].filter(
				item => !new Set(arr2).has(item)
			);
			console.log(result3);
		},
	},
};
</script>

<style lang="scss"></style>
