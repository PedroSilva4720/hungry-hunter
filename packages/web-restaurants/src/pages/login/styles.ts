import { styled } from '@s/index';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
});

export const Title = styled('h1', {
  fontSize: '$xl',
  lineHeight: '120%',
  letterSpacing: '-.75px',
  textAlign: 'center',
  fontWeight: 600,
  color: '$tomato10',
});

export const Subtitle = styled('h2', {
  fontWeight: 200,
  letterSpacing: '-.75px',
  textAlign: 'center',
  fontSize: '$sm',
  lineHeight: '120%',
  color: '$mauve12',
});

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '18px',
  marginTop: '18px',
});
