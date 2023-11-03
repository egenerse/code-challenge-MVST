import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserNotFound() {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', height: '100vh', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography>Your search did not match any User.</Typography>
      <Typography>You could try to search with another username</Typography>
      <Button variant="contained" onClick={() => {
        navigate('/')
      }}><Typography color='#fff'>Go To Home Page</Typography></Button>
    </Box>
  )
}
