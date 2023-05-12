import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'styles/App.scss';

const App = (): JSX.Element => {
  return (
    <Box className="app" data-testid="app" component="main">
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/401" element={<AccessDenied />} />
        <Route path="/403" element={<Forbidden />} /> */}
      </Routes>
    </Box>
  );
};

export default App;
