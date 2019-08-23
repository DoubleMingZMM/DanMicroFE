/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 12:05:57
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 14:49:29
 */
import 'zone.js';
import * as singleSpa from 'single-spa';
// import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    // const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];

    // react: The URL "/react/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('react', '/react', '/react/singleSpaEntry.js', null, null));

    // react: The URL "/react/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('vue', '/vue', '/vue/singleSpaEntry.js', null, null));

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

