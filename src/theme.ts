import { createTheme } from '@material-ui/core/styles';

export const Color = {
  primary: {
    $80: '#FFB905',
    $100: '#E6A600',
  },
  secondary: {
    $40: '#E5E5E5',
    $60: '#A1A1A1',
    $80: '#656565',
    $100: '#3E3E3E',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: Color.primary.$100,
    },
    secondary: {
      main: Color.secondary.$100,
    },
  },
});

export default theme;
