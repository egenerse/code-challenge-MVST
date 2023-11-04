import { SelectOption } from '@components/CustomSelect';
import { Repo } from '@graphql/queries/getUserGithubInfo';

/**
 * Retrieves a list of SelectOption objects representing different programming languages
 * found in the provided repositories.
 *
 * @param nodes - An optional array of Repo objects containing repository information.
 * @returns An array of SelectOption objects with label and value properties for each unique programming language.
 */
export function getDifferentLanguagesOptions(nodes?: Repo[]): SelectOption[] {
  // If the 'nodes' parameter is not provided or is an empty array, return an empty array.
  if (!nodes) return [];

  // Create a Set to store unique programming languages.
  const languagesSet = new Set<string>();

  // Iterate through the provided repositories and add their programming languages to the Set.
  nodes?.forEach((node) => {
    node.languages.nodes?.forEach((language) => languagesSet.add(language.name));
  });

  // Convert the Set of unique languages into an array of SelectOption objects.
  return Array.from(languagesSet).map((language) => ({ label: language, value: language }));
}

/**
 * Filters a list of repositories based on a search query and a selected programming language.
 *
 * @param repositories - An array of Repo objects representing repositories to filter.
 * @param query - A string representing the search query.
 * @param selectedLanguage - A string representing the selected programming language.
 * @returns An array of filtered Repo objects that match the search query and selected language criteria.
 */
export function getFilterdRepositories(repositories: Repo[], query: string, selectedLanguage: string): Repo[] {
  // If the search query is empty, show all repositories; otherwise, filter repositories by name.
  const shownRepositores = query === '' ? repositories : repositories?.filter((repo) => repo.name.includes(query));

  // If no language is selected, return the repositories filtered by the search query.
  // If a language is selected, further filter repositories by the selected language.
  const filteredRepos =
    selectedLanguage === ''
      ? shownRepositores
      : shownRepositores.filter((repo) => repo.languages.nodes.some((lang) => lang.name === selectedLanguage));

  // Return the filtered list of repositories.
  return filteredRepos;
}
