import React from 'react';
import { SvgIcon } from '@material-ui/core';

const SettingsIcon = props => {
  return (
    <SvgIcon {...props}>
      <path
        d="M16.0312 9.95128V9.50003V9.04284L17.1712 8.04534C17.3814 7.86012 17.5193 7.60657 17.5606 7.32952C17.6019 7.05246 17.5439 6.76972 17.3969 6.53128L15.9956 4.15628C15.8915 3.97593 15.7418 3.82614 15.5615 3.72193C15.3812 3.61771 15.1767 3.56274 14.9684 3.56253C14.8394 3.56154 14.711 3.58159 14.5884 3.6219L13.1456 4.10878C12.8965 3.94324 12.6367 3.79448 12.3678 3.66347L12.065 2.16722C12.0107 1.89386 11.862 1.6483 11.6449 1.47354C11.4278 1.29878 11.1561 1.20594 10.8775 1.21128H8.09875C7.8201 1.20594 7.54845 1.29878 7.33135 1.47354C7.11426 1.6483 6.96554 1.89386 6.91125 2.16722L6.60844 3.66347C6.33765 3.79445 6.07582 3.94321 5.82469 4.10878L4.41156 3.59815C4.28764 3.56587 4.15932 3.55384 4.03156 3.56253C3.82332 3.56274 3.61879 3.61771 3.4385 3.72193C3.25821 3.82614 3.10849 3.97593 3.00437 4.15628L1.60312 6.53128C1.46453 6.76936 1.41303 7.04823 1.45745 7.32011C1.50186 7.59199 1.63941 7.83998 1.84656 8.02159L2.96875 9.04878V9.95722L1.84656 10.9547C1.63356 11.1376 1.49224 11.39 1.44768 11.6672C1.40311 11.9444 1.45819 12.2284 1.60312 12.4688L3.00437 14.8438C3.10849 15.0241 3.25821 15.1739 3.4385 15.2781C3.61879 15.3823 3.82332 15.4373 4.03156 15.4375C4.16061 15.4385 4.28896 15.4185 4.41156 15.3782L5.85437 14.8913C6.10347 15.0568 6.36332 15.2056 6.63218 15.3366L6.935 16.8328C6.98929 17.1062 7.13801 17.3518 7.3551 17.5265C7.5722 17.7013 7.84385 17.7941 8.1225 17.7888H10.925C11.2036 17.7941 11.4753 17.7013 11.6924 17.5265C11.9095 17.3518 12.0582 17.1062 12.1125 16.8328L12.4153 15.3366C12.6861 15.2056 12.9479 15.0568 13.1991 14.8913L14.6359 15.3782C14.7585 15.4185 14.8869 15.4385 15.0159 15.4375C15.2242 15.4373 15.4287 15.3823 15.609 15.2781C15.7893 15.1739 15.939 15.0241 16.0431 14.8438L17.3969 12.4688C17.5355 12.2307 17.587 11.9518 17.5425 11.6799C17.4981 11.4081 17.3606 11.1601 17.1534 10.9785L16.0312 9.95128ZM14.9684 14.25L12.9319 13.5613C12.4551 13.9651 11.9103 14.2808 11.3228 14.4935L10.9012 16.625H8.09875L7.67719 14.5172C7.09437 14.2985 6.55245 13.9833 6.07406 13.585L4.03156 14.25L2.63031 11.875L4.24531 10.45C4.13552 9.83541 4.13552 9.20621 4.24531 8.59159L2.63031 7.12503L4.03156 4.75003L6.06812 5.43878C6.54487 5.03496 7.08973 4.7193 7.67719 4.50659L8.09875 2.37503H10.9012L11.3228 4.48284C11.9056 4.70159 12.4475 5.01671 12.9259 5.41503L14.9684 4.75003L16.3697 7.12503L14.7547 8.55003C14.8645 9.16464 14.8645 9.79385 14.7547 10.4085L16.3697 11.875L14.9684 14.25Z"
        fill="#083525"
      />
      <path
        d="M9.50508 12.5625L9.50508 12.5625H9.5C8.8943 12.5625 8.30219 12.3829 7.79857 12.0464C7.29494 11.7099 6.90241 11.2316 6.67062 10.672C6.43883 10.1124 6.37818 9.4966 6.49635 8.90254C6.61451 8.30847 6.90619 7.76278 7.33449 7.33449C7.76278 6.90619 8.30847 6.61451 8.90254 6.49635C9.4966 6.37818 10.1124 6.43883 10.672 6.67062C11.2316 6.90241 11.7099 7.29494 12.0464 7.79857C12.3829 8.30219 12.5625 8.8943 12.5625 9.5H12.5625L12.5625 9.50508C12.5666 9.90772 12.4903 10.3071 12.3381 10.6799C12.1859 11.0527 11.9609 11.3914 11.6761 11.6761C11.3914 11.9609 11.0527 12.1859 10.6799 12.3381C10.3071 12.4903 9.90772 12.5666 9.50508 12.5625ZM9.5 6.62489C9.12244 6.61765 8.74722 6.68628 8.3966 6.82675C8.04237 6.96867 7.72062 7.18096 7.45079 7.45079C7.18096 7.72062 6.96867 8.04237 6.82675 8.3966C6.68628 8.74722 6.61765 9.12244 6.62489 9.5C6.61765 9.87756 6.68628 10.2528 6.82675 10.6034C6.96867 10.9576 7.18096 11.2794 7.45079 11.5492C7.72062 11.819 8.04237 12.0313 8.3966 12.1732C8.74722 12.3137 9.12244 12.3823 9.5 12.3751C9.87756 12.3823 10.2528 12.3137 10.6034 12.1732C10.9576 12.0313 11.2794 11.819 11.5492 11.5492C11.819 11.2794 12.0313 10.9576 12.1732 10.6034C12.3137 10.2528 12.3823 9.87756 12.3751 9.5C12.3823 9.12244 12.3137 8.74722 12.1732 8.3966C12.0313 8.04237 11.819 7.72062 11.5492 7.45079C11.2794 7.18096 10.9576 6.96867 10.6034 6.82675C10.2528 6.68628 9.87756 6.61765 9.5 6.62489Z"
        stroke="#083525"
      />
    </SvgIcon>
  );
};

export default SettingsIcon;