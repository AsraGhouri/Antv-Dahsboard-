import React from 'react';
import Home from 'Components/Assets/Dashboard/mail.svg';
import Chart from 'Components/Assets/Dashboard/chart.svg';
import Vector from 'Components/Assets/Dashboard/Vector.svg';
import Message from 'Components/Assets/Dashboard/message.svg';
import Operating from 'Components/Assets/Dashboard/operating.svg';
import Support from 'Components/Assets/Dashboard/support.svg';
import Drawer from 'Components/Assets/Dashboard/drawer.svg'
export const HomeIcon = () => (
  <img src={Home} alt="Home" className="home-icon" />
);
export const ChartIcon = () => (
  <img src={Chart} alt="chart" className="chart-icon" />
);
export const VectorIcon = () => (
  <img src={Vector} alt="vector" className="vector-icon" />
);
export const MessageIcon = () => (
  <img src={Message} alt="message" className="message-icon" />
);
export const OperatingIcon = () => (
  <img src={Operating} alt="operate" className="operate-icon" />
);
export const SupportIcon = () => (
  <img src={Support} alt="support" className="support-icon" />
);
export const DrawerIcon = () => (
  <img src={Drawer} alt="drawer" className="drawer-icon" />
);
