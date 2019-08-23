/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-22 18:34:11
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 15:09:10
 */
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

const VueLifeCircles = singleSpaVue({
  Vue,
  // 缺路由页面
  appOptions: {
    el: '#vue-app',
    render: h => h(App)
  }
});

export const bootstrap = [
  VueLifeCircles.bootstrap
];

export const mount = [
  VueLifeCircles.mount
];

export const unmount = [
  VueLifeCircles.unmount
];