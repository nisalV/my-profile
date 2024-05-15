import stylex from '@stylexjs/stylex'
import Input from '../../CoreComponents/InputComponent/Input'
import Button from '../../CoreComponents/ButtonComponent/Button'
import Text from '../../CoreComponents/TextComponent/Text'
import { SignUpUserData } from '../../Common/types'
import { useLocation } from 'wouter'
import Spacer from '../../CoreComponents/Spacer/Spacer'
import { buttonStyles } from '../../Common/Styles/ButtonStyles'
import { commonStyles } from '../../Common/Styles/Styles'
import { inputStyles } from '../../Common/Styles/InputStyles'
import { useSignUp } from '../../Hooks/Auth'

type SignUpViewProps = {
  userData: SignUpUserData
  onChange: (key: string, value: string) => void
  setShowConfirmSignUp: (show: boolean) => void
}

const SignUpView = ({
  userData,
  onChange,
  setShowConfirmSignUp,
}: SignUpViewProps) => {
  const [, setLocation] = useLocation()

  const { isLoading, signUp } = useSignUp({ userData, setShowConfirmSignUp })

  return (
    <div {...stylex.props(commonStyles.mainWrapperStyles)}>
      <div {...stylex.props(commonStyles.authItemsContainerStyles)}>
        <Text
          text={'Hi :)\nFill this form to Sign up!'}
          textStyles={commonStyles.authHeadersTextStyles}
        />
        <Spacer height={30} />
        <Input
          id="userFirstName"
          placeholder="First name"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={(text) => onChange('firstName', text)}
        />
        <Spacer height={25} />
        <Input
          id="userLastName"
          placeholder="Last name"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={(text) => onChange('lastName', text)}
        />
        <Spacer height={25} />
        <Input
          id="userEmail"
          placeholder="Email"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={(text) => onChange('email', text)}
        />
        <Spacer height={25} />
        <Input
          id="userPassword"
          type="password"
          placeholder="Password"
          inputWrapperStyles={inputStyles.authInputWrapperStyles}
          onChangeText={(text) => onChange('password', text)}
        />
        <Spacer height={40} />
        <Button
          text="Sign up"
          isDisabled={
            isLoading ||
            userData?.email?.trim().length === 0 ||
            userData?.firstName?.trim().length === 0 ||
            userData?.lastName?.trim().length === 0 ||
            userData?.password?.trim().length === 0
          }
          hideOverlay={true}
          isLoading={isLoading}
          buttonStyles={buttonStyles.signUpButtonStyles}
          textStyles={buttonStyles.headerButtonTextStyles}
          onClick={signUp}
        />
        <Spacer height={30} />
        <div {...stylex.props(buttonStyles.subButtonWrapper)}>
          <Button
            text="Sign in"
            hideOverlay={true}
            isDisabled={isLoading}
            buttonStyles={buttonStyles.authSubButtonStyles}
            textStyles={buttonStyles.authSubButtonTextStyles}
            onClick={() => setLocation('/signin')}
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

export default SignUpView
