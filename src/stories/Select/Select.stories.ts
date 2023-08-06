// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { Datum } from '../types';

const meta: Meta<typeof Select> = {
  title: 'Design System/Select/Base Select',
  component: Select,
  argTypes: { onSelected: { action: 'selected' } },
};

export default meta;
type Story = StoryObj<typeof Select>;

const DefaultOptions: Datum[] = [
  { label: 'Apples', value: 'apples' },
  { label: 'Oranges', value: 'oranges' },
  { label: 'Bananas', value: 'bananas' },
];

export const Default: Story = {
  args: {
    label: 'Fruits',
    options: DefaultOptions,
    placeholder: 'Select one',
  },
};
