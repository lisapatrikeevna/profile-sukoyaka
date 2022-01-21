import React from 'react';
import { SvgIcon } from '@material-ui/core';

const UserIcon = props => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4.66414C14 6.87203 12.2093 8.66153 10 8.66153C7.79067 8.66153 6 6.87203 6 4.66414C6 2.45625 7.79067 0.666748 10 0.666748C12.2093 0.666748 14 2.45625 14 4.66414Z"
        stroke="#083525"
        strokeLinecap="square"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 19.3213H3.33334C3.33334 18.3745 3.33334 17.4739 3.33334 16.6583C3.33334 14.4491 5.1242 12.6589 7.33334 12.6589H12.6667C14.8758 12.6589 16.6667 14.4491 16.6667 16.6583C16.6667 17.4739 16.6667 18.3745 16.6667 19.3213Z"
        stroke="#083525"
        strokeLinecap="square"
      />
    </SvgIcon>
  );
};

export default UserIcon;
