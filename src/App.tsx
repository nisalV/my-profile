import Button from './CoreComponents/ButtonComponent/Button'
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
  return (
    <div style={styles.wrapper}>
      <Button
        width="300px"
        height="50px"
        text="Button"
        isDisabled={false}
        leftElement={<Text text="Left" />}
        centerElement={<Text text="Center" />}
        rightElement={<Text text="Right" />}
        buttonStyles={{ backgroundColor: 'green', borderRadius: 20 }}
        textStyles={{ color: 'black' }}
        onClick={() => alert('clicked')}
      />
      <Text
        text={`Hello\n World`}
        fontSize={20}
        fontWeight="bold"
        color="black"
        textStyles={{ marginTop: 20 }}
        onClick={() => alert('clicked')}
      />
    </div>
  )
}

export default App
