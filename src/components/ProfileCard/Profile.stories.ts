/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

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
} satisfies Meta<typeof ProfileCard>;

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

// Create a new object without the some field
const objectWithoutName = (({ name, ...rest }) => rest)(allInfo);
const objectWithoutAvatar = (({ avatarUrl, ...rest }) => rest)(allInfo);
const objectWithoutBio = (({ bio, ...rest }) => rest)(allInfo);
const objectWithoutEmail = (({ email, ...rest }) => rest)(allInfo);
const objectWithoutFollwerInfo = (({ totalFollower, ...rest }) => rest)(allInfo);
const objectWithoutFollowing = (({ totalFollowing, ...rest }) => rest)(allInfo);
const objectWithoutLocation = (({ location, ...rest }) => rest)(allInfo);

export const AllInfo: Story = {
  args: allInfo,
};

export const NoName: Story = {
  args: objectWithoutName,
};

export const NoAvatar: Story = {
  args: objectWithoutAvatar,
};

export const NoBio: Story = {
  args: objectWithoutBio,
};

export const NoEmail: Story = {
  args: objectWithoutEmail,
};

export const NoFollowerInfo: Story = {
  args: objectWithoutFollwerInfo,
};

export const NoFollowingInfo: Story = {
  args: objectWithoutFollowing,
};

export const NoLocation: Story = {
  args: objectWithoutLocation,
};
