import { styled } from '@/styles'

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
  width: '100%',
  color: '$white',
})

export const ProgressContainer = styled('div', {
  width: '100%',
  display: 'flex',
  height: '8px',
  borderRadius: '4px',
  background: '$black',
})

export const Progress = styled('div', {
  background: '$gradientBlue',
  height: '100%',
  borderRadius: '4px',

  transition: 'all 0.2s ease',
})

export const Percentage = styled('p', {
  fontSize: '$lg',
})

export const Status = styled('p', {
  fontSize: '$lg',
})
