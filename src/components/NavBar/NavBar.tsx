import { Home } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

/**
 * Navigation bar component for the application.
 * It displays a home button and content outlet for routing.
 *
 * @returns A React component that renders the navigation bar.
 */
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundImage: 'linear-gradient(to bottom,  pink, white)',
        }}
      >
        <Button variant="contained" onClick={() => navigate('/')}>
          <Home />
          <Typography sx={{ color: '#fff', marginLeft: 1 }}> Home</Typography>
        </Button>
      </Box>
      <Box sx={{ marginTop: 7, height: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
