//vue 插件必须要具备Installer函数

function Installer () {

}

Installer.Install = function(Vue) {
    console.log(Vue);
    //1.注册全局组件 2.挂载属性 

    Vue.component('test',{
        template:`
        <h1>哈哈</h1>`
    })

}

export default Installer;