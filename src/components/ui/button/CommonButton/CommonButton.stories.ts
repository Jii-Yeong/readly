import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CommonButton from './CommonButton';

const meta = {
  title: 'UI/Button',
  component: CommonButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};