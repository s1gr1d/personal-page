export interface Theme {
  name: string;
  colors: {
    background: string;
    text: string;
    textDark: string;
    accent: string;
  };
  typography: {
    primaryFont: string;
    secondaryFont: string;
  };
}
