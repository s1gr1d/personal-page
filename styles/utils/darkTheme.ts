import { black, white, gold } from "./colors";
import { primaryFont, secondaryFont } from "./typography";
import { Theme } from "../../lib/types";

export const darkTheme: Theme = {
  name: "darkTheme",
  colors: {
    background: black[300],
    text: white[200],
    accent: gold[200],
  },
  typography: {
    primaryFont: primaryFont,
    secondaryFont: secondaryFont,
  },
};
