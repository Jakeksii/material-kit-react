/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import ColorModeContextProvider from './context/colormode-context';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ColorModeContextProvider>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
    </ColorModeContextProvider>
  );
}
