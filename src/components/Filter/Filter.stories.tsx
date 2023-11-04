import type { Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';
import { repositoriesResponse } from '../../common/sampleApiResponses';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Filter',
  component: Filter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    repositories: { description: 'Array of repositories' },
    handleShownRepositories: { description: 'Calls the the function with props' },
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repositories: repositoriesResponse,
    handleShownRepositories: () => {},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyRepoNoFunction: Story = {
  args: {
    repositories: [],
    handleShownRepositories: () => {},
  },
};
