import type { Meta, StoryObj } from '@storybook/react';

import LineMenu from '.';

export default {
  title: 'Atoms/LineMenu',
  component: LineMenu,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof LineMenu>;

export const Default: Story = {
  render: () => <LineMenu />,
};
