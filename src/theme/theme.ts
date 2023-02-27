import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
export const theme = createTheme({
    palette: {
      primary: {
        main: "#574B90",
        // dark:"#3c3464",
        // light:"#786fa6"
     },
      secondary: {
        main: "#574B90",
        // dark:"#3c3464",
        // light:"#786fa6"

      },
      common:{
        black:"#000000",
        white:"#FFFFFF"
      },
      text:{
        primary:"#212121",
      },
      success:{
        main:"#4CAF50",
        light:"#66BB6A",
        contrastText:'#fff'
      },
      error:{
        main:"#F44336",
        contrastText:'#fff'
      },
      warning:{
        main:"#FF9800",
        light:"#FFA726",
        contrastText:'#fff'

      },
      info:{
        main:"#03A9F4",
        contrastText:'#fff'

      },
      grey:{
        500:"#9E9E9E",
        A400:"#BDBDBD"
      },
    },
  });