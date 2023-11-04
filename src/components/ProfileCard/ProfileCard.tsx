import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FollowerFollowingInfo from './FollowerFollowingInfo';

interface ProfileCardProps {
  login: string;
  name?: string;
  avatarUrl?: string;
  totalFollower?: number;
  totalFollowing?: number;
  bio?: string;
  email?: string;
  location?: string;
}

export default function ProfileCard({
  login,
  name,
  avatarUrl,
  totalFollower,
  totalFollowing,
  bio,
  email,
  location,
}: ProfileCardProps) {
  const profilePicUrl =
    avatarUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUymmzhlE6KKfRnyEwaYbibNr3FYHz32sZg&usqp=CAU';
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        gap: 1,

      }}
    >
      <img
        src={profilePicUrl}
        style={{
          width: '20vw',
          height: '20vw',
          minWidth: 160,
          minHeight: 160,
          maxWidth: 200,
          maxHeight: 200,
          borderRadius: 200,
          border: '2px solid #999',
          boxShadow: '5px 5px 5px #999',
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {login && <Typography variant="h4">{login}</Typography>}
        {name && (
          <Typography variant="h5" color="GrayText">
            {name}
          </Typography>
        )}
        {bio && <Typography>{bio}</Typography>}
        <FollowerFollowingInfo totalFollower={totalFollower} totalFollowing={totalFollowing} />
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
