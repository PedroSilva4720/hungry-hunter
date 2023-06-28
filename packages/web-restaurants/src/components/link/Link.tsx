import React from 'react';

import { styled } from '@s/index';

interface ILinkProps {
  to: string;
  placeholder: string;
}

export const Link: React.FC<ILinkProps> = ({ to, placeholder }) => {
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
