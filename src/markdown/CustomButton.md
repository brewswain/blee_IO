```
import React from 'react';

import './CustomButton.style.scss';

const CustomButton = ({ children, large, ...otherProps }) => (
  <button
    className={`${large ? 'custom__button--large' : ''} custom__button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
```
