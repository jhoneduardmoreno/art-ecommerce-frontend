import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#7D3586",
    },
    secondary: {
      main: "#C87620",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
})

export const customTypographyStyles = {
  secondary: {
    fontFamily: '"Montserrat", sans-serif',
  },
}

export default theme
