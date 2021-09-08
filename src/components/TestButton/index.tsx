import React from 'react';
import MUI_Button, { ButtonProps } from '@material-ui/core/Button';

const TestButton = (props: ButtonProps): JSX.Element => (
  <MUI_Button {...props} />
);
export default TestButton;
