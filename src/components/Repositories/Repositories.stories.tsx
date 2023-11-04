import type { Meta, StoryObj } from '@storybook/react';
import Repositories from './Repositories';
import { repositoriesResponse } from '../../common/sampleApiResponses';
import { MemoryRouter } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Repositories',
  component: Repositories,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    repositories: { description: 'Array of repositories' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/repos/egenerse']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Repositories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repositories: repositoriesResponse,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyRepo: Story = {
  args: {
    repositories: [],
  },
};
