import { ChangeEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Divider, List, ListItem, Pagination, Typography } from '@mui/material';
import { Repo } from '@graphql/queries/getUserGithubInfo';
import Filter from '@components/Filter';
import { itemsPerPageInPagination } from '@common/constants';

interface RepositoriesProps {
  repositories: Repo[];
}

/**
 * Displays a list of repositories with pagination and filtering options.
 *
 * @param repositories - An array of Repo objects representing the user's repositories.
 * @returns A React component that renders a list of repositories, pagination, and filtering options.
 */
export default function Repositories({ repositories }: RepositoriesProps) {
  // Get the username from the route parameters.
  const { username } = useParams();

  // State variables to manage current page and filtered repositories.
  const [currentPage, setCurrentPage] = useState(1);
  const [allFilteredRepositories, setAllFilteredRepositories] = useState<Repo[]>(repositories);

  // Function to handle page change in the pagination component.
  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Calculate the start and end index for the current page.
  const startIndex = (currentPage - 1) * itemsPerPageInPagination;
  const endIndex = startIndex + itemsPerPageInPagination;

  // Function to update the list of displayed repositories based on filters.
  const handleShownRepositories = (repos: Repo[]) => {
    setAllFilteredRepositories(repos);
    setCurrentPage(1);
  };

  // Slice the data to display only the items for the current page.
  const paginatedData = allFilteredRepositories?.slice(startIndex, endIndex);
  const paginationCount = Math.ceil((allFilteredRepositories?.length || 0) / itemsPerPageInPagination);

  return (
    <Box sx={{ display: 'flex', flex: 8, flexDirection: 'column', flexWrap: 'wrap' }}>
      <Filter repositories={repositories} handleShownRepositories={handleShownRepositories} />

      {/* Display a message when no matching repositories are found. */}
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
