import React from 'react';
import { LineLayer, MapboxScene } from '@antv/l7-react';
export const SceneMap = () => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json',
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <MapboxScene
      className="map"
      map={{
        center: [120.19382669582967, 30.258134],
        pitch: 0,
        style: 'dark',
        zoom: 14,
      }}>
      {data && [
        <LineLayer
          animate={{
            interval: 1,
            duration: 1,
            trailLength: 2,
          }}
          key={'21'}
          source={{
            data,
          }}
          color={{
            values: '#25d8b7',
          }}
          size={{
            values: 1.5,
          }}
          shape={{
            values: 'line',
          }}
          style={{
            opacity: 1,
          }}
        />,
      ]}
    </MapboxScene>
  );
};
