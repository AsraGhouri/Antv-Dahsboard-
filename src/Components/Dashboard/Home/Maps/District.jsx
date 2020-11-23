import { Scene } from '@antv/l7';
import ProvinceLayer from '@antv/l7-district/lib/layer/province';
import { Mapbox } from '@antv/l7-maps';
import { Select } from 'antd';
import { ProvinceData } from 'Constants/Home';
import * as React from 'react';
const { Option } = Select;

class Province extends React.Component {
  state = {
    province: '110000',
  };
  componentWillUnmount() {
    this.scene.destroy();
  }

  async componentDidMount() {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank',
        zoom: 3,
        minZoom: 3,
        maxZoom: 10,
      }),
    });

    scene.on('loaded', () => {
      this.provinceLayer = new ProvinceLayer(scene, {
        adcode: ['230000'],
        depth: 1,
        label: {
          field: 'NAME_CHN',
          textAllowOverlap: false,
        },
        fill: {
          color: {
            field: 'NAME_CHN',
            values: [
              '#feedde',
              '#fdd0a2',
              '#fdae6b',
              '#fd8d3c',
              '#e6550d',
              '#a63603',
            ],
          },
        },
        popup: {
          enable: true,
          Html: (props) => {
            return `<span>${props.NAME_CHN}</span>`;
          },
        },
      });
    });
    this.scene = scene;
  }

  render() {
    return (
      <>
        <Select
          defaultValue="黑龙江省"
          className="district-map"
          style={{
            width: 120,
            zIndex: 2,
          }}
          onChange={this.handleProvinceChange}>
          {ProvinceData.map((province, i) => {
            return (
              <Option key={i} value={province.adcode}>
                {province.NAME_CHN}
              </Option>
            );
          })}
        </Select>
        <div
          id="map"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </>
    );
  }

  handleProvinceChange = (value) => {
    this.setState({
      province: value,
    });
    this.provinceLayer.updateDistrict([value]);
  };
}

export default Province;
