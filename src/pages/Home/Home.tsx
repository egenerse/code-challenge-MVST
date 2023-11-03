import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/repos/${username}`);
  };

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography fontSize={'3rem'} textAlign="center">
          Welcome to Code Challenge for MVST
        </Typography>
        <Typography fontSize={'3rem'} textAlign="center">
          Search Github User
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel htmlFor="username">Username: </InputLabel>
          <TextField
            sx={{ marginLeft: 1 }}
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlePress();
              }
            }}
          />
        </Box>
        <Button variant="contained" sx={{ margin: 2 }} onClick={handlePress} disabled={username === ''}>
          Search
        </Button>
      </Box>
    </>
  );
}
