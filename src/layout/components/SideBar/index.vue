<template>
	<el-row class="wrapper-sidebar">
		<el-col>
			<h5>个人知识记录</h5>

			<el-menu
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
			>
				<!-- 循环一级菜单 -->
				<template v-for="(item, index) in menuList">
					<!-- 判断一级菜单下是否有二级菜单 -->
					<template v-if="item.children && item.children.length > 0">
						<el-submenu :index="`item-${index}`" :key="index">
							<template slot="title">
								<i :class="item.iconClass"></i>
								<span>{{ item.title }}</span>
							</template>

							<!-- 循环二级菜单 -->
							<template v-for="(subItem, subIndex) in item.children">
								<!-- 判断二级菜单下是否有三级菜单 -->
								<template
									v-if="subItem.children && subItem.children.length > 0"
								>
									<el-submenu :index="`subItem-${subIndex}`" :key="subIndex">
										<template slot="title">
											<i :class="subItem.iconClass"></i>
											<span>{{ subItem.title }}</span>
										</template>

										<!-- 循环三级菜单 -->
										<el-menu-item
											@click="goToPage(itm)"
											v-for="(itm, itx) in subItem.children"
											:key="itx"
										>
											<!-- <router-link :to="itm.path"> {{ itm.title }}</router-link> -->
											{{ itm.title }}
										</el-menu-item>
									</el-submenu>
								</template>
								<!-- 如果二级菜单下没有三级菜单，直接跳转路由 -->
								<el-menu-item @click="goToPage(subItem)" v-else :key="subIndex">
									{{ subItem.title }}
								</el-menu-item>
							</template>
						</el-submenu>
					</template>

					<el-menu-item @click="goToPage(item)" v-else :key="index">
						{{ item.title }}
					</el-menu-item>
				</template>
			</el-menu>
		</el-col>
	</el-row>
</template>
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable-next-line no-unused-vars -->

<script>
import { defalutRoutes } from '@/router';

export default {
	title: 'SideBar',
	methods: {
		handleOpen(key, keyPath) {
			// console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			// console.log(key, keyPath);
		},

		goToPage(item) {
			// 防止跳转相同的路由
			if (item.path === this.$route.path) return;
			this.$router.push(item.path);
		},
	},
	computed: {
		menuList() {
			return defalutRoutes;
		},
	},
};
</script>
<style lang="scss">
.wrapper-sidebar {
	flex-basis: 12%;
	h5 {
		text-align: center;
	}
}
</style>
