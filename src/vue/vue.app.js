/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-22 18:34:02
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-22 19:03:15
 */
import Vue from 'vue';
import SingleSpaVue from 'single-spa-vue';

const VueLifeCircles = SingleSpaVue({
  Vue,
  // 路由和页面
});

export const bootstrap = [
  VueLifeCircles.bootstrap,
];

export const mount = [
  VueLifeCircles.mount,
];

export const unmount = [
  VueLifeCircles.unmount,
];