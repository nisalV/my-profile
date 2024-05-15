import { useState } from 'react'
import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import Text from '../../CoreComponents/TextComponent/Text'
import { commonStyles } from '../../Common/Styles/Styles'
import { inputStyles } from '../../Common/Styles/InputStyles'
import { buttonStyles } from '../../Common/Styles/ButtonStyles'
import { useConfirmPassword } from '../../Hooks/Auth'

type ConfirmPasswordViewProps = {
  email: string
}

const ConfirmPasswordView = ({ email }: ConfirmPasswordViewProps) => {
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [isPressedConfirm, setIsPressedConfirm] = useState(false)

  const { isLoading, resetPassword } = useConfirmPassword({
    email,
    code: code,
    password: password,
  })

  return (
    <div {...stylex.props(commonStyles.mainWrapperStyles)}>
      <div {...stylex.props(commonStyles.authItemsContainerStyles)}>
        <Text
          text={
            !isPressedConfirm
              ? `We've sent your a code to your email. Enter it here`
              : 'Ok, now set your new password!'
          }
          textStyles={commonStyles.authHeadersTextStyles}
        />
        <Spacer height={30} />
        {!isPressedConfirm ? (
          <Input
            id="resetPasswordCode"
            placeholder="Code"
            inputWrapperStyles={inputStyles.authInputWrapperStyles}
            onChangeText={setCode}
          />
        ) : (
          <Input
            id="password"
            type="password"
            placeholder="New password"
            inputWrapperStyles={inputStyles.authInputWrapperStyles}
            onChangeText={setPassword}
          />
        )}
        <Spacer height={40} />
        <Button
          text={!isPressedConfirm ? 'Next' : 'Confirm'}
          isDisabled={
            isLoading ||
            (!isPressedConfirm && code?.trim()?.length === 0) ||
            (isPressedConfirm && password?.trim()?.length === 0)
          }
          hideOverlay={true}
          isLoading={isLoading}
          buttonStyles={buttonStyles.signInButtonStyles}
          textStyles={buttonStyles.headerButtonTextStyles}
          onClick={() =>
            isPressedConfirm ? resetPassword() : setIsPressedConfirm(true)
          }
        />
      </div>
    </div>
  )
}

export default ConfirmPasswordView
