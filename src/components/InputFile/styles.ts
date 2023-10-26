import { styled } from '@/styles'

export const Container = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$3',
})

export const Input = styled('div', {
  background: '$blackLight',
  height: '100%',
  width: '100%',
  borderRadius: '$lg',
  border: '2px solid $blackLight',
  padding: '$2',
  minHeight: '312px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    background: '$blackDark',
    borderColor: '$black',
  },

  span: {
    fontSize: '$xxs',
    color: '$gray400',
  },
})

export const Label = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$3',
})

export const Icon = styled('div', {
  background: '$blackDark',
  height: '120px',
  width: '120px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',

  svg: {
    color: '$blue',
  },
})

export const Preview = styled('div', {
  width: '100%',
  maxWidth: '640px',
  height: '320px',
  background: '$black',
  borderRadius: '$sm',
  border: '2px solid $blackLight',

  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})
