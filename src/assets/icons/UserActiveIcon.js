import React from 'react';
import { SvgIcon } from '@material-ui/core';

const UserActiveIcon = props => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4.6639C14 6.87179 12.2094 8.66129 10 8.66129C7.79071 8.66129 6.00004 6.87179 6.00004 4.6639C6.00004 2.456 7.79071 0.666504 10 0.666504C12.2094 0.666504 14 2.456 14 4.6639Z"
        stroke="url(#paint0_linear)"
        strokeLinecap="square"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 19.321H3.33337C3.33337 18.3743 3.33337 17.4736 3.33337 16.658C3.33337 14.4489 5.12424 12.6587 7.33337 12.6587H12.6667C14.8758 12.6587 16.6667 14.4489 16.6667 16.658C16.6667 17.4736 16.6667 18.3743 16.6667 19.321Z"
        stroke="url(#paint1_linear)"
        strokeLinecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="10"
          y1="0.666504"
          x2="10"
          y2="19.321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#613BFF" />
          <stop offset="1" stopColor="#3B76FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="10"
          y1="0.666504"
          x2="10"
          y2="19.321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#613BFF" />
          <stop offset="1" stopColor="#3B76FF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default UserActiveIcon;
