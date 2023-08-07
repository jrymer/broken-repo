import type { Meta, StoryObj } from '@storybook/react';

import { IconPreviews } from './IconPreviews';

const meta: Meta<typeof IconPreviews> = {
  title: 'Design System/IconPreviews',
  component: IconPreviews,
  args: {
    size: 'fa-md',
    color: 'text-slate-900',
  },
  argTypes: {
    color: {
      control: { type: 'text' },
    },
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
type Story = StoryObj<typeof IconPreviews>;

export const Default: Story = {
  args: {},
};
