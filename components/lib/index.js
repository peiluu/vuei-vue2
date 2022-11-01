import demo from "./demo/src/demo.vue"
import card from "./card/src/card.vue"


const components = [demo, card]

const install = (Vue) => {
  // 避免重复注册
  if (install.installed) return;
  console.log(Vue)
  // Object.keys(components).forEach((key) => {
  //   Vue.components(components[key].name, components[key])
  // })
  components.forEach((item) => {
    Vue.component(item.name, item)
  })

}
const API = {
  install
}

export default API;