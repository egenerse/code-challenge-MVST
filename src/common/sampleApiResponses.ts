import { Repo, User } from '@graphql/queries/getUserGithubInfo';

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

export const UserResponse: User = {
  user: {
    __typename: 'User',
    login: 'egenerse',
    name: 'Ege',
    avatarUrl: 'https://avatars.githubusercontent.com/u/50779105?u=7bb55c72e77ffedb3b68bfa133c860ddd9191931&v=4',
    followers: { __typename: 'FollowerConnection', totalCount: 24 },
    following: { __typename: 'FollowingConnection', totalCount: 30 },
    bio: '',
    email: '',
    location: 'Munich',
    repositories: {
      __typename: 'RepositoryConnection',
      nodes: [
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
        {
          __typename: 'Repository',
          name: 'nerse-hello',
          description: null,
          url: 'https://github.com/egenerse/nerse-hello',
          languages: {
            __typename: 'LanguageConnection',
            nodes: [
              { __typename: 'Language', name: 'TypeScript' },
              { __typename: 'Language', name: 'JavaScript' },
            ],
          },
        },
        {
          __typename: 'Repository',
          name: 'charge-and-go-mobile',
          description: 'HackaTUM 22 - SiXT challange mobile app',
          url: 'https://github.com/egenerse/charge-and-go-mobile',
          languages: { __typename: 'LanguageConnection', nodes: [{ __typename: 'Language', name: 'JavaScript' }] },
        },
      ],
    },
  },
};
