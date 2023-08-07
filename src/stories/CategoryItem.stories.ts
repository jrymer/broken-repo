import type { Meta, StoryObj } from '@storybook/react';

import { CategoryItem } from './CategoryItem';

const meta: Meta<typeof CategoryItem> = {
  title: 'Design System/Category/Category Item',
  component: CategoryItem,
};

export default meta;
type Story = StoryObj<typeof CategoryItem>;

export const Default: Story = {
  args: {},
};
