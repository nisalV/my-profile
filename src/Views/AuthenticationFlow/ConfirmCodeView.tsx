import { useCallback, useState } from 'react'
import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { signInUser, signUpConfirmation } from '../../Common/Authentication'
import { SignUpUserData } from '../../Common/types'
import { useLocation } from 'wouter'

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

type ConfirmCodeViewProps = {
  userData: SignUpUserData
  onChangeCode: (text: string) => void
}

const ConfirmCodeView = ({ userData, onChangeCode }: ConfirmCodeViewProps) => {
  const [, setLocation] = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  const confirmSignUpAndSignIn = useCallback(async () => {
    userData.code?.trim()?.length > 0
      ? await signUpConfirmation({
          username: userData.email,
          password: userData.password,
          confirmationCode: userData.code,
          onSuccess: async () =>
            await signInUser({
              username: userData.email,
              password: userData.password,
              onSuccess: () => setLocation('/home'),
              onError: (error) => console.log('signInUser error: ', error),
              setLoading: setIsLoading,
            }),
          onError: (error) => console.log('signUpConfirmation error: ', error),
          setLoading: setIsLoading,
        })
      : alert('Please fill the code field')
  }, [userData])

  return (
    <>
      <h1 {...stylex.props(Styles.headerStyles)}>Confirm Sign Up</h1>
      <div style={{ height: 20 }} />
      <Input
        id="signUpConfirmationCode"
        placeholder="Code"
        inputWrapperStyles={null}
        onChangeText={onChangeCode}
      />
      <div style={{ height: 40 }} />
      <Button
        text="Confirm"
        isDisabled={isLoading}
        isLoading={isLoading}
        buttonStyles={Styles.buttonStyles}
        onClick={confirmSignUpAndSignIn}
      />
      <Button text="Resend code" isDisabled={isLoading} onClick={() => {}} />
    </>
  )
}

export default ConfirmCodeView
