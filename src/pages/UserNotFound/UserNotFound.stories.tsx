import type { Meta, StoryObj } from '@storybook/react';
import UserNotFound from './UserNotFound';
import { createRouterWithStory } from '@utils/storybookUtils';

const meta = {
  title: 'Pages/UserNotFound',
  component: UserNotFound,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [(Story) => createRouterWithStory(Story)],
} satisfies Meta<typeof UserNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
