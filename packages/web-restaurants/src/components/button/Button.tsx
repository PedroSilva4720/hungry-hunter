import React from 'react';

import { styled } from '@s/index';

export const Button: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <HTMLButton type='submit'>{title}</HTMLButton>
    </>
  );
};

const HTMLButton = styled('button', {
  backgroundColor: '$tomato9',
  fontSize: '$xs',
  px: '20px',
  py: '6px',
  color: '$white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$tomato11',
    transition: '0.5s',
  },
});
