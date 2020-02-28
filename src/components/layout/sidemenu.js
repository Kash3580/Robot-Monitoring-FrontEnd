import React from 'react';
import {  Menu, Icon } from 'antd';
import {   Link, withRouter } from "react-router-dom";

const sidemenu = withRouter(props => {
    const { location } = props;
    return (
     
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/dashboard">
          <Icon type="dashboard" />
          <span className="nav-text">Dashboard</span>
          <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item key="/robot">
          <Icon type="robot" />
          <span className="nav-text">Robot</span>
          <Link to="/robot" />
        </Menu.Item>
        <Menu.Item key="/map">
          <Icon type="compass" />
          <span className="nav-text">Map</span>
          <Link to="/map" />
        </Menu.Item>
        <Menu.Item key="/path">
          <Icon type="bulb" />
          <span className="nav-text">Path</span>
          <Link to="/path" />
        </Menu.Item>       
      </Menu>   

    );
  });

  export default sidemenu;