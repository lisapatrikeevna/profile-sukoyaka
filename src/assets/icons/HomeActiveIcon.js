import React from 'react';
import { SvgIcon } from '@material-ui/core';

const HomeActiveIcon = props => {
  return (
    <SvgIcon {...props}>
      <path
        d="M1 10L4 7.3M21 10L18 7.3M18 7.3L11 1L4 7.3M18 7.3V19H4V7.3"
        stroke="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="11"
          y1="1"
          x2="11"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#613BFF" />
          <stop offset="1" stopColor="#3B76FF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default HomeActiveIcon;
