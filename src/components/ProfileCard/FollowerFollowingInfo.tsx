import { Box, Typography } from '@mui/material';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { isNumber } from '@utils/typeCheck';

interface FollowerFollowingInfoProps {
  totalFollower?: number;
  totalFollowing?: number;
}

/**
 * Displays follower and following information using icons and counts.
 *
 * @param totalFollower - An optional number representing the total number of followers.
 * @param totalFollowing - An optional number representing the total number of users being followed.
 * @returns A React component that renders follower and following information with icons and counts.
 */
export default function FollowerFollowingInfo({ totalFollower, totalFollowing }: FollowerFollowingInfoProps) {
  // If both 'totalFollower' and 'totalFollowing' are not valid numbers, return null (component won't render).
  if (!isNumber(totalFollower) && !isNumber(totalFollowing)) return null;

  // Check if follower and following information is available.
  const hasFollowerInfo = isNumber(totalFollower);
  const hasFollowingInfo = isNumber(totalFollowing);

  return (
    // Render a flexbox container with icons and counts.
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <PeopleOutlineOutlinedIcon style={{ color: '#000' }} />

      {/* Render follower count if available. */}
      {hasFollowerInfo && <Typography>{totalFollower} followers</Typography>}

      {/* Render following count if available. */}
      {hasFollowingInfo && (
        <Typography marginLeft={hasFollowerInfo ? 1 : 0}>
          {hasFollowerInfo && '· '}
          {totalFollowing} following
        </Typography>
      )}
    </Box>
  );
}
