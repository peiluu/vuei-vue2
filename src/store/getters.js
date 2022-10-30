const getters = {
	language: state => state.app.language,
	sidebar: state => state.app.sidebar,
	device: state => state.app.device,
	token: state => state.user.token,
	avatar: state => state.user.avatar,
	name: state => state.user.name,
	roles: state => state.user.roles,
	isLock: state => state.user.isLock,
};
export default getters;
