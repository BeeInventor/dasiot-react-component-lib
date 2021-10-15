import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Icon = styled(Box, { label: 'Icon' })(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
}));

export default Icon;
