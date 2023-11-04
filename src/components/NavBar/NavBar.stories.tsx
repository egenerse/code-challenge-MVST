import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';
import { createRouterWithStory } from '@utils/storybookUtils';

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  decorators: [(Story) => createRouterWithStory(Story)],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
