import { styled } from '@/styles'

export const Container = styled('header', {
  width: '100%',

  background:
    'linear-gradient(225deg, rgba(15, 20, 31, 0.40) 0%, rgba(6, 9, 15, 0.20) 100%)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid $black',
})

export const Content = styled('div', {
  padding: '$3 $4',
  width: '100%',
  maxWidth: '1216px',
  margin: '0 auto',
})

export const ApolloLogo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  span: {
    fontWeight: '$regular',
    fontSize: '$md',
    color: '$white',

    background: '$gradientBlue',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
})
