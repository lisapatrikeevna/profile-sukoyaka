import React from 'react';
import { SvgIcon } from '@material-ui/core';

const HomeIcon = props => {
  return (
    <SvgIcon {...props}>
      <path
        d="M1 10L4 7.3M21 10L18 7.3M18 7.3L11 1L4 7.3M18 7.3V19H4V7.3"
        stroke="#083525"
      />
    </SvgIcon>
  );
};

export default HomeIcon;
