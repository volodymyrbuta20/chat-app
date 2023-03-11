import React from 'react';
import Flag from 'react-world-flags';

import './SelectOptionWithFlag.scss';

const SelectOptionWithFlag = ({ data, innerProps }) => (
  <div {...innerProps} className="option">
    <Flag code={data.code} className="option__flag" />
    <span className="option__country">{data.name}</span>
  </div>
);

export default SelectOptionWithFlag;
