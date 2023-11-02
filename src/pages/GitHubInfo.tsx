import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import { useQuery } from 'urql';
import { User, getUserGithubInfo } from '../queries/getUserGithubInfo';
import UserNotFound from '../components/UserNotFound';
import ErrorPage from './ErrorPage';

export default function GitHubInfo() {
  const { username } = useParams()
  const [result] = useQuery<User>({
    query: getUserGithubInfo,
    variables: { username },
  });
  console.log("DEBUG result,", result)
  const { data, fetching, error } = result;

  const user = data?.user


  if (fetching) return <div>Loading...</div>;
  if (!user) return <UserNotFound />
  if (error) return <ErrorPage />

  const repositories = user?.repositories?.nodes;

  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: 'column', mx: 4 }}>
      <Typography variant='h5' color='common.black'>GitHub Repositories for {username}</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>

        <Profile avatarUrl={user?.avatarUrl} bio={user?.bio} totalFollower={user?.followers.totalCount} totalFollowing={user?.following.totalCount} email={user?.email} />
        {/* <Profile bio="1biooo" totalFollower={123} totalFollowing={1111} email="egenerse" /> */}
        <Repositories repositories={repositories} />
      </Box>
    </Box >

  );
}

