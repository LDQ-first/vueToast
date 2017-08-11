# vueToast

## A mobile toast plugin for vue

## Useage

```
import VueToast from 'vueToast'

Vue.use(VueToast)

this.$toast.show("hello, toast")

this.$toast.show("hello, toast", {
    duration: 3000
}) 

this.$toast.show("hello, toast", funcion() {

})
```