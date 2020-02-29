/* eslint-disable react/button-has-type */
import React from 'react';

const ButtonCollection = ({ filterList }) => (
  <div style={{ margin: '30px' }}>
    <div>
      <button
        className='leftButton'
        style={{
          background: '#D3D3D3',
        }}
        onClick={filterList}
        value='today'
      >
        오늘
      </button>
      <button
        className='rightButton'
        style={{
          background: '#D3D3D3',
        }}
        onClick={filterList}
        value='tomorrow'
      >
        내일
      </button>
    </div>
    <div style={{ top: '15px' }}>
      <button
        className='leftButton'
        style={{
          background: '#D3D3D3',
        }}
        onClick={filterList}
        value='all'
      >
        전체
      </button>
      <button
        className='rightButton'
        style={{
          background: '#D3D3D3',
        }}
        onClick={filterList}
        value='bookmark'
      >
        깃발 표시됨
      </button>
    </div>
  </div>
);

export default ButtonCollection;
