import pluginPermission from '@/plugin/permission'

export default {
  async install(Vue, options) {
    Vue.use(pluginPermission, options)
  }
}
