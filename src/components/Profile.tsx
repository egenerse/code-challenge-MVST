import { Box, Typography } from '@mui/material'

interface ProfileProps {
  avatarUrl?: string,
  totalFollower?: number,
  totalFollowing?: number,
  bio?: string,
  email?: string
}

export default function Profile({ avatarUrl, totalFollower, totalFollowing, bio, email }: ProfileProps) {

  const profilePicUrl = avatarUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUymmzhlE6KKfRnyEwaYbibNr3FYHz32sZg&usqp=CAU"
  return (
    <Box sx={{ display: 'flex', flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, gap: 1 }} >

      <img src={profilePicUrl} style={{ width: 250, height: 250, borderRadius: 200 }} />
      {bio && (<Typography >Bio: {bio}</Typography>)}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {totalFollower && (<Typography fontSize={'1rem'}>Follower: {totalFollower}</Typography>)}
        {totalFollowing && (<Typography fontSize={'1rem'}>Following: {totalFollowing}</Typography>)}
      </Box>
      {email && (<Typography>Email: {email}</Typography>)}
    </Box>
  )
}
