import { useLocation } from 'wouter'
import Button from '../CoreComponents/ButtonComponent/Button'
import Icon from '../CoreComponents/IconComponent/Icon'
import Input from '../CoreComponents/InputComponent/Input'
import Text from '../CoreComponents/TextComponent/Text'
import * as stylex from '@stylexjs/stylex'
import Loader from '../CoreComponents/Loader/Loader'
import Spacer from '../CoreComponents/Spacer/Spacer'

const styles = stylex.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  headerWrapper: {
    height: 70,
    width: '100%',
    display: 'flex',
  },
  headerAuthButtonWrapper: {
    marginStart: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
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
    transition: 'all 0.2s ease-in-out',
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
    transition: 'all 0.2s ease-in-out',
  },
  headerButtonTextStyles: {
    fontSize: 20,
  },
  inputWrapperStyles: {
    width: '400px',
  },
  inputStyles: {
    fontSize: 20,
  },
  buttonTextStyles: {
    color: 'black',
  },
  textStyles: {
    marginTop: 20,
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyles: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
  },
})
const Welcome = () => {
  const [, setLocation] = useLocation()
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.headerWrapper)}>
        <div {...stylex.props(styles.headerAuthButtonWrapper)}>
          <Text text={process.env.NODE_ENV || ''} />
          <Button
            text="Sign In"
            buttonStyles={styles.headerSignInButtonStyles}
            textStyles={styles.headerButtonTextStyles}
            onClick={() => setLocation('/signin')}
          />
          <Spacer width={20} />
          <Button
            text="Sign Up"
            buttonStyles={styles.headerSignUpButtonStyles}
            textStyles={styles.headerButtonTextStyles}
            onClick={() => setLocation('/signup')}
          />
          <Spacer width={20} />
        </div>
      </div>
      <Button
        text="Button"
        leftElement={<Text text="Left" />}
        rightElement={<Text text="Right" />}
        buttonStyles={styles.buttonStyles}
        textStyles={styles.buttonTextStyles}
        onClick={() => {}}
        onMouseDown={() => alert('mouse down')}
      />
      <Text
        clickable
        text={`Hello\n World`}
        textStyles={styles.textStyles}
        onMouseDown={() => alert('mouse down')}
      />
      <Icon name="add" width={20} height={20} color="red" />
      <Icon name="signOut" width={20} height={20} stroke="red" />
      <Input
        onChangeText={(text) => console.log(text)}
        leftIconProps={{
          name: 'add',
          width: 20,
          height: 20,
          color: 'black',
        }}
        onPressLeftIcon={() => alert('left icon pressed')}
        rightIconProps={{
          name: 'signOut',
          width: 20,
          height: 20,
          stroke: 'black',
        }}
        inputWrapperStyles={styles.inputWrapperStyles}
        inputStyles={styles.inputStyles}
      />
      <Loader size={'30px'} />
    </div>
  )
}

export default Welcome
