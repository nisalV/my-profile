import * as stylex from '@stylexjs/stylex'

export const commonStyles = stylex.create({
  mainWrapperStyles: {
    width: '100%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authItemsContainerStyles: {
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
    width: '30%',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)',
  },
  authHeadersTextStyles: {
    fontSize: {
      default: 40,
      '@media (max-width: 900px)': 33,
    },
    fontWeight: 200,
    background:
      'linear-gradient(45deg, rgba(53,90,223,1) -30%, rgba(165,76,176,1) 65%,  rgba(255,238,190,1) 105%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
  },
})