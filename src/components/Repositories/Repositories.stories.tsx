import type { Meta, StoryObj } from '@storybook/react';
import Repositories from './Repositories';
import { repositoriesResponse } from '@common/sampleApiResponses';
import { createRouterWithStory } from '@utils/storybookUtils';

const meta = {
  title: 'Components/Repositories',
  component: Repositories,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    repositories: { description: 'Array of repositories' },
  },
  decorators: [(Story) => createRouterWithStory(Story, ['/repos/egenerse'])],
} satisfies Meta<typeof Repositories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repositories: repositoriesResponse,
  },
};

export const EmptyRepo: Story = {
  args: {
    repositories: [],
  },
};
