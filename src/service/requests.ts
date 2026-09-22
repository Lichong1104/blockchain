import axios from "axios";
// @ts-ignore
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { getToken } from "../auth";

// 此处的服务器地址需要改成一个可以外网访问的地址
export const serverUrl = "";
// axios.defaults.baseURL = "/api";

const instance = axios.create({
  baseURL: "", // 请求的基础地址
  timeout: 7000, // 请求超时时间
});

// Add a request interceptor
// 全局请求拦截，发起网络请求之前执行
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    NProgress.start(); // 显示loading
    // @ts-ignore
    config.headers.token = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截，网络请求返回之后执行
instance.interceptors.response.use(
  function (response) {
    NProgress.done(); // 隐藏loading
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    NProgress.done();
    // 此处需要对服务器返回的状态码做特殊处理
    console.dir(error);
    if (error.response?.status == 401) {
      window.location.href = "/#/login"; // 跳转到登录页
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 * 发起一个get请求
 * @param {*} url     地址
 * @param {*} params  url中传递的参数
 * @returns
 */
export const get = (url: string, params: any) =>
  instance
    .get(url, {
      params, // 表示url中传递的参数
    })
    .then((res) => res.data);

/**
 * 发起post请求
 * @param {*} url   地址
 * @param {*} data  数据
 * @returns
 */
export const post = (url: string, data: any) =>
  instance.post(url, data).then((res) => res.data);

/**
 * 发起put请求
 * @param {*} url   地址
 * @param {*} data  数据
 * @returns
 */
export const put = (url: string, data: any) =>
  instance.put(url, data).then((res) => res.data);

/**
 * 发起delete请求
 * @param {*} url
 * @returns
 */
export const del = (url: string) =>
  instance.delete(url).then((res) => res.data);

export default instance;
