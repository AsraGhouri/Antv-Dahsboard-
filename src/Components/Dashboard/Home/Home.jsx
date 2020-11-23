import { Col, Row } from 'antd';
import Province from 'Components/Dashboard/Home/Maps/District';
import React from 'react';
import { SceneMap } from './Maps/Scene';
export const Home = () => {
  return (
    <div className="container">
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <SceneMap />
        </Col>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Province />
        </Col>
      </Row>
    </div>
  );
};
