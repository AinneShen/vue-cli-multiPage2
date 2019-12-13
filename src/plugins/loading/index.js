import loadingcom from './loading.vue'
var loading = {loadingcom}
loading.install = vue => {
    let LoadingCon = vue.extend(loadingcom)
    let ins = new LoadingCon()
    ins.$mount(document.createElement('div'))  // 挂载到一个元素上
    document.body.appendChild(ins.$el)
    vue.prototype.$loading = {
        show() {
            ins.show = true
        },
        hide() {
            ins.show = false
        }
    }
}
export default loading;
