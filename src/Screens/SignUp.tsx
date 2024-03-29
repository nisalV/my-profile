import { useLocation } from 'wouter'
import Button from '../CoreComponents/ButtonComponent/Button'
import * as stylex from '@stylexjs/stylex'

const Styles = stylex.create({
  headerStyles: {
    marginVertical: 0,
  },
})

const SignUp = () => {
  const [, setLocation] = useLocation()
  return (
    <div>
      <h1 {...stylex.props(Styles.headerStyles)}>SignUp</h1>
      <Button text="Go To Sign In" onClick={() => setLocation('/signin')} />
      <Button
        text="Fogot Password"
        onClick={() => setLocation('/fogot-password')}
      />
      <Button text="Go To Welcome" onClick={() => setLocation('/')} />
    </div>
  )
}

export default SignUp
