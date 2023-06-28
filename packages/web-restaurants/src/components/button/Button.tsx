import React from 'react';

import { styled } from '@s/index';

interface IButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
}

export const Button: React.FC<IButtonProps> = ({
  title,
  variant = 'primary',
}) => {
  return (
    <>
      <HTMLButton variant={variant} type='submit'>
        {title}
      </HTMLButton>
    </>
  );
};

const HTMLButton = styled('button', {
  border: 'none',
  fontSize: '$xs',
  letterSpacing: '+1px',
  px: '20px',
  py: '6px',
  borderRadius: '$sm',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$tomato11',
        color: '$white',
        '&:hover': {
          backgroundColor: '$tomato10',
          transition: '0.5s',
        },
      },
      secondary: {
        backgroundColor: '$mauve11',
        color: '$white',
        '&:hover': {
          backgroundColor: '$mauve10',
          transition: '0.5s',
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: '$white',
        '&:hover': {
          backgroundColor: '$mauve10',
          transition: '0.5s',
        },
      },
      danger: {
        backgroundColor: '$mauve9',
        fontWeight: 600,
        color: '$red11',
        '&:hover': {
          backgroundColor: '$mauve8',
          transition: '0.5s',
        },
      },
    },
  },
});
