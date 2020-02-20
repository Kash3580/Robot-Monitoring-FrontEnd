import React from 'react'

import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import SideMenu from './sidemenu'

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = (props) => (
    <div>
        <h1>Main layout</h1>
         
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo"><h1>RMS</h1></div>
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 10' }}><span className='float-right'><Icon type="user" /> Login</span></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100% - 10px)' }}>
                           
            {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>RMS - Robot Management System ©2019 Developed by Icube Logics</Footer>
        </Layout>
      </Layout>
       
    </div>
)

export default MainLayout