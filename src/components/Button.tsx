import { styled } from '@/styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$regular',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
  transition: 'all 0.2s ease-in',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue',

        '&:not(:disabled):hover': {
          background: '$blueDark',
        },

        '&:disabled': {
          backgroundColor: '$blackLight',
        },
      },
      secondary: {
        color: '$gray400',
        background: 'transparent',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blueDark',
        },

        '&:disabled': {
          backgroundColor: '$blackLight',
        },
      },
    },

    size: {
      sm: {
        height: 36,
      },

      md: {
        height: 48,
      },

      full: {
        width: '100%',
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
