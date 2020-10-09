//开发环境服务器地址
var baseURL = "http://ajax.frontend.itheima.net"
// 测试环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"
// 生产环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"


// 拦截所有Ajax请求: get post ajax 
//处理参数
$.ajaxPrefilter(function (options) {
    //拼接对应环境的服务器地址
    options.url = baseURL + options.url // alert(params.url)

    //为 /my/ 开头的所有的ajax 配置头信息 必须以/my/开头才行
    if (options.url.indexOf("/my/") !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

}

);