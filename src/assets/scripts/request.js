import axios from 'axios';
import {Notification, MessageBox} from "element-ui";
import {getToken, clearToken} from './user';

let dev = 'http://127.0.0.1:8680';
let test = 'http://127.0.0.1:8680';

let common = 'http://127.0.0.1:222';

let baseurl = "";
let COMMONURL = "";

switch (process.env.NODE_ENV) {
  case 'production':
    //生产
    baseurl = dev;

    COMMONURL = common;

    break;

  case 'development':

    baseurl = test;

    COMMONURL = common;

    break;
}

const instance = axios.create({
  headers: {},
  timeout : 60000,
  baseURL: baseurl
});

instance.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  config.headers.Authorization = getToken();

  return config;
})

// 添加响应拦截器
instance.interceptors.response.use(response => {

  let responseData = response.data;
  // 如果是blob, 说明是下载文件流，此时不需要判断res.code
  // if (response.config.responseType === 'blob') return responseData;

  // 如果是blob, 说明是下载文件流，此时不需要判断res.code
  if (response.config.responseType === 'blob') {

    let dis = response.headers['content-disposition'];

    if (!dis || !dis.split(';')[1].split('=')[1]) {
      return Promise.reject(new Error('导出失败!'));
    }

    let filename =  decodeURIComponent(dis.split(';')[1].split('=')[1])

    return {responseData,filename};
  }

  let code = responseData.code;

  switch (code) {

    case 200:

      return responseData;
      break;

    case 301:

      MessageBox.alert('登陆已过期，请重新登录.', '系统提示', {
        type: 'error',
        showClose: false,
        callback: action => {
          clearToken();
          window.location.href = '/login';
        }
      });
      return Promise.reject(responseData);
      break;

    case 500:

      MessageBox.alert(responseData.msg ? responseData.msg : '无法获取', '系统提示', {
        type: 'error',
        showClose: false,
        callback: action => {
        }
      });

      return responseData;
      break;

    default:

      MessageBox.alert(responseData.msg ? responseData.msg : '无法获取', '系统提示', {
        type: 'error',
        showClose: false,
        callback: action => {
        }
      });

      return responseData;
      break;

  }

}, e => {
  return Promise.reject(e);
});

export default instance

export {baseurl, COMMONURL, dev}


















