/* 
    自定义的Vue插件模块
*/

(function (window) {

    // 定义插件对象
    const MyPlugin = {}

    // 插件对象必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 给Vue添加工具/静态方法
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('Vue.myGlobalMethod');
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', (el, binding) => {
            el.textContent = binding.value + '---atguigu'
        })

        // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('Vue.prototype.$myMethod');
        }
    }

    // 暴露插件
    window.MyPlugin = MyPlugin

})(window)