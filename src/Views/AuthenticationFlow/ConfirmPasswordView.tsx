import { useCallback, useRef, useState } from 'react'
import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import { confirmResetUserPassword } from '../../Common/Authentication'
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

type ConfirmPasswordViewProps = {
  email: string
}

const ConfirmPasswordView = ({ email }: ConfirmPasswordViewProps) => {
  const code = useRef('')
  const password = useRef('')

  const [, setLocation] = useLocation()

  const [isLoading, setIsLoading] = useState(false)
  const [isPressedConfirm, setIsPressedConfirm] = useState(false)

  const resetPassword = useCallback(async () => {
    await confirmResetUserPassword({
      username: email,
      confirmationCode: code.current,
      newPassword: password.current,
      onSuccess: () => {
        console.log('Password reset successfully')
        setLocation('/signin')
      },
      setLoading: () => setIsLoading(true),
      onError: (error) => console.log('resetPassword error: ', error),
    })
  }, [email])

  return (
    <>
      <h1 {...stylex.props(Styles.headerStyles)}>
        {!isPressedConfirm ? 'Confirm Code' : 'Set your new password'}
      </h1>
      <Spacer height={20} />
      {!isPressedConfirm ? (
        <Input
          id="resetPasswordCode"
          placeholder="Code"
          inputWrapperStyles={null}
          onChangeText={(text) => (code.current = text)}
        />
      ) : (
        <Input
          id="password"
          type="password"
          placeholder="New password"
          inputWrapperStyles={null}
          onChangeText={(text) => (password.current = text)}
        />
      )}
      <Spacer height={40} />
      <Button
        text="Confirm"
        isDisabled={isLoading}
        isLoading={isLoading}
        buttonStyles={Styles.buttonStyles}
        onClick={() =>
          isPressedConfirm ? resetPassword() : setIsPressedConfirm(true)
        }
      />
    </>
  )
}

export default ConfirmPasswordView
