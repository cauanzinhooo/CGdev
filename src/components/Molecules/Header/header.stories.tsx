import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

export default {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
