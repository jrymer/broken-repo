import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Design System/Icons',
  component: Icons,
  args: {
    size: 'fa-md',
  },
  argTypes: {
    size: {
      options: {
        'Extra small': 'fa-xs',
        Medium: 'fa-md',
        Large: 'fa-lg',
      },
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {},
};
