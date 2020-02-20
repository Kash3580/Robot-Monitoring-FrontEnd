import React from 'react';
import '../../App.css';
 
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import SideMenu from '../layout/sidemenu'
 
 
const { Header, Content, Footer, Sider } = Layout;


class Home extends React.Component {
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
     <div></div>
     
    );
  }
}

export default Home; 


