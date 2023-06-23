import React from 'react';
import { styled } from '@s/index';

export const Input: React.FC<{
  label: string;
  type?: 'email' | 'password' | 'text';
  children?: React.ReactNode;
}> = ({ label, children, type = 'text' }) => {
  const id = `label-${Math.random() * 1000}`;

  return (
    <InputContainer>
      <Label htmlFor={`.${id}`}>{label}</Label>
      <HTMLInput type={type} id={id} />
      {children}
    </InputContainer>
  );
};

const HTMLInput = styled('input', {
  border: '2px solid $tomato11',
  borderRadius: '$sm',
  fontSize: '$xs',
  padding: '6px',
  width: '15vw',
});

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& a': {
    textAlign: 'center',
    width: '100%',
  },
});

const Label = styled('label', {
  fontWeight: 200,
  fontSize: '$xs',
  letterSpacing: '-.75px',
  lineHeight: '120%',
  color: '$mauve12',
});
