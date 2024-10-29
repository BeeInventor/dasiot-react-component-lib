import React from 'react';
import {
  Switch as MuiSwitch,
  styled,
} from '@mui/material';

const SwitchComponent = styled(MuiSwitch)`
  &.MuiSwitch-root {
    width: 40px;
    padding: 11px 2px;
  }
  & .MuiSwitch-switchBase {
    top: 8px;
    padding: 6.5px;
    &.Mui-checked {
      transform: translateX(16px);
      & + .MuiSwitch-track {
        opacity: 1;
      }
      & .MuiSwitch-thumb {
        background-color: #fff;
      }
    }
  }
  & .MuiSwitch-track {
    width: 38px;
    height: 20px;
    border-radius: 10px;
  }
  & .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
    border-radius: 6;
  }
`;

export default SwitchComponent;
