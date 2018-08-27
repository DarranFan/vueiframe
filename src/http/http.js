'usr strict'
import axios from 'axios';
import { Message ,Loading } from 'element-ui';
var instance = axios.create({
    baseURL: process.env.DOMAIN,
    timeout: 1000
  });
  console.log(instance)
// 发送请求之前把数据json化
  instance.defaults.transformRequest = [function (data) {
    return JSON.stringify(data);
  }]
  instance.defaults.validateStatus = function(status){
      return true;
  }
    // 设置token
  // instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  //请求之前添加拦截器
  // 定义变量来接收loading的返回值 用来关闭该loading
  let loadingInstance ;
  instance.interceptors.request.use(config=>{
    // 下面操作的是DOM 在APP.vue下引入cass样式 、html代码
    // document.getElementById('loading_panel').style.display = 'block';

    // 下面用的element-ui的loading组件
    loadingInstance = Loading.service({
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config
  },err=>{
      return Promise.reject(err)
  })

//   添加相应拦截器
instance.interceptors.response.use(res=>{
    // document.getElementById('loading_panel').style.display = 'none';
    loadingInstance.close();
    if(res.status == 200){
        return Promise.resolve(res)
    }else{
        return Promise.reject(res)
    }
},err=>{
    return Promise.reject(err)
})

let requestMethod = ['get', 'post', 'delete', 'put', 'patch', 'update']
let requester = {}
requestMethod.forEach((method) => {
  requester[method] = function (url = '', data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config).then((response) => {
        console.log(url)
        if(response.status == 200){
          Message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
           return resolve(response.data)
        }else{
          reject(respose)
          return  false
        }
      }).catch((response) => {
          return reject(response)
      })
    })
  }
})

export default requester;
