import React from 'react';
import { Layout, Menu } from 'antd';
import NavBar from './Navbar/NavBar';
import SideBar from './Sidebar/SideBar';
import { Home } from 'Components/Dashboard/Home/Home';
import { Link, Route } from 'react-router-dom';
import {
  ChartIcon,
  HomeIcon,
  MessageIcon,
  OperatingIcon,
  SupportIcon,
  VectorIcon,
} from 'Components/Common/Icons';
import SubMenu from 'antd/lib/menu/SubMenu';

function SiderDemo() {
  const menu = (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1', 'sub2']}>
      <Menu.Item key="1">
        <HomeIcon />
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <ChartIcon />
            <span>Smove.City Bike Data Analytics</span>
          </span>
        }>
        <Menu.Item key="2">List View</Menu.Item>
        <Menu.Item key="3">Map View</Menu.Item>
        <Menu.Item key="4">Analytics</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <VectorIcon />
            <span>Smove.City Data Visualisation</span>
          </span>
        }>
        <Menu.ItemGroup key="5" title="Historical Data Visualisation">
          <Menu.Item key="6">Animated Trips</Menu.Item>
          <Menu.Item key="7">Density</Menu.Item>
          <Menu.Item key="8">Heat Map</Menu.Item>
          <Menu.Item key="9">District</Menu.Item>
          <Menu.Item key="10">Transit Data</Menu.Item>
          <Menu.Item key="11">Shared Mobility Data</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="12" title="Real Time Data Visualization">
          <Menu.Item key="13">Live Map</Menu.Item>
          <Menu.Item key="14">
            <OperatingIcon />
            Operating Location
          </Menu.Item>
          <Menu.Item key="15">Geo Fence</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="16">
        <MessageIcon />
        <span>Message</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="17">
        <SupportIcon />
        <span>Support</span>
        <Link to="/" />
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <NavBar menu={menu} />
      <Layout className="Home-layout">
        <SideBar menu={menu} />
        <Layout.Content className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/meseros" component={Home} />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default SiderDemo;
