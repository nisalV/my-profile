import {
  signIn,
  signUp,
  signOut,
  confirmSignUp,
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
  onError?: (error: any) => void
}

export async function signUpUser({
  firstName,
  lastName,
  email,
  password,
  onSuccess,
  onError,
}: SignUpProps) {
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
  } catch (error) {
    onError && onError(error)
  }
}

type signUpConfirmationProps = {
  username: string
  password: string
  confirmationCode: string
  onSuccess: () => void
  onError?: (error: any) => void
}

export async function signUpConfirmation({
  username,
  confirmationCode,
  onSuccess,
  onError,
}: signUpConfirmationProps) {
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
  } catch (error) {
    onError && onError(error)
  }
}

type signInProps = {
  username: string
  password: string
  onSuccess: () => void
  onError?: (error: any) => void
}

export async function signInUser({
  username,
  password,
  onSuccess,
  onError,
}: signInProps) {
  try {
    await signIn({
      username,
      password,
    })
      .then((response) =>
        response?.isSignedIn
          ? onSuccess()
          : onError && onError({ message: 'User not signed in' })
      )
      .catch((error) => onError && onError(error))
  } catch (error) {
    onError && onError(error)
  }
}

type SignOutUserProps = {
  onSuccessSignOut?: () => void
  onError?: (error: any) => void
}

export async function signOutUser({
  onSuccessSignOut,
  onError,
}: SignOutUserProps) {
  try {
    await signOut()
      .then(onSuccessSignOut && onSuccessSignOut)
      .catch(onError && onError)
  } catch (error) {
    onError && onError(error)
  }
}

type CurrentAuthenticatedUserProps = {
  onSuccessSignOut?: () => void
}
export async function currentAuthenticatedUser({
  onSuccessSignOut,
}: CurrentAuthenticatedUserProps) {
  try {
    const currentUser = await getCurrentUser()
  } catch (err) {}
}

export async function currentSession({
  onSuccessSignOut,
}: CurrentAuthenticatedUserProps) {
  try {
    const currentSession = await fetchAuthSession()
  } catch (err) {}
}
