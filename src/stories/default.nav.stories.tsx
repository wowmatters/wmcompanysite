import React from 'react';
import { Meta, StoryObj } from "@storybook/react";

import { DefaultNav } from '../ui/nav/default-nav';


const meta: Meta<typeof DefaultNav> = {
  component: DefaultNav,
  title: 'wmcompanysite/DefaultNav',
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays an image that represents a component of DefaultNav", // <-- change this subtitle with your documentation
  },
  argTypes: {},
  
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'DefaultNav',
  }
};