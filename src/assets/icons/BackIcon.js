import React from 'react';
import { SvgIcon } from '@material-ui/core';

const BackIcon = props => {
  return (
    <SvgIcon {...props}>
      {/* <g fill="none" fill-rule="evenodd">
      <path
        d="M16.25 19.5L10 13.25L16.25 7"
        stroke="#083525"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      </g> */}
{/* <svg  width="40" height="40" viewBox="0 0 40 40" fill="none"> */}
<rect width="40" height="40" rx="6" fill="white"/>
<rect x="0.25" y="0.25" width="39.5" height="39.5" rx="5.75" stroke="#083525" stroke-opacity="0.5" stroke-width="0.5"/>
<path d="M23.25 26.5L17 20.25L23.25 14" stroke="#083525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
{/* </svg> */}

    </SvgIcon>
  );
};

export default BackIcon;
