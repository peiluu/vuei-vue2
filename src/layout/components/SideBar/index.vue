<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
	<el-row class="wrapper-sidebar">
		<el-col>
			<h5>个人知识记录</h5>
			<el-menu
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
			>
				<el-submenu
					:index="`item-${index}`"
					v-for="(item, index) in menuList"
					:key="index"
				>
					<!-- 循环一级菜单 -->
					<template slot="title">
						<i :class="item.iconClass"></i>
						<span>{{ item.name }}</span>
					</template>
					<!-- 判断一级菜单下是否有二级菜单 -->
					<template v-if="item.children && item.children.length > 0">
						<!-- 循环二级菜单 -->
						<template v-for="(subItem, subIndex) in item.children">
							<!-- 判断二级菜单下是否有三级菜单 -->
							<template v-if="subItem.children && subItem.children.length > 0">
								<el-submenu :index="`subItem-${subIndex}`" :key="subIndex">
									<template slot="title">
										<i :class="subItem.iconClass"></i>
										<span>{{ subItem.name }}</span>
									</template>

									<!-- 循环三级菜单 -->
									<el-menu-item
										@click="goToPage(itm)"
										v-for="(itm, itx) in subItem.children"
										:key="itx"
									>
										<!-- <router-link :to="itm.path"> {{ itm.name }}</router-link> -->
										{ itm.name }}
									</el-menu-item>
								</el-submenu>
							</template>
							<!-- 如果二级菜单下没有三级菜单，直接跳转路由 -->
							<el-menu-item @click="goToPage(subItem)" v-else>
								{{ subItem.name }}
							</el-menu-item>
						</template>
					</template>
				</el-submenu>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
import defalutRoutes from '@/router';

export default {
	name: 'SideBar',
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		// eslint-disable-next-line no-unused-vars
		goToPage(item) {
			console.log(item);
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
