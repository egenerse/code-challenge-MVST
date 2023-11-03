import { Repo } from '../graphql/queries/getUserGithubInfo';

export const repositoriesResponse: Repo[] = [
  {
    name: 'egenerse.github.io',
    description: null,
    url: 'https://github.com/egenerse/egenerse.github.io',
    languages: {
      nodes: [
        { name: 'HTML', __typename: 'Language' },
        { name: 'CSS', __typename: 'Language' },
        { name: 'JavaScript', __typename: 'Language' },
        { name: 'TypeScript', __typename: 'Language' },
      ],
      __typename: 'LanguageConnection',
    },
    __typename: 'Repository',
  },
  {
    name: 'nerse-hello',
    description: null,
    url: 'https://github.com/egenerse/nerse-hello',
    languages: {
      nodes: [
        { name: 'TypeScript', __typename: 'Language' },
        { name: 'JavaScript', __typename: 'Language' },
      ],
      __typename: 'LanguageConnection',
    },
    __typename: 'Repository',
  },
  {
    name: 'charge-and-go-mobile',
    description: 'HackaTUM 22 - SiXT challange mobile app',
    url: 'https://github.com/egenerse/charge-and-go-mobile',
    languages: { nodes: [{ name: 'JavaScript', __typename: 'Language' }], __typename: 'LanguageConnection' },
    __typename: 'Repository',
  },
];
