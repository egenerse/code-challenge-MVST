import { Box, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box>
      <Typography variant="h2">404 - Page Not Found</Typography>
      <Typography>The requested page does not exist.</Typography>
      {/* You can add a link to the homepage or another relevant page here */}
    </Box>
  )
}
