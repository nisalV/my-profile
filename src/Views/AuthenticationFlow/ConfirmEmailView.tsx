import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { useLocation } from 'wouter'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import { commonStyles } from '../../Common/Styles/Styles'
import Text from '../../CoreComponents/TextComponent/Text'
import { inputStyles } from '../../Common/Styles/InputStyles'
import { buttonStyles } from '../../Common/Styles/ButtonStyles'
import { useConfirmResettingPassword } from '../../Hooks/Auth'

type ConfirmEmailViewProps = {
  email: string
  setEmail: (email: string) => void
  onResetRequestSent: (sent: boolean) => void
}

const ConfirmEmailView = ({
  email,
  setEmail,
  onResetRequestSent,
}: ConfirmEmailViewProps) => {
  const [, setLocation] = useLocation()

  const { isLoading, confirmRessetingPassword } = useConfirmResettingPassword({
    email,
    onResetRequestSent: onResetRequestSent,
  })

  return (
    <div {...stylex.props(commonStyles.mainWrapperStyles)}>
      <div {...stylex.props(commonStyles.authItemsContainerStyles)}>
        <Text
          text={'Forgot your password?\nNo worries :)\nLets reset it!'}
          textStyles={commonStyles.authHeadersTextStyles}
        />
        <Spacer height={30} />
        <Input
          id="resetPasswordEmail"
          placeholder="Email"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={setEmail}
        />
        <Spacer height={40} />
        <Button
          text="Confirm email"
          isDisabled={isLoading || email?.trim()?.length === 0}
          isLoading={isLoading}
          buttonStyles={buttonStyles.signInButtonStyles}
          textStyles={buttonStyles.headerButtonTextStyles}
          onClick={confirmRessetingPassword}
        />
        <Spacer height={30} />
        <div {...stylex.props(buttonStyles.subButtonWrapper)}>
          <Button
            text="Go To Sign In"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => setLocation('/signin')}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmEmailView
