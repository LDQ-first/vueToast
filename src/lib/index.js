import ToastComponent from './vueToast.vue'

let Toast = {}
Toast.install = (Vue, options) => {
    let opt = {
        defaultType: 'center',
        duration: 3000
    }

    for(let key in options) {
        opt[key] = options[key]
    }

    Vue.prototype.$toast = (message, option) => {
        
        let callback = ''

        if(typeof option == 'object') {
            for(let key in option) {
                opt[key] = option[key]
            }
        } else if(typeof option == 'function') {
            callback = option
        }

        const ToastController = Vue.extend(ToastComponent)
        const instance = new ToastController().$mount(document.createElement("div"))

        instance.message = message
        instance.visible = true

        document.body.appendChild(instance.$el)

        setTimeout(() => {
            instance.visible = false
            setTimeout(() => {
                document.body.removeChild(instance.$el)
                callback && callback()
            }, 500)
        }, opt.duration)
    }
    //后期扩展
    ['show', 'success', 'info', 'error'].forEach( (type) => {
        Vue.prototype.$toast[type] = (message, option) => {
            return Vue.prototype.$toast(message, option)
        }
    })
}

if(window && window.Vue) {
    Vue.use(Toast)
}
 
export default Toast