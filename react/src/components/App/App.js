/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 15:33:31
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 18:50:01
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRouter, getNoAppRouter } from '@/router/router';
import { Layout, Icon } from 'antd';
import { Cache } from '@/utils/';
import { BreadcrumbCus, MenuCus, DrawerCus, TopRightCus } from '@/components/Layout/';

const { Header, Sider, Footer, Content } = Layout;
const { LocalStorage } = Cache;
// const localStorage = new LocalStorage();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

    toggle() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
      return (
        <div>
          <Layout className="layout-style">
            {/* 抽屉盒自定义组件 */}
            <DrawerCus />
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              trigger={null}
            >
              <div className="app-title">DanR2W</div>
              {/* 菜单自定义组件 */}
              <MenuCus />
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger-icon"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle.bind(this)}
                />
                {/* 上侧导航栏右边自定义组件 */}
                <TopRightCus />
              </Header>
              <Content style={{ margin: '0 16px' }}>
                {/* 面包屑自定义组件 */}
                <BreadcrumbCus />
                <div className="content-style">
                  {getRouter()}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                DanR2W ©2018 Created by Daniel
              </Footer>
            </Layout>
          </Layout>
        </div>

      );
    }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default App;
