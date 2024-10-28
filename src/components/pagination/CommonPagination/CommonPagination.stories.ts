import type { Meta, StoryObj } from '@storybook/react';
import CommonPagination from './CommonPagination';

const meta = {
  title: 'Components/Pagination/CommonPagination',
  component: CommonPagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommonPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalCount: 10,
    setPagination: () => { },
    viewButtonCount: 5
  },
};