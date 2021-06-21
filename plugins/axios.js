// 'use strict';

// import Vue from 'vue';
// import axios from 'axios';
// import AxiosInterceptionService from '../services/axiosInterceptionService';

// // Full config:  https://github.com/axios/axios#request-config
// // axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// const axiosInterceptionService = new AxiosInterceptionService();

// let config = {
//     // TODO:-
//     //change to /api/ when moved to client app
//   baseURL: '/',
//   // timeout: 60 * 1000, // Timeout
//   // withCredentials: true, // Check cross-site Access-Control
// };

// const _axios = axios.create(config);

// _axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// _axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     axiosInterceptionService.responseInterceptor(response);
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     axiosInterceptionService.responseErrorInterceptor(error);
//     return Promise.reject(error);
//   }
// );

// // const Plugin = function(Vue) {
// //   Vue.axios = _axios;
// // //   window.axios = _axios;
// //   Object.defineProperties(Vue.prototype, {
// //     axios: {
// //       get() {
// //         return _axios;
// //       },
// //     },
// //     $axios: {
// //       get() {
// //         return _axios;
// //       },
// //     },
// //   });
// // };

// Vue.use(_axios);

// export default _axios;
