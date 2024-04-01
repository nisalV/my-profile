import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { signUpUser } from '../../Common/Authentication'
import { SignUpUserData } from '../../Common/types'
import { useLocation } from 'wouter'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import { useCallback } from 'react'

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

type SignUpViewProps = {
  userData: SignUpUserData
  onChangeFirstName: (text: string) => void
  onChangeLastName: (text: string) => void
  onChangeEmail: (text: string) => void
  onChangePassword: (text: string) => void
  setShowConfirmSignUp: (show: boolean) => void
}

const SignUpView = ({
  userData,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  onChangePassword,
  setShowConfirmSignUp,
}: SignUpViewProps) => {
  const [, setLocation] = useLocation()

  const signUp = useCallback(async () => {
    userData.email?.trim()?.length > 0 &&
    userData.firstName?.trim()?.length > 0 &&
    userData.lastName?.trim()?.length > 0 &&
    userData.password?.trim()?.length > 0
      ? await signUpUser({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          onSuccess: () => setShowConfirmSignUp(true),
          onError: (error) => console.log('signUpUser error: ', error),
        })
      : alert('Please fill all fields')
  }, [userData])

  return (
    <>
      <h1 {...stylex.props(Styles.headerStyles)}>Sign Up</h1>
      <Spacer height={20} />
      <Input
        id="userFirstName"
        placeholder="First name"
        inputWrapperStyles={null}
        onChangeText={onChangeFirstName}
      />
      <Spacer height={20} />
      <Input
        id="userLastName"
        placeholder="Last name"
        inputWrapperStyles={null}
        onChangeText={onChangeLastName}
      />
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
        text="Sign Up"
        buttonStyles={Styles.buttonStyles}
        onClick={signUp}
      />
      <Spacer height={50} />
      <Button text="Go To Sign In" onClick={() => setLocation('/signin')} />
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

export default SignUpView
