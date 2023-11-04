import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { createRouterWithStory } from '@utils/storybookUtils';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [(Story) => createRouterWithStory(Story)],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
