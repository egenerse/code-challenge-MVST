export const getUserGithubInfo = `
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
  __typename: string,
  languages: {
    __typename: string,
    nodes: {
      __typename: string,
      name: string
    }[]
  }
}

export interface User {
  user: {
    login: string;
    name: string,
    avatarUrl: string;
    followers: {
      totalCount: number
    };
    following: {
      totalCount: number
    };
    bio: string;
    email: string;
    location: string;
    repositories: {
      nodes: Repo[];
    };
  }
}