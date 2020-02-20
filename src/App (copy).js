import React from 'react';
import './App.css';
import Dashboard from './components/pages/dashboard';

import Path from './components/pages/path';
import Robot from './components/pages/robot';
import LocationMaps from './components/pages/location-maps';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import SideMenu from './components/layout/sidemenu'
import pageLogin from './components/pages/pageLogin'
import signup from './components/pages/signup';

import  LoginForm  from './components/pages/LoginForm'
const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  
  render() {
    return (
      <Router>
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
                           
              <Route exact path="/" component={Dashboard} />                                
              <Route path="/path" component={Path} />
              <Route path="/robot" component={Robot} />
              <Route path="/location-maps" component={LocationMaps} />
              <Route   path="/login" component={pageLogin} />    
              <Route   path="/signup" component={signup} />   
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>RMS - Robot Management System ©2019 Developed by Icube Logics</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App; 


