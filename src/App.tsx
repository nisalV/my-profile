import { useState } from 'react'
import Button from './CoreComponents/ButtonComponent/Button'
import Icon from './CoreComponents/IconComponent/Icon'
import Input from './CoreComponents/InputComponent/Input'
import Text from './CoreComponents/TextComponent/Text'

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    backgroundColor: 'lightblue',
  },
}

function App() {
  const [text, setText] = useState('')
  return (
    <div style={styles.wrapper}>
      <Button
        width="300px"
        height="50px"
        text="Button"
        leftElement={<Text text="Left" />}
        centerElement={<Text text="Center" />}
        rightElement={<Text text="Right" />}
        buttonStyles={{ backgroundColor: 'green', borderRadius: 20 }}
        textStyles={{ color: 'black' }}
        onClick={() => {}}
        onMouseDown={() => alert('mouse down')}
      />
      <Text
        clickable
        text={`Hello\n World`}
        fontSize={20}
        fontWeight="bold"
        color="black"
        textStyles={{ marginTop: 20 }}
        onMouseDown={() => alert('mouse down')}
      />
      <Text
        clickable
        text={`Hello\n World`}
        fontSize={20}
        fontWeight="bold"
        color="black"
        textStyles={{ marginTop: 20 }}
        onMouseDown={() => alert('mouse down')}
      />
      <Icon name="add" width={20} height={20} color="red" />
      <Icon name="signOut" width={20} height={20} stroke="red" />
      <Input
        value={text}
        onChangeText={setText}
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
        inputStyles={{ color: 'blue', fontSize: 20 }}
      />
    </div>
  )
}

export default App
