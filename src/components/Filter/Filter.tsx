import { Box, TextField } from '@mui/material';
import { ChangeEvent, useState, useMemo } from 'react';
import { Repo } from '../../graphql/queries/getUserGithubInfo';
import { getDifferentLanguagesOptions, getFilterdRepositories } from '../../utils/githubReposUtils';
import { CustomSelect } from '../CustomSelect';

interface FilterProps {
  repositories: Repo[];
  handleShownRepositories: (repo: Repo[]) => void;
}
export default function Filter({ repositories, handleShownRepositories }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const allLanguages = useMemo(() => getDifferentLanguagesOptions(repositories), [repositories]);

  const handleSearchQuesyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    const filteredRepos = getFilterdRepositories(repositories, newQuery, selectedLanguage);
    setSearchQuery(newQuery);
    handleShownRepositories(filteredRepos);
  };

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
      <TextField
        placeholder="Find a Repository"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchQuesyChange}
      />
      <CustomSelect options={allLanguages} onChange={handleLanguageChange} />
    </Box>
  );
}
