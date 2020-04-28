import {DefaultTheme} from "./default-theme";

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#31404e`,
    linkColor: `#31404e`,
    //col a4cbb8
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `340px`,
      background: `linear-gradient(-45deg, #44646e, #31404e) repeat scroll 0 0 transparent`,
      // 44596e a4cbb8
      //8cada7
    },
  },
};

export default Theme;
