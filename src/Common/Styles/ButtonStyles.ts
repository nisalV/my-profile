import * as stylex from '@stylexjs/stylex'

export const buttonStyles = stylex.create({
  headerSignInButtonStyles: {
    width: 120,
    height: 50,
    background:
      'linear-gradient(45deg, rgba(53,90,223,1) -20%, rgba(165,76,176,1) 75%)',
    backgroundSize: '140px 50px',
    backgroundPosition: {
      default: '0px',
      ':hover': '-20px',
    },
  },
  headerSignUpButtonStyles: {
    width: 120,
    height: 50,
    background:
      'linear-gradient(45deg, rgba(165,76,176,1) 10%, rgba(255,238,190,1) 105%)',
    backgroundSize: '140px 50px',
    backgroundPosition: {
      default: '0px',
      ':hover': '-20px',
    },
  },
  headerButtonTextStyles: {
    fontSize: 20,
    color: 'white',
  },
  signInButtonStyles: {
    width: '100%',
    height: 50,
    background:
      'linear-gradient(45deg, rgba(53,90,223,1) -20%, rgba(165,76,176,1) 75%)',
    backgroundSize: '120% 50px',
    backgroundPosition: {
      default: '0px',
      ':hover': '-20px',
    },
  },
  signUpButtonStyles: {
    width: '100%',
    height: 50,
    background:
      'linear-gradient(45deg, rgba(165,76,176,1) 10%, rgba(255,238,190,1) 105%)',
    backgroundSize: '120% 50px',
    backgroundPosition: {
      default: '0px',
      ':hover': '-20px',
    },
  },
  subButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authSubButtonStyles: {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    background: 'transparent',
    boxShadow: 'none',
  },
  authSubButtonTextStyles: {
    fontSize: 14,
    color: 'rgba(53,90,223,1)',
    textDecoration: {
      default: 'none',
      ':hover': 'underline',
    },
  },
})
