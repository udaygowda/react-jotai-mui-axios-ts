import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home = (): JSX.Element => {
  const theme = useTheme();

  const handleLogin = async (): Promise<void> => {
    console.log('Login here');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Toolbar sx={{ minHeight: '3rem!important' }}>
          <Box sx={{ display: 'flex', alignItems: 'end', flexGrow: 1 }}>
            <Typography
              data-testid="app-title"
              variant="small"
              component="div"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 100,
                fontSize: '0.75rem',
                ml: 1,
              }}
            >
              Sample App
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{ color: '#fff' }}
              onClick={handleLogin}
              data-testid="login"
            >
              login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar sx={{ minHeight: '3rem!important' }} />
        <Typography>Sample App</Typography>
      </Box>
    </Box>
  );
};
export default Home;
