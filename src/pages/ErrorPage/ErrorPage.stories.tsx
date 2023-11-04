import type { Meta, StoryObj } from '@storybook/react';
import ErrorPage from './ErrorPage';
import { createRouterWithStory } from '../../utils/storybookUtils';

const meta = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  decorators: [(Story) => createRouterWithStory(Story)],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
