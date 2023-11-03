import { ChangeEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Divider, List, ListItem, Pagination, Typography } from '@mui/material';
import { Repo } from '../../queries/getUserGithubInfo';
import Filter from '../Filter';

interface RepositoriesProps {
  repositories: Repo[];
}

const itemsPerPageInPagination = 10;

export default function Repositories({ repositories }: RepositoriesProps) {
  const { username } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [allFilteredRepositories, setAllFilteredRepositories] = useState<Repo[]>(repositories);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPageInPagination;
  const endIndex = startIndex + itemsPerPageInPagination;

  const handleShownRepositories = (repos: Repo[]) => {
    setAllFilteredRepositories(repos);
    setCurrentPage(1);
  };

  const paginatedData = allFilteredRepositories?.slice(startIndex, endIndex);
  const paginationCount = Math.ceil((allFilteredRepositories?.length || 0) / itemsPerPageInPagination);

  return (
    <Box sx={{ display: 'flex', flex: 8, flexDirection: 'column', flexWrap: 'wrap' }}>
      <Filter repositories={repositories} handleShownRepositories={handleShownRepositories} />
      {allFilteredRepositories?.length === 0 ? (
        <Typography>{username} doesn’t have any repositories that match.</Typography>
      ) : (
        <>
          {paginationCount > 1 && <Pagination count={paginationCount} page={currentPage} onChange={handlePageChange} />}
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {paginatedData?.map((repo, index) => (
              <Box key={repo.name}>
                <ListItem
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                >
                  <Link to={`${repo.url}`} target="_blank">
                    {repo.name}
                  </Link>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {repo.languages.nodes.map((language) => (
                      <Typography key={`${repo.name}-${language.name}`}>⏺ {language.name}</Typography>
                    ))}
                  </Box>
                </ListItem>
                {index < paginatedData.length - 1 && <Divider orientation="horizontal" flexItem />}
              </Box>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
