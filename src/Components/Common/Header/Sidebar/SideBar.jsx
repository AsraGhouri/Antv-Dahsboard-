import React from 'react';
import { Layout } from 'antd';

const SideBar = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      width={'250'}
      trigger={null}>
      {menu}
    </Layout.Sider>
  );
};

export default SideBar;
