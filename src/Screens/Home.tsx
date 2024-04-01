import * as stylex from '@stylexjs/stylex'
import Button from '../CoreComponents/ButtonComponent/Button'
import { signOutUser } from '../Common/Authentication'
import { useLocation } from 'wouter'

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
const Home = () => {
  const [, setLocation] = useLocation()
  return (
    <div>
      <h1 {...stylex.props(Styles.headerStyles)}>
        Home: this is the {process.env.NODE_ENV} environment
      </h1>
      <Button
        text="Sign Out"
        buttonStyles={Styles.buttonStyles}
        onClick={() =>
          signOutUser({
            onSuccessSignOut: () => setLocation('/'),
          })
        }
      />
    </div>
  )
}

export default Home
