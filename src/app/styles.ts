import { styled } from '@/styles'

export const Wrapper = styled('div', {
  width: '100wh',
  height: '100vh',
})

export const Container = styled('main', {
  width: '100%',
  maxWidth: '1216px',
  height: 'calc(100% - 96px)',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3 $4',

  '@media screen and (max-width: 640px)': {
    height: '100%',
    margin: '96px auto',
  },
})

export const Content = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))',
  gap: '$4',
  padding: '$3',
  background: '$black',
  borderRadius: '$lg',
  border: '2px solid $blackLight',

  '@media screen and (max-width: 640px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  h1: {
    fontSize: '$2xl',
    color: '$white',
    fontWeight: '$medium',
    lineHeight: '100%',

    '@media screen and (max-width: 1000px)': {
      fontSize: '$xl',
    },
  },

  p: {
    color: '$gray400',
    maxWidth: '90%',
  },
})

export const Form = styled('form', {
  marginTop: '20px',
  width: '100%',
  height: '100%',
})

export const Preview = styled('div', {
  width: '100%',
  height: '360px',
  background: '$blackDark',
  borderRadius: '$md',
  border: '2px solid $blackLight',

  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  gap: '$3',

  '@media screen and (max-width: 640px)': {
    flexDirection: 'column-reverse',
  },
})

export const ContentPreview = styled('div', {
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
