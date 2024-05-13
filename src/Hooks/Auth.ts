import { useCallback, useState } from 'react'
import { useLocation } from 'wouter'
import {
  confirmResetUserPassword,
  resetUserPassword,
  signInUser,
  signUpConfirmation,
  signUpUser,
} from '../Common/Authentication'

type SignUpHookProps = {
  userData: {
    email: string
    firstName: string
    lastName: string
    password: string
  }
  setShowConfirmSignUp: (show: boolean) => void
}

export const useSignUp = ({
  userData,
  setShowConfirmSignUp,
}: SignUpHookProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const signUp = useCallback(async () => {
    userData.email?.trim()?.length > 0 &&
    userData.firstName?.trim()?.length > 0 &&
    userData.lastName?.trim()?.length > 0 &&
    userData.password?.trim()?.length > 0
      ? await signUpUser({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          onSuccess: () => setShowConfirmSignUp(true),
          onError: (error) => console.log('signUpUser error: ', error),
          setLoading: setIsLoading,
        })
      : alert('Please fill all fields')
  }, [userData])

  return { isLoading, signUp }
}

type ConfirmSignUpHookProps = {
  userData: { email: string; password: string; code: string }
}

export const useConfirmSignUp = ({ userData }: ConfirmSignUpHookProps) => {
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
  return {
    isLoading,
    confirmSignUpAndSignIn,
  }
}

type SigninHookProps = {
  userData: { email: string; password: string }
}
export const useSignIn = ({ userData }: SigninHookProps) => {
  const [, setLocation] = useLocation()

  const [isLoading, setIsLoading] = useState(false)

  const signIn = useCallback(async () => {
    userData.email?.trim()?.length > 0 && userData.password?.trim()?.length > 0
      ? await signInUser({
          username: userData.email,
          password: userData.password,
          onSuccess: () => setLocation('/home'),
          onError: (error) => console.log('signInUser error: ', error),
          setLoading: setIsLoading,
          navigateToResetPassword: () => setLocation('/fogot-password'),
        })
      : alert('Please enter email and password')
  }, [userData])

  return { isLoading, signIn }
}

type ResetPasswordHookProps = {
  email: string
  onResetRequestSent: (sent: boolean) => void
}

export const useConfirmResettingPassword = ({
  email,
  onResetRequestSent,
}: ResetPasswordHookProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const confirmRessetingPassword = useCallback(async () => {
    await resetUserPassword({
      username: email,
      onSuccess: () => onResetRequestSent(true),
      onError: (error) => {
        onResetRequestSent(false)
        console.log('resetPassword1 error: ', error)
      },
      setLoading: setIsLoading,
    })
  }, [email])

  return { isLoading, confirmRessetingPassword }
}

type ConfirmPasswordHookProps = {
  email: string
  code: string
  password: string
}

export const useConfirmPassword = ({
  email,
  code,
  password,
}: ConfirmPasswordHookProps) => {
  const [, setLocation] = useLocation()

  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = useCallback(async () => {
    console.log('resetPassword', { email, code, password })
    await confirmResetUserPassword({
      username: email,
      confirmationCode: code,
      newPassword: password,
      onSuccess: () => {
        console.log('Password reset successfully')
        setLocation('/signin')
      },
      setLoading: setIsLoading,
      onError: (error) => console.log('resetPassword error: ', error),
    })
  }, [email, code, password])

  return { isLoading, resetPassword }
}
