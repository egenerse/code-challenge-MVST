import { SelectOption } from '../components/CustomSelect';
import { Repo } from '../queries/getUserGithubInfo';

export function getDifferentLanguagesOptions(nodes?: Repo[]): SelectOption[] {
  if (!nodes) return [];

  const languagesSet = new Set<string>();
  nodes?.forEach((node) => {
    node.languages.nodes?.forEach((language) => languagesSet.add(language.name));
  });

  return Array.from(languagesSet).map((language) => ({ label: language, value: language }));
}

export function getFilterdRepositories(repositories: Repo[], query: string, selectedLanguage: string): Repo[] {
  const shownRepositores = query === '' ? repositories : repositories?.filter((repo) => repo.name.includes(query));

  const filteredRepos =
    selectedLanguage === ''
      ? shownRepositores
      : shownRepositores.filter((repo) => repo.languages.nodes.some((lang) => lang.name === selectedLanguage));
  return filteredRepos;
}
