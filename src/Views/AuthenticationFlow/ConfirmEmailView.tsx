import { useCallback, useRef, useState } from 'react'
import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { resetUserPassword } from '../../Common/Authentication'
import { useLocation } from 'wouter'
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

type ConfirmEmailViewProps = {
  setEmail: (email: string | null) => void
}

const ConfirmEmailView = ({ setEmail }: ConfirmEmailViewProps) => {
  const email = useRef('')

  const [, setLocation] = useLocation()

  const [isLoading, setIsLoading] = useState(false)

  const confirmRessetingPassword = useCallback(async () => {
    await resetUserPassword({
      username: email.current,
      onSuccess: () => setEmail(email.current),
      onError: (error) => {
        setEmail(null)
        console.log('resetPassword error: ', error)
      },
      setLoading: setIsLoading,
    })
  }, [])

  return (
    <>
      <h1 {...stylex.props(Styles.headerStyles)}>Confirm Email</h1>
      <Spacer height={20} />
      <Input
        id="resetPasswordEmail"
        placeholder="Email"
        inputWrapperStyles={null}
        onChangeText={(text) => (email.current = text)}
      />
      <Spacer height={20} />
      <Button
        text="Confirm"
        isDisabled={isLoading}
        isLoading={isLoading}
        buttonStyles={Styles.buttonStyles}
        onClick={confirmRessetingPassword}
      />
      <Button
        text="Go To Sign In"
        isDisabled={isLoading}
        onClick={() => setLocation('/signin')}
      />
    </>
  )
}

export default ConfirmEmailView
