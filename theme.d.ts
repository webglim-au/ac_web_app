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
  }
  interface PaletteOptions {
    chipColors?: {
      [key: string]: { bg: string; text: string };
    };
  }
}
