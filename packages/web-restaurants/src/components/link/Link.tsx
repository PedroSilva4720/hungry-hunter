import React from 'react';

import { styled } from '@s/index';

export const Link: React.FC<{ to: string; placeholder: string }> = ({
  to,
  placeholder,
}) => {
  return (
    <>
      <HTMLLink href={to}>{placeholder}</HTMLLink>
    </>
  );
};

const HTMLLink = styled('a', {
  fontWeight: 200,
  letterSpacing: '-.75px',
  textAlign: 'center',
  fontSize: '$xs',
  color: '$tomato11',
  cursor: 'pointer',
  '&:hover': {
    color: '$tomato9',
    transition: '0.5s',
  },
});
