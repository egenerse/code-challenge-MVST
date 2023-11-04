import type { Meta, StoryObj } from '@storybook/react';
import GitHubInfo from './GitHubInfo';
import { getUserGithubInfo } from '@graphql/queries/getUserGithubInfo';
import { UserResponse } from '@common/sampleApiResponses';
import { createRouterWithStory } from '@utils/storybookUtils';

const meta = {
  title: 'Pages/GitHubInfo',
  component: GitHubInfo,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  decorators: [(Story) => createRouterWithStory(Story, ['/ropes/egenerse'])],
} satisfies Meta<typeof GitHubInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.parameters = {
  apolloClient: {
    mocks: [
      {
        // Use `delay` parameter to increase loading time
        delay: 1e21,
        request: {
          query: getUserGithubInfo,
        },
        result: {
          data: UserResponse,
        },
      },
    ],
  },
};
