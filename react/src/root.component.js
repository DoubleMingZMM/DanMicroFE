/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 13:25:05
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 18:26:56
 */
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from '@/components/App/App';
import { HashRouter } from 'react-router-dom';
// import React from 'react';
// import ReactDom from 'react-dom';
import store from './redux/store';
// 自定义全局样式.包括引入了重置样式、iconfont样式、antd样式（不需要引入）
import './styles/index.less';

export default class Root extends React.Component {
    render() {
        return (
          <AppContainer>
            <Provider store={store}>
              <HashRouter>
                <App />
              </HashRouter>
            </Provider>
          </AppContainer>
        );
    }
}


// export default function renderWithHotReload(RootElement) {
//   return (
    
//   );
// }

// /* 初始化 */
// renderWithHotReload(App);

/* 热更新 */
// if (module.hot) {
//   module.hot.accept('@/components/App/App', () => {
//     const NextApp = require('@/components/App/App').default;
//     renderWithHotReload(NextApp);
//   });
// }

