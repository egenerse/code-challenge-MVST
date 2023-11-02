import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Divider, List, ListItem, Pagination, Typography } from '@mui/material';
import { Repo } from '../queries/getUserGithubInfo';
import Filter from './Filter';

interface RepositoriesProps {
  repositories: Repo[]
}

export default function Repositories({ repositories }: RepositoriesProps) {
  const { username } = useParams()

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const [shownRepositores, setShownRepositories] = useState<Repo[]>(repositories)

  const itemsPerPage = 10

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const handleShownRepositories = (repos: Repo[]) => {
    setShownRepositories(repos)
  }

  console.info("DEBUG repositories,", JSON.stringify(repositories))


  const paginatedData = shownRepositores?.slice(startIndex, endIndex);
  const paginationCount = Math.ceil((shownRepositores?.length || 0) / itemsPerPage)
  return (
    <Box sx={{ display: 'flex', flex: 8, flexDirection: 'column', flexWrap: 'wrap' }}>
      <Filter repositories={repositories} handleShownRepositories={handleShownRepositories} />
      {shownRepositores?.length === 0 ? <Typography>{username} doesn’t have any repositories that match.
      </Typography> :
        <>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {paginatedData?.map((repo, index) => (
              <Box key={repo.name}>
                <ListItem><Typography>{repo.name}</Typography></ListItem>
                {index < paginatedData.length - 1 && <Divider orientation="horizontal" flexItem />}
              </Box>
            ))}
          </List>

          {paginationCount > 1 && (
            <Pagination
              count={paginationCount}
              page={currentPage}
              onChange={handlePageChange}
            />)}
        </>
      }
    </Box>
  )
}
