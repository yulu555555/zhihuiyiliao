import router from '@/router';
import axios from 'axios'
import { Message } from 'element-ui';

// 创建一个axios对象出来
const request = axios.create({
  baseURL: 'http://localhost:8081',//后台的端口号
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8';

  // config.headers['token'] = user.token;  // 设置请求头
  return config
}, error => {
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
    // response.data即为后端返回的Result
    let res = response.data;
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res;
  },
  error => {
    if(error.response.status == '401'){
      Message.error("请登陆后重试")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      router.go("/")
    }
    return Promise.reject(error)
  }
)
request.interceptors.request.use(
  request =>{
    request.headers.Authorization = localStorage.getItem("token")
    return request
  },
  error =>{
    return Promise.reject(error)
  }
)


export default request
