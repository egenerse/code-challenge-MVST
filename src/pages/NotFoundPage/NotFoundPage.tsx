import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h2">404 - Page Not Found</Typography>
      <Typography>The requested page does not exist.</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
        }}
      >
        <Typography>Go To Home Page</Typography>
      </Button>
    </Box>
  );
}
