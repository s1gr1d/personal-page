import { white } from './colors';
import { primaryFont, secondaryFont } from './typography';
import { Theme } from '../../lib/types';

export const darkTheme: Theme = {
  name: 'darkTheme',
  colors: {
    background: '#092019',
    text: white[200],
    textDark: white[300],
    accent: '#D1BD19',
  },
  typography: {
    primaryFont: primaryFont,
    secondaryFont: secondaryFont,
    fontSize1: '0.8125rem',
    fontSize2: '1rem',
    fontSize3: '1.25rem',
    fontSize4: '1.625rem',
  },
};
