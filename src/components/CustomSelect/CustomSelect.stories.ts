/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from './CustomSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
