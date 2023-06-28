import type { Meta, StoryObj } from '@storybook/react';

import { ExampleButton } from './ExampleButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/ExampleButton',
  component: ExampleButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ExampleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'ExampleButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'ExampleButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'ExampleButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'ExampleButton',
  },
};
