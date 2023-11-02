import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const handlePress = () => {
    navigate(`/repos/${username}`)

  }

  return (
    <Box sx={{
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'pink',
      // width: '100%',
      // height: '100%'
    }}>
      <Box sx={{
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography fontSize={'3rem'} textAlign='center'>Welcome to <Typography fontWeight='bold' fontSize={'3rem'}>Ege Nerse's</Typography> CodeChallenge for MVST</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel htmlFor='username'>Username: </InputLabel>
          <TextField sx={{ marginLeft: 1 }} id="username" value={username} onChange={(event) => setUsername(event.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handlePress();
            }
          }} />

        </Box>
        <Button variant='contained' sx={{ margin: 2 }} onClick={handlePress}
          disabled={username === ""}
        >Search Repose</Button>
      </Box >
    </Box >

  );
}
