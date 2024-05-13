import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import Text from '../../CoreComponents/TextComponent/Text'
import { SignUpUserData } from '../../Common/types'
import { commonStyles } from '../../Common/Styles/Styles'
import { inputStyles } from '../../Common/Styles/InputStyles'
import { buttonStyles } from '../../Common/Styles/ButtonStyles'
import { useConfirmSignUp } from '../../Hooks/Auth'

type ConfirmCodeViewProps = {
  userData: SignUpUserData
  onChange: (key: string, value: string) => void
}

const ConfirmCodeView = ({ userData, onChange }: ConfirmCodeViewProps) => {
  const { isLoading, confirmSignUpAndSignIn } = useConfirmSignUp({ userData })

  return (
    <div {...stylex.props(commonStyles.mainWrapperStyles)}>
      <div {...stylex.props(commonStyles.authItemsContainerStyles)}>
        <Text
          text={'We have sent you a code to your email.\nEnter it here'}
          textStyles={commonStyles.authHeadersTextStyles}
        />
        <Spacer height={30} />
        <Input
          id="signUpConfirmationCode"
          placeholder="Code"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={(text) => onChange('code', text)}
        />
        <Spacer height={40} />
        <Button
          text="Confirm email"
          isDisabled={isLoading || userData?.code?.trim()?.length === 0}
          isLoading={isLoading}
          buttonStyles={buttonStyles.signUpButtonStyles}
          textStyles={buttonStyles.headerButtonTextStyles}
          onClick={confirmSignUpAndSignIn}
        />
        <Spacer height={30} />
        <div {...stylex.props(buttonStyles.subButtonWrapper)}>
          <Button
            text="Resend code"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmCodeView
