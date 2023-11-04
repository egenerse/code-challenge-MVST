import { Box, Typography } from '@mui/material';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface ProfileProps {
  login: string;
  name?: string;
  avatarUrl?: string;
  totalFollower?: number;
  totalFollowing?: number;
  bio?: string;
  email?: string;
  location?: string;
}

export default function Profile({
  login,
  name,
  avatarUrl,
  totalFollower,
  totalFollowing,
  bio,
  email,
  location,
}: ProfileProps) {
  const profilePicUrl =
    avatarUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUymmzhlE6KKfRnyEwaYbibNr3FYHz32sZg&usqp=CAU';
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        gap: 1,
      }}
    >
      <img src={profilePicUrl} style={{ width: '20vw', height: '20vw', minWidth: 80, minHeight: 80, maxWidth: 200, maxHeight: 200, borderRadius: 200, border: '2px solid #999', boxShadow: '5px 5px 5px #999' }} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {login && <Typography variant="h4">{login}</Typography>}
        {name && (
          <Typography variant="h5" color="GrayText">
            {name}
          </Typography>
        )}
        {bio && <Typography>{bio}</Typography>}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {(totalFollower || totalFollowing) && <PeopleOutlineOutlinedIcon style={{ color: '#000' }} />}
          {totalFollower && <Typography>{totalFollower} followers</Typography>}
          {totalFollowing && <Typography marginLeft={totalFollower && 1}>{totalFollower && '· '}{totalFollowing} following</Typography>}
        </Box>
        {location && (
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnOutlinedIcon />
            {location}
          </Typography>
        )}
        {email && (
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon />
            {email}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
