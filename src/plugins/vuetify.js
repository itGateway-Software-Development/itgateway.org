// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Custom theme properties
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#242142",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#ff5722",
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: "#F2F3F4",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#00ccff",
    error: "#ffcc00",
  },
};

export default createVuetify(
  {
    theme: {
      defaultTheme: "customDarkTheme",
      themes: {
        customDarkTheme,
        customLightTheme,
      },
    },
  }
);
