import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Repositories from '../../components/Repositories';
import { useQuery } from '@apollo/client';
import { User, getUserGithubInfo } from '../../queries/getUserGithubInfo';
import UserNotFound from '../UserNotFound';
import ErrorPage from '../ErrorPage/ErrorPage';
import Profile from '../../components/Profile';
import Loading from '../Loading';

export default function GitHubInfo() {
  const { username } = useParams()
  const { data, loading, error } = useQuery<User>(getUserGithubInfo, {
    variables: { username }
  }
  );


  const user = data?.user

  if (loading) return <Loading />;
  if (!user) return <UserNotFound />
  if (error) return <ErrorPage />

  const repositories = user?.repositories?.nodes;

  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: 'column', mx: 4 }}>
      <Typography variant='h5' color='common.black'>Welcome to GitHub Repositories for {username}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
        <Profile login={user.login} name={user?.name} avatarUrl={user?.avatarUrl} bio={user?.bio} totalFollower={user?.followers.totalCount} totalFollowing={user?.following.totalCount} email={user?.email} location={user?.location} />
        <Repositories repositories={repositories} />
      </Box>
    </Box >

  );
}

