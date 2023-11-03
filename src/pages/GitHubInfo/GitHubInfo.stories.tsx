/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import GitHubInfo from './GitHubInfo';
import { MemoryRouter } from 'react-router-dom';
import { getUserGithubInfo } from '../../graphql/queries/getUserGithubInfo';
import { UserResponse } from '../../common/sampleApiResponses';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Pages/GitHubInfo',
  component: GitHubInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/ropes/egenerse']} initialIndex={0}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof GitHubInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
