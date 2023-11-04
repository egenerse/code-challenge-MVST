import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home';
import { createRouterWithStory } from '../../utils/storybookUtils';

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  decorators: [(Story) => createRouterWithStory(Story)],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
