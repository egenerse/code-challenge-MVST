/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: '100vw', height: '100' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
