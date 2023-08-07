import type { Meta, StoryObj } from '@storybook/react';

import { Category, CategoryField } from './CategoryField';

const meta: Meta<typeof CategoryField> = {
  title: 'Design System/Category/CategoryField',
  component: CategoryField,
};

export default meta;
type Story = StoryObj<typeof CategoryField>;

const DEFAULT_CATEGORY: Category = {
  id: 'category-id',
  name: 'Category',
};

export const Blank: Story = {
  args: {},
};
export const HasCategory: Story = {
  args: {
    category: DEFAULT_CATEGORY,
  },
};
