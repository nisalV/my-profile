import {
  signIn,
  signUp,
  signOut,
  resendSignUpCode,
  resetPassword,
  confirmSignUp,
  confirmResetPassword,
  getCurrentUser,
  fetchAuthSession,
} from 'aws-amplify/auth'

export const authConfig = {
  Auth: {
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    region: process.env.REGION,
    Cognito: {
      userPoolClientId: process.env.CLIENT_ID as string,
      userPoolId: process.env.COGNITO_POOL_ID as string,
    },
  },
}

type SignUpProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
}

export async function signUpUser({
  firstName,
  lastName,
  email,
  password,
  onSuccess,
  setLoading,
  onError,
}: SignUpProps) {
  setLoading(true)
  try {
    await signUp({
      username: email,
      password: password,
      options: {
        userAttributes: {
          name: firstName + ' ' + lastName,
          given_name: firstName,
          family_name: lastName,
          email: email,
        },
      },
    })
      .then((response) =>
        response?.userId
          ? onSuccess()
          : onError && onError({ message: 'User not created' })
      )
      .catch((error) => onError && onError(error))
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type SignUpConfirmationProps = {
  username: string
  password: string
  confirmationCode: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
}

export async function signUpConfirmation({
  username,
  confirmationCode,
  onSuccess,
  setLoading,
  onError,
}: SignUpConfirmationProps) {
  setLoading(true)
  try {
    await confirmSignUp({
      username,
      confirmationCode,
    })
      .then((response) =>
        response.isSignUpComplete
          ? onSuccess()
          : onError && onError({ message: 'User not signed up' })
      )
      .catch((error) => onError && onError(error))
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type ResendSignUpCodeProps = {
  email: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
}

export async function resendSignUpCodeUser({
  email,
  onSuccess,
  setLoading,
  onError,
}: ResendSignUpCodeProps) {
  setLoading(true)
  try {
    await resendSignUpCode({ username: email })
      .then(() => onSuccess())
      .catch((error) => onError && onError(error))
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type SignInProps = {
  username: string
  password: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
  navigateToResetPassword?: () => void
  navigateToConfirmSignIn?: () => void
}

export async function signInUser({
  username,
  password,
  onSuccess,
  setLoading,
  onError,
  navigateToResetPassword,
  navigateToConfirmSignIn,
}: SignInProps) {
  setLoading(true)
  try {
    await signIn({
      username,
      password,
    })
      .then((response) =>
        response?.nextStep?.signInStep === 'DONE'
          ? onSuccess()
          : response?.nextStep?.signInStep === 'RESET_PASSWORD'
            ? navigateToResetPassword && navigateToResetPassword()
            : response?.nextStep?.signInStep?.startsWith('CONFIRM')
              ? navigateToConfirmSignIn && navigateToConfirmSignIn()
              : onError && onError({ message: 'User not signed in' })
      )
      .catch((error) => onError && onError(error))
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type SignOutUserProps = {
  setLoading: (loading: boolean) => void
  onSuccessSignOut?: () => void
  onError?: (error: any) => void
}

export async function signOutUser({
  setLoading,
  onSuccessSignOut,
  onError,
}: SignOutUserProps) {
  setLoading(true)
  try {
    await signOut()
      .then(onSuccessSignOut && onSuccessSignOut)
      .catch(onError && onError)
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type ResetPasswordProps = {
  username: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
}

export async function resetUserPassword({
  username,
  onSuccess,
  setLoading,
  onError,
}: ResetPasswordProps) {
  setLoading(true)
  try {
    await resetPassword({ username })
      .then((output) => {
        if (
          output.nextStep.resetPasswordStep ===
          'CONFIRM_RESET_PASSWORD_WITH_CODE'
        ) {
          onSuccess()
        } else {
          onError && onError({ message: 'User can not be reset' })
        }
      })
      .catch(
        (error) => onError && onError(error?.message || 'User can not be reset')
      )
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type ConfirmResetPasswordProps = {
  username: string
  newPassword: string
  confirmationCode: string
  onSuccess: () => void
  setLoading: (loading: boolean) => void
  onError?: (error: any) => void
}

export async function confirmResetUserPassword({
  username,
  newPassword,
  confirmationCode,
  onSuccess,
  setLoading,
  onError,
}: ConfirmResetPasswordProps) {
  setLoading(true)
  try {
    await confirmResetPassword({ username, newPassword, confirmationCode })
      .then(() => onSuccess())
      .catch((error) => onError && onError(error?.message))
      .finally(() => setLoading(false))
  } catch (error) {
    onError && onError(error)
    setLoading(false)
  }
}

type CurrentAuthenticatedUserProps = {
  currentUser: (user: string | null) => void
}
export async function currentAuthenticatedUser({
  currentUser,
}: CurrentAuthenticatedUserProps) {
  try {
    const { userId, username } = await getCurrentUser()
    if (userId && username) {
      currentUser(userId)
    } else {
      currentUser(null)
    }
  } catch (err) {
    currentUser(null)
  }
}

type CurrentSessionProps = {
  currentSession: (tokens: any) => void
}

export async function currentSession({ currentSession }: CurrentSessionProps) {
  try {
    const { tokens } = await fetchAuthSession()
    if (tokens) {
      currentSession(tokens)
    } else {
      currentSession(null)
    }
  } catch (err) {
    currentSession(null)
  }
}
