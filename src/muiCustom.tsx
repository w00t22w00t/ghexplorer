import { createTheme, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: number; // removes the `xs` breakpoint
    i5: number;
    mob: number;
    sm: number;
    md: number;
    tablet: number;
    smPc: number;
    pc: number;
    lg: number;
    xl: number;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      i5: 320,
      mob: 480,
      sm: 600,
      md: 768,
      tablet: 968,
      smPc: 1024,
      pc: 1268,
      lg: 1440,
      xl: 1900,
    },
  },
});


export const MyButton = styled(Button)({
  margin: 0,
  height: '4.6rem',
  fontSize: 16,
  padding: '6px 24px',
  textTransform: 'none'
});

export const MyTextField = styled(TextField)({
  margin: 0,
  height: '4.6rem',
  fontSize: 30,
  '& label.MuiFormLabel-root': {
    fontSize: 18,
    lineHeight: '18px'
  },
  '& div.MuiInputBase-root, & input.MuiInputBase-input': {
    height: '4.6rem',
    padding: 0,
    fontSize: 18,
    lineHeight: '18px'
  },
  '& div.MuiInputBase-root input': {
    paddingLeft: '20px',
  },
});