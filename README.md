# MVST Code Challenge

- This project is developed for the MVST code challenge.
- Its primary objective is to search for repositories based on GitHub usernames and perform filtering operations based on repository names or the programming languages used in those repositories.

## Known issues with yarn & storybook

I initially tried using the Yarn package manager, but I ran into errors in Storybook that required some workarounds. Eventually, I fixed the problem by upgrading Yarn, although I would have rather avoided it. [Related Yarn issue and solution](https://github.com/storybookjs/storybook/issues/22431#issuecomment-1630086092)

## Setup

Github graphqlAPI is used in the project so to make any search user needs to set API key

LET'S CREATE THE KEY

- First create a GitHub user account and navigate to [settings/profile](https://github.com/settings/profile)
- From the left menu go to Developer Settings (it must be in the bottom)
- Click Personal Access tokens, and select Token (clasic)
- Click Generate new token by selecting "Generate new token (clasic)"
- My application only needs "read:userRead ALL user profile data" permission under user section. Select only this option to minimize power of the token
- Generate token and save it somewhere.

TIME TO USE TOKEN

- Go to the project root and open the .env file.
- set VITE_GITHUB_API_KEY = '' with the newly created token. place the token between the quotes

example

```js
VITE_GITHUB_API_KEY = 'ghp_CX5Bt_RANDOM_STUFF_sdFZ464NB9Su';
VITE_GRAPHQL_API_URL = 'https://api.github.com/graphql';
```

The project uses the node version 18.12.0 and npm package manager\
Users can run 'nvm use' to switch node versions. [helper link to setup nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

## Run

- Navigate to the project root folder.
- install packages `npm install`
- run dev server `npm run dev`

## Tests

The project has tests and users can run tests.

- To run tests: `npm run test`

## Storybook

The project has a storybook and user check storybook. The Storybook has components and pages. It also has a control form to edit props used in the components and pages so you can feel free to dig in.

- To start the storybook: `npm run storybook`

## Deployment

The project is deployed to Vercel. Whenever there is a new push in the GitHub repository main branch, Vercel builds the page from the latest changes\

[Deployed Project](https://code-challenge-mvst-saqev1125-egenerse.vercel.app/)

## Potential Improvement

- Using TypeScript GraphQL Code Generator for types.
- Right now GitHub graphql query is fetching the first 100 repositories if the user has more than that it is not seen in the application. Adding pagination with graphql so that even if a user has more than 100 repositories, the project can handle.
- Github restful API does not require an API key so it can be added to a project with another flow.
- Not all components have tests. More tests can be added.

## Coverage

The aim is creating a table here to show test coverage\
[Coverage Report](coverage/coverage-final.json)
