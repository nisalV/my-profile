import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import { useLocation } from 'wouter'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import { buttonStyles } from '../../Common/Styles/ButtonStyles'
import { commonStyles } from '../../Common/Styles/Styles'
import { inputStyles } from '../../Common/Styles/InputStyles'
import Text from '../../CoreComponents/TextComponent/Text'
import { useSignIn } from '../../Hooks/Auth'

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

  const { isLoading, signIn } = useSignIn({ userData })

  return (
    <div {...stylex.props(commonStyles.mainWrapperStyles)}>
      <div {...stylex.props(commonStyles.authItemsContainerStyles)}>
        <Text
          text={'Hi there, lets Sign in...'}
          textStyles={commonStyles.authHeadersTextStyles}
        />
        <Spacer height={30} />
        <Input
          id="userEmail"
          placeholder="Email"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={onChangeEmail}
        />
        <Spacer height={25} />
        <Input
          id="userPassword"
          type="password"
          placeholder="Password"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={onChangePassword}
        />
        <Spacer height={40} />
        <Button
          text="Sign in"
          hideOverlay={true}
          isDisabled={isLoading}
          isLoading={isLoading}
          buttonStyles={buttonStyles.signInButtonStyles}
          textStyles={buttonStyles.headerButtonTextStyles}
          onClick={signIn}
        />
        <Spacer height={30} />
        <div {...stylex.props(buttonStyles.subButtonWrapper)}>
          <Button
            text="Sign up"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => setLocation('/signup')}
          />
          <Spacer width={30} />
          <Button
            text="Forgot password?"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => setLocation('/forgot-password')}
          />
          <Spacer width={30} />
          <Button
            text="Home"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => setLocation('/')}
          />
        </div>
      </div>
    </div>
  )
}

export default SignInView
