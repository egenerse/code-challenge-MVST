import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import GitHubInfo from '.';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { getUserGithubInfo } from '../../graphql/queries/getUserGithubInfo';
import { UserResponse } from '../../common/sampleApiResponses';

const useNavigateFunction = vi.fn();
const username = 'egenerse';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => useNavigateFunction,
    useParams: () => ({
      username,
    }),
  };
});

const mocks = [
  {
    request: {
      query: getUserGithubInfo,
      variables: {
        username,
      },
    },
    result: {
      data: {
        ...UserResponse,
      },
    },
  },
];

describe('<GitHubInfo />', () => {
  test('GitHubInfo mounts properly', async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks}>
        <GitHubInfo />
      </MockedProvider>,
      { wrapper: BrowserRouter },
    );
    expect(wrapper).toBeTruthy();
  });

  // Had no time
  // Intention is filtering some repos with input field or language selection
  test.skip('GitHubInfo page filters work', async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks}>
        <GitHubInfo />
      </MockedProvider>,
      { wrapper: BrowserRouter },
    );

    expect(wrapper).toBeTruthy();
  });
});
