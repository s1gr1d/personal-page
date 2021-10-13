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
    fontSize1: string;
    fontSize2: string;
    fontSize3: string;
    fontSize4: string;
  };
}
