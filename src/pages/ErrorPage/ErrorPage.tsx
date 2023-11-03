import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        flexDirection: 'column',
      }}
    >
      <Typography>Upps something went wrong, You can go to Home page for searching user</Typography>
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
