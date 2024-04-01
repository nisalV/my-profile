import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { useLocation } from 'wouter'
import { useCallback } from 'react'
import { signInUser } from '../../Common/Authentication'
import Spacer from '../../CoreComponents/Spacer/Spacer'

const Styles = stylex.create({
  headerStyles: {
    marginVertical: 0,
  },
  buttonStyles: {
    backgroundColor: 'green',
    width: 200,
    height: 40,
  },
})

type SignInViewProps = {
  userData: { email: string; password: string }
  onChangeEmail: (text: string) => void
  onChangePassword: (text: string) => void
}
const SignInView = ({
  userData,
  onChangeEmail,
  onChangePassword,
}: SignInViewProps) => {
  const [, setLocation] = useLocation()

  const signIn = useCallback(async () => {
    userData.email?.trim()?.length > 0 && userData.password?.trim()?.length > 0
      ? await signInUser({
          username: userData.email,
          password: userData.password,
          onSuccess: () => setLocation('/home'),
          onError: (error) => console.log('signInUser error: ', error),
        })
      : alert('Please enter email and password')
  }, [userData])

  return (
    <>
      <h1 {...stylex.props(Styles.headerStyles)}>Sign In</h1>
      <Spacer height={20} />
      <Input
        id="userEmail"
        placeholder="Email"
        inputWrapperStyles={null}
        onChangeText={onChangeEmail}
      />
      <Spacer height={20} />
      <Input
        id="userPassword"
        type="password"
        placeholder="Password"
        inputWrapperStyles={null}
        onChangeText={onChangePassword}
      />
      <Spacer height={40} />
      <Button
        text="Sign In"
        buttonStyles={Styles.buttonStyles}
        onClick={signIn}
      />
      <Spacer height={50} />
      <Button text="Go To Sign Up" onClick={() => setLocation('/signup')} />
      <Spacer height={10} />
      <Button
        text="Fogot Password"
        onClick={() => setLocation('/fogot-password')}
      />
      <Spacer height={10} />
      <Button text="Go To Welcome" onClick={() => setLocation('/')} />
    </>
  )
}

export default SignInView
