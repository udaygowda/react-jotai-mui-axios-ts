import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from 'App';
import { Provider } from 'jotai';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

import './styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  //<StrictMode>
  <ThemeProvider>
    <CssBaseline />
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
  //</StrictMode>
);

reportWebVitals();
