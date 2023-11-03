import { Box, Button, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

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
        <Button variant="outlined" onClick={() => navigate('/')}>
          <Typography>Home</Typography>
        </Button>
      </Box>
      <Box sx={{ marginTop: 6, height: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
