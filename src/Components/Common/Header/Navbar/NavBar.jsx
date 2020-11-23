import React, { useState } from 'react';
import { Drawer, Button} from 'antd';
import { Logo } from '../../Logo/Logo';
import { DrawerIcon } from 'Components/Common/Icons';

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Drawer
        placement="right"
        className="navbar-drawer"
        onClose={() => setVisible(false)}
        visible={visible}>
        {menu}
      </Drawer>
      <div className="mobile-nav-items">
        <a href="/">
          <Logo />
        </a>
        <Button
          className="menu-button"
          type="primary"
          icon={<DrawerIcon />}
          onClick={() => setVisible(true)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
