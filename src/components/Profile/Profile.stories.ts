/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    login: { type: 'string' },
    name: { type: 'string' },
    avatarUrl: { type: 'string' },
    bio: { type: 'string' },
    email: { type: 'string' },
    totalFollower: { type: 'number' },
    totalFollowing: { type: 'number' },
    location: { type: 'string' },
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

const allInfo = {
  login: 'egenerse',
  name: 'Ege',
  avatarUrl: 'https://avatars.githubusercontent.com/u/50779105?v=4',
  bio: 'Web developer',
  email: 'egenerse@gmail.com',
  totalFollower: 24,
  totalFollowing: 30,
  location: 'Munich',
};

// Create a new object without the 'name' field
const objectWithNoName = (({ name, ...rest }) => rest)(allInfo);
const objectWithNoAvatar = (({ avatarUrl, ...rest }) => rest)(allInfo);
const objectWithNoBio = (({ bio, ...rest }) => rest)(allInfo);
const objectWithNoEmail = (({ email, ...rest }) => rest)(allInfo);
const objectWithNoFollwerInfo = (({ totalFollower, ...rest }) => rest)(allInfo);
const objectWithNoFollowing = (({ totalFollowing, ...rest }) => rest)(allInfo);
const objectWithNoLocation = (({ location, ...rest }) => rest)(allInfo);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllInfo: Story = {
  args: allInfo,
};

export const NoName: Story = {
  args: objectWithNoName,
};

export const NoAvatar: Story = {
  args: objectWithNoAvatar,
};

export const NoBio: Story = {
  args: objectWithNoBio,
};

export const NoEmail: Story = {
  args: objectWithNoEmail,
};

export const NoFollowerInfo: Story = {
  args: objectWithNoFollwerInfo,
};

export const NoFollowingInfo: Story = {
  args: objectWithNoFollowing,
};

export const NoLocation: Story = {
  args: objectWithNoLocation,
};
