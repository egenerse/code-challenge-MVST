import { Box, TextField } from '@mui/material';
import { ChangeEvent, useState, useMemo } from 'react';
import { Repo } from '@graphql/queries/getUserGithubInfo';
import { getDifferentLanguagesOptions, getFilterdRepositories } from '@utils/githubReposUtils';
import { CustomSelect } from '../CustomSelect';

interface FilterProps {
  repositories: Repo[];
  handleShownRepositories: (repo: Repo[]) => void;
}

/**
 * Component for filtering and searching GitHub repositories.
 *
 * @param repositories - An array of Repo objects representing GitHub repositories.
 * @param handleShownRepositories - A callback function to handle the display of filtered repositories.
 * @returns A React component that provides filtering and searching options for repositories.
 */
export default function Filter({ repositories, handleShownRepositories }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const allLanguages = useMemo(() => getDifferentLanguagesOptions(repositories), [repositories]);

  // Handle change in the search query input field.
  const handleSearchQuesyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    const filteredRepos = getFilterdRepositories(repositories, newQuery, selectedLanguage);
    setSearchQuery(newQuery);
    handleShownRepositories(filteredRepos);
  };


  // Handle change in the selected programming language.
  const handleLanguageChange = (newSelectedLanguage: string) => {
    const filteredRepos = getFilterdRepositories(repositories, searchQuery, newSelectedLanguage);
    setSelectedLanguage(newSelectedLanguage);
    handleShownRepositories(filteredRepos);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {/* Search input field for repository search. */}
      <TextField
        placeholder="Find a Repository"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchQuesyChange}
      />

      {/* CustomSelect component for selecting a programming language. */}
      <CustomSelect options={allLanguages} onChange={handleLanguageChange} />
    </Box>
  );
}
