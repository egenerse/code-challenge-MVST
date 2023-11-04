import { expect, test } from 'vitest';
import { getDifferentLanguagesOptions, getFilterdRepositories } from './githubReposUtils';
import { repositoriesResponse } from '../common/sampleApiResponses';
import { Repo } from '../graphql/queries/getUserGithubInfo';

const filteredReposByOnlyQuery: Repo[] = [
  {
    __typename: 'Repository',
    name: 'egenerse.github.io',
    description: null,
    url: 'https://github.com/egenerse/egenerse.github.io',
    languages: {
      __typename: 'LanguageConnection',
      nodes: [
        { __typename: 'Language', name: 'HTML' },
        { __typename: 'Language', name: 'CSS' },
        { __typename: 'Language', name: 'JavaScript' },
        { __typename: 'Language', name: 'TypeScript' },
      ],
    },
  },
];

const filteredReposByQueryAndLanguage: Repo[] = [
  {
    __typename: 'Repository',
    name: 'egenerse.github.io',
    description: null,
    url: 'https://github.com/egenerse/egenerse.github.io',
    languages: {
      __typename: 'LanguageConnection',
      nodes: [
        { __typename: 'Language', name: 'HTML' },
        { __typename: 'Language', name: 'CSS' },
        { __typename: 'Language', name: 'JavaScript' },
        { __typename: 'Language', name: 'TypeScript' },
      ],
    },
  },
];

const filteredReposByOnlyLanguage: Repo[] = [
  {
    __typename: 'Repository',
    name: 'egenerse.github.io',
    description: null,
    url: 'https://github.com/egenerse/egenerse.github.io',
    languages: {
      __typename: 'LanguageConnection',
      nodes: [
        { __typename: 'Language', name: 'HTML' },
        { __typename: 'Language', name: 'CSS' },
        { __typename: 'Language', name: 'JavaScript' },
        { __typename: 'Language', name: 'TypeScript' },
      ],
    },
  },
];

test('util getDifferentLanguagesOptions should return empty array if repos is empty', () => {
  expect(getDifferentLanguagesOptions([])).toStrictEqual([]);
});

test('util getDifferentLanguagesOptions should return lanuage options if different languages in the repo array', () => {
  expect(getDifferentLanguagesOptions(repositoriesResponse)).toStrictEqual([
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'TypeScript', value: 'TypeScript' },
  ]);
});

test('util getFilterdRepositories should return filtered Repositories by only Query', () => {
  const query = 'ege';
  const selectedLanguage = '';
  expect(getFilterdRepositories(repositoriesResponse, query, selectedLanguage)).toStrictEqual(filteredReposByOnlyQuery);
});

test('util getFilterdRepositories should return filtered Repositories by only selected Language', () => {
  const query = 'ege';
  const selectedLanguage = 'CSS';
  expect(getFilterdRepositories(repositoriesResponse, query, selectedLanguage)).toStrictEqual(
    filteredReposByOnlyLanguage,
  );
});

test('util getFilterdRepositories should return filtered Repositories by Query and Selected Language', () => {
  const query = 'ege';
  const selectedLanguage = 'CSS';
  expect(getFilterdRepositories(repositoriesResponse, query, selectedLanguage)).toStrictEqual(
    filteredReposByQueryAndLanguage,
  );
});
