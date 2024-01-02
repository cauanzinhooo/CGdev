import type { Meta, StoryObj } from "@storybook/react";

import ContactSection from ".";

export default {
  title: "Organisms/ContactSection",
  component: ContactSection,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  render: () => <ContactSection />,
};
