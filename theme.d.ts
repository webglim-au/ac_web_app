// src/theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    tertiary: string;
    lighterGrey: string;
  }

  interface Palette {
    chipColors: {
      [key: string]: { bg: string; text: string };
    };
    customDivider: {
      grey: string;
      default: string;
    };
  }

  interface PaletteOptions {
    chipColors?: {
      [key: string]: { bg: string; text: string };
    };
    customDivider?: {
      grey: string;
      default: string;
    };
  }
}
