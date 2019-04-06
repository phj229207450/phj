import Vue from 'vue'
import App from './App.vue'

//全局引入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//按需要导入，使代码体积变小
// import { Button } from 'mint-ui'
// Vue.component(Button.name,Button)

import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//导入mui模板样式
import './lib/mui/css/mui.css'
const vm=new Vue({
    el:'#app',
    render:function (createElement){
        return createElement(App)
    }
})