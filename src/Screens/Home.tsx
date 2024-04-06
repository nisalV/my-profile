import * as stylex from '@stylexjs/stylex'
import Button from '../CoreComponents/ButtonComponent/Button'
import { signOutUser } from '../Common/Authentication'
import { useLocation } from 'wouter'
import { useCallback, useState } from 'react'

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
  const [isLoading, setIsLoading] = useState(false)

  const signOut = useCallback(
    () =>
      signOutUser({
        onSuccessSignOut: () => setLocation('/'),
        setLoading: setIsLoading,
      }),
    []
  )

  return (
    <div>
      <h1 {...stylex.props(Styles.headerStyles)}>
        Home: this is the {process.env.NODE_ENV} environment
      </h1>
      <Button
        text="Sign Out"
        isDisabled={isLoading}
        isLoading={isLoading}
        buttonStyles={Styles.buttonStyles}
        onClick={signOut}
      />
    </div>
  )
}

export default Home
