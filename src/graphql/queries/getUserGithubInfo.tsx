import { gql } from '@apollo/client';

export const getUserGithubInfo = gql`
  query getUserGithubInfo($username: String!) {
    user(login: $username) {
      login
      name
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      bio
      email
      location
      repositories(first: 100) {
        nodes {
          name
          description
          url
          languages(first: 10) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export interface Repo {
  name: string;
  description?: string | null;
  url: string;
  __typename: string;
  languages: {
    __typename: string;
    nodes: {
      __typename: string;
      name: string;
    }[];
  };
}

export interface User {
  user: {
    __typename: string;
    login: string;
    name: string;
    avatarUrl: string;
    followers: {
      __typename: string;
      totalCount: number;
    };
    following: {
      __typename: string;
      totalCount: number;
    };
    bio: string;
    email: string;
    location: string;
    repositories: {
      __typename: string;
      nodes: Repo[];
    };
  };
}
