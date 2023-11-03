import { Box, Typography } from '@mui/material'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface ProfileProps {
  login: string,
  name?: string,
  avatarUrl?: string,
  totalFollower?: number,
  totalFollowing?: number,
  bio?: string,
  email?: string
  location?: string
}

export default function Profile({ login, name, avatarUrl, totalFollower, totalFollowing, bio, email, location }: ProfileProps) {

  const profilePicUrl = avatarUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUymmzhlE6KKfRnyEwaYbibNr3FYHz32sZg&usqp=CAU"
  return (
    <Box sx={{ display: 'flex', flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, gap: 1 }} >

      <img src={profilePicUrl} style={{ width: 250, height: 250, borderRadius: 200 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {login && (<Typography variant='h4' >{login}</Typography>)}
        {name && (<Typography variant='h5' color='GrayText' >{name}</Typography>)}
        {bio && (<Typography >{bio}</Typography>)}
        <Box sx={{ display: 'flex' }}>
          {(totalFollower || totalFollowing) && (<PeopleOutlineOutlinedIcon style={{ color: '#000' }} />)}
          {totalFollower && (<Typography >{totalFollower} followers</Typography>)}
          {(totalFollower && totalFollowing) && (<Typography marginLeft={totalFollower && 1}>·</Typography>)}
          {totalFollowing && (<Typography marginLeft={totalFollower && 1} >{totalFollowing} following</Typography>)}
        </Box>
        {location && (<Typography sx={{ display: 'flex', alignItems: 'center' }}><LocationOnOutlinedIcon />{location}</Typography>)}
        {email && (<Typography sx={{ display: 'flex', alignItems: 'center' }}><EmailIcon />{email}</Typography>)}

      </Box>
    </Box>
  )
}
