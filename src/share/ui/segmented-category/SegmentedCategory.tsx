import { ConfigProvider, Segmented } from 'antd';
import React from 'react';

interface SegmentedCategoryProps {
  options: string[];
}

const SegmentedCategory: React.FC<SegmentedCategoryProps> = ({ options }) => (
  <ConfigProvider
    theme={{
      components: {
        Segmented: {
          trackBg: 'transparent',
          itemActiveBg: 'transparent',
          itemSelectedBg: 'transparent',
          itemHoverBg: 'transparent',
          itemColor: 'lightgray',
          itemSelectedColor: 'black',
          itemHoverColor: 'darkgray',
        },
      },
    }}
  >
    <Segmented<string>
      options={options}
      onChange={(value) => {
        console.log(value); // string
      }}
    />
  </ConfigProvider>
);

export default SegmentedCategory;
