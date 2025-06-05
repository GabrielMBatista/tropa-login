import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      grayLight: string;
      grayMedium: string;
      grayDark: string;
      divider: string;
      focusRing: string;
      shadow: string;
      statusActive: string;
      text: string;
      background: string;
    };
    font: {
      family: string;
      size: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        title: string;
      };
      weight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
      lineHeight: {
        tight: string;
        base: string;
      };
    };
    spacing: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      full: string;
      md: string;
      sm: string;
      rounded: string;
      lg: string;
    };
    layout: {
      contentWidth: string;
      contentHeight: string;
    };
  }
}
