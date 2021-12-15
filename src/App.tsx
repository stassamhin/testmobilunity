import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Books from "pages/Books/books";

const THEME = createTheme({
    palette: {
        primary: {
            main: "#1D7874",
        },
    },
});

function App() {

  return (
      <BrowserRouter>
          <ThemeProvider theme={THEME}>
              <Routes>
                  <Route path="/" element={<Books />} />
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
