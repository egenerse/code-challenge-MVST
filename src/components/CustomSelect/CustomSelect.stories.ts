import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from './CustomSelect';

const meta = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    options: {
      defaultValue: [
        { label: 'HTML', value: 'HTML' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'TypeScript', value: 'TypeScript' },
        { label: 'CSS', value: 'CSS' },
      ],
    },
    onChange: { defaultValue: () => {} },
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'HTML', value: 'HTML' },
      { label: 'JavaScript', value: 'JavaScript' },
      { label: 'TypeScript', value: 'TypeScript' },
      { label: 'CSS', value: 'CSS' },
    ],
    onChange: () => {},
  },
};
