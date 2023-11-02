import { Box, SelectChangeEvent, TextField } from '@mui/material'
import { ChangeEvent, useState, useMemo } from 'react'
import CustomSelect from './CustomSelect'
import { Repo } from '../queries/getUserGithubInfo';
import { getDifferentLanguagesOptions, getFilterdRepositories } from '../utils/githubReposUtils';


interface FilterProps {
  repositories: Repo[];
  handleShownRepositories: (repo: Repo[]) => void;
}
export default function Filter({ repositories, handleShownRepositories }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const allLanguages = useMemo(() => getDifferentLanguagesOptions(repositories), [repositories])

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newSelectedLanguage = event.target.value
    const filteredRepos = getFilterdRepositories(repositories, searchQuery, newSelectedLanguage)
    setSelectedLanguage(newSelectedLanguage);
    handleShownRepositories(filteredRepos)
  };

  const handleSearchQuesyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    const filteredRepos = getFilterdRepositories(repositories, newQuery, selectedLanguage)
    setSearchQuery(newQuery)
    handleShownRepositories(filteredRepos)
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      flexWrap: 'wrap',
      gap: 2
    }}>
      <TextField placeholder='Find a Repository' variant="outlined" value={searchQuery} onChange={handleSearchQuesyChange} sx={{ display: 'flex' }} />

      <CustomSelect
        options={allLanguages}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      />
    </Box>
  )
}
