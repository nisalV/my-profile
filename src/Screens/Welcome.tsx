import { useLocation } from 'wouter'
import Button from '../CoreComponents/ButtonComponent/Button'
import Icon from '../CoreComponents/IconComponent/Icon'
import Input from '../CoreComponents/InputComponent/Input'
import Text from '../CoreComponents/TextComponent/Text'
import * as stylex from '@stylexjs/stylex'

const Styles = stylex.create({
  inputWrapperStyles: {
    width: '400px',
  },
  inputStyles: {
    color: 'blue',
    fontSize: 20,
  },
  buttonTExtStyles: {
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
  headerStyles: {
    marginVertical: 0,
  },
})
const Welcome = () => {
  const [location, setLocation] = useLocation()
  return (
    <div>
      <h1 {...stylex.props(Styles.headerStyles)}>Welcome to the app</h1>
      <Button text="Sign In" onClick={() => setLocation('/signin')} />
      <Button text="Sign Up" onClick={() => setLocation('/signup')} />

      <Button
        text="Button"
        leftElement={<Text text="Left" />}
        rightElement={<Text text="Right" />}
        buttonStyles={Styles.buttonStyles}
        textStyles={Styles.buttonTExtStyles}
        onClick={() => {}}
        onMouseDown={() => alert('mouse down')}
      />
      <Text
        clickable
        text={`Hello\n World`}
        textStyles={Styles.textStyles}
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
        inputWrapperStyles={Styles.inputWrapperStyles}
        inputStyles={Styles.inputStyles}
      />
    </div>
  )
}

export default Welcome
