import { useLocation } from 'wouter'
import Button from '../CoreComponents/ButtonComponent/Button'
import * as stylex from '@stylexjs/stylex'

const Styles = stylex.create({
  headerStyles: {
    marginVertical: 0,
  },
})

const FogotPassword = () => {
  const [location, setLocation] = useLocation()
  return (
    <div>
      <h1 {...stylex.props(Styles.headerStyles)}>Forgot Password</h1>
      <Button text="Go To Sign In" onClick={() => setLocation('/signin')} />
      <Button text="Go To Sign Up" onClick={() => setLocation('/signup')} />
      <Button text="Go To Welcome" onClick={() => setLocation('/')} />
    </div>
  )
}

export default FogotPassword
