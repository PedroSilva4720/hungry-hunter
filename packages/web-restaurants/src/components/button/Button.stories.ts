import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/Button',
  component: Button,
  tags: ['button'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    //   backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    title: 'Button',
    variant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    title: 'Button',
    variant: 'danger',
  },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
