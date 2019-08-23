/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-22 18:34:11
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 13:28:03
 */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import RootComponent from './root.component.js';

const ReactLifeCircles = singleSpaReact({
  React,
  ReactDOM,
  // 缺路由页面
  rootComponent: RootComponent,
  domElementGetter: () => document.getElementById('react-app')
});

export const bootstrap = [
  ReactLifeCircles.bootstrap
];

export const mount = [
  ReactLifeCircles.mount
];

export const unmount = [
  ReactLifeCircles.unmount
];