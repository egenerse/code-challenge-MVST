import type { Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';
import { repositoriesResponse } from '../../common/sampleApiResponses';

const meta = {
  title: 'Components/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

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

export const EmptyRepoNoFunction: Story = {
  args: {
    repositories: [],
    handleShownRepositories: () => {},
  },
};
