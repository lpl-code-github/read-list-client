/* eslint-disable no-console */
/*
 * @Author: sunxy
 * @Date: 2021-07-02 23:10:03
 * @LastEditors: sunxy
 * @LastEditTime: 2021-07-03 00:00:09
 * @Description: loading 指令
 * @FilePath: /demo1/src/loading.js
 */

import Vue from 'vue'
// loading 加载效果的组件 自定义编写
// 自定义loading
import loading from '../components/Loading.vue'

const loadDirective = {
    //被绑定元素插入父节点时调用
    inserted(el, binding) {
        const loadingCo = Vue.extend(loading)
        //console.log('loadingCo', loadingCo)
        const loadingComp = new loadingCo().$mount()
        //console.log('loadingComp', loadingComp)
        // 组件实例 挂到el元素上
        el.loadingInstance = loadingComp
        if (binding.value) {
            el.appendChild(loadingComp.$el)
        }
    },
    //所在组件的 VNode 更新时调用
    update(el, binding) {
        //当值改变
        if (binding.value !== binding.oldValue) {
            if (binding.value) { //v-loading true
                // 关闭滚动
                let m = function(e){e.preventDefault();};
                document.body.style.overflow='hidden';
                document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动s
                el.appendChild(el.loadingInstance.$el)
            } else { //v-loading false

                // 打开滚动
                let m =function(e){e.preventDefault();};
                document.body.style.overflow='';//出现滚动条
                document.removeEventListener("touchmove",m,{ passive:true });

                // 删除节点
                el.removeChild(el.loadingInstance.$el)

            }
        }
    }
}
export default loadDirective
