import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Design System/Base TextField',
  component: TextField,
  argTypes: {
    onChange: { action: 'changes' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    name: 'Name',
    placeholder: 'Placeholder',
    // onChange: (value: string) => value,
  },
};
