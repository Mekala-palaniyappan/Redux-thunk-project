import React, { Component } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class LoaderComponent extends Component {
  render() {
    return (
      <div className={'loader'}>
        <Spin indicator={antIcon} />
      </div>
    );
  }
}
export default LoaderComponent;
