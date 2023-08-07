import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { Datum } from '../types/Fr';

const meta: Meta<typeof Select> = {
  title: 'Design System/Select',
  component: Select,
  argTypes: { onSelected: { action: 'selected' } },
};

export default meta;
type Story = StoryObj<typeof Select>;

const DEFAULT_OPTIONS: Datum[] = [
  { label: 'Apples', value: 'apples' },
  { label: 'Oranges', value: 'oranges' },
  { label: 'Bananas', value: 'bananas' },
];

export const Default: Story = {
  args: {
    label: 'Fruits',
    options: DEFAULT_OPTIONS,
    placeholder: 'Select one',
  },
};

export const Selected: Story = {
  args: {
    label: 'Fruits',
    options: DEFAULT_OPTIONS,
    placeholder: 'Select one',
    selected: DEFAULT_OPTIONS[0],
  },
};
