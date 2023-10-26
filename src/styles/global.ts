import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  html: {
    fontSize: '62.5%',
  },
  body: {
    backgroundColor: '$blackDark',
    color: '$gray100',
    fontSize: '$sm',
    '-webkit-font-smoothing': 'antialiased',
  },
})
