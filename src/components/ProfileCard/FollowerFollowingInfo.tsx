import { Box, Typography } from '@mui/material';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { isNumber } from '@utils/typeCheck';

interface FollowerFollowingInfoProps {
  totalFollower?: number;
  totalFollowing?: number;
}

export default function FollowerFollowingInfo({ totalFollower, totalFollowing }: FollowerFollowingInfoProps) {
  if (!isNumber(totalFollower) && !isNumber(totalFollowing)) return null;

  const hasFollowerInfo = isNumber(totalFollower);
  const hasFollowingInfo = isNumber(totalFollowing);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <PeopleOutlineOutlinedIcon style={{ color: '#000' }} />
      {hasFollowerInfo && <Typography>{totalFollower} followers</Typography>}
      {hasFollowingInfo && (
        <Typography marginLeft={hasFollowerInfo ? 1 : 0}>
          {hasFollowerInfo && '· '}
          {totalFollowing} following
        </Typography>
      )}
    </Box>
  );
}
